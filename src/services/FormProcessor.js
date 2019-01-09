import exprEval        from 'expr-eval';
import merge           from 'lodash/merge';
import defaults        from 'lodash/defaultsDeep';
import has             from 'lodash/has';
import get             from 'lodash/get';
import set             from 'lodash/set';
import pull            from 'lodash/pull';
import each            from 'lodash/each';
import pickBy          from 'lodash/pickBy';
import defaultTo       from 'lodash/defaultTo';
import difference      from 'lodash/difference';
import intersection    from 'lodash/intersection';
import isPlainObject   from 'lodash/isPlainObject';
import { util }        from '../mixins/util';
import sum             from '../functions/sum';
import multiply        from '../functions/multiply';
import buildDictionary from '../functions/buildDictionary';
import buildTree       from '../functions/buildTree';
import splitPath       from '../functions/splitPath';
import joinPath        from '../functions/joinPath';

/**
 * Processes lists of property definitions.
 *
 * Expands property lists to trees. Processes property derivations from source
 * data.
 */
export default class FormProcessor
{
	/**
	 * Create a new property processor.
	 *
	 * @constructor
	 * @param {Field[]}                     fields         - Form fields.
 	 * @param {Object.<string, Function>}   [functions]    - Functions to make available for field expressions.
	 * @param {Object.<string, Object>}     [inputOptions] - Default input options keyed by input type.
	 */
	constructor(fields, functions, inputOptions)
	{
		/**
		 * Default values for each field type.
		 *
		 * @type {Object}
		 */
		this.defaultValues = {
			'*': {
				type: 'number',
				visible: true
			},
			'virtual': {
				visible: false,
				virtual: true,
				omit: true
			},
			'string': {
				default: ''
			},
			'number': {
				default: 0
			},
			'boolean': {
				default: false
			},
			'section': {
			
			},
			'group': {
			
			},
			'list': {
			
			},
			'list-item': {
			
			},
			'pragma-table': {
			
			}
		};
		
		/**
		 * Expression functions.
		 *
		 * @type {Object.<string, Function>}
		 */
		this.functions = merge({
			concat: (...args) => args.join(''),
			keys:  Object.keys,
			multiply,
			sum
		}, functions);
		
		/**
		 * Default input options for each input type.
		 *
		 * @type {Object.<string, Object>}
		 */
		this.inputOptions = merge(
			{
				'number': {
					min: -100,
					max: 100,
					step: 1
				}
			},
			inputOptions
		);
		
		/**
		 * Typecasting functions.
		 *
		 * TODO: Strong casting functions
		 *
		 * @type {Object.<string, Function>}
		 */
		this.casts = {
			'string':  (f, v) => v == null ? '' : '' + v,
			'number':  (f, v) => util.clamp(v, f.min, f.max),
			'boolean': (f, v) => !!v
		};
		
		/**
		 * The set of form fields.
		 *
		 * @type {Field[]}
		 */
		this.fields = this.process(fields);
		
		/**
		 * Value cache for each field.
		 *
		 * @type {Object.<string, *>}
		 */
		this.valueCache = {};
		
		/**
		 * Fields keyed by path.
		 *
		 * @type {FieldDictionary}
		 */
		this.dictionary = this.buildDictionary(this.fields);
		
		/**
		 * Fields composed into a tree.
		 *
		 * @type {Field}
		 */
		this.tree = this.buildTree(this.dictionary);
		
		/**
		 * Field update dependencies keyed by path.
		 *
		 * @type {Object.<string, string[]>}
		 */
		this.fieldDependencies = {};
		
		/**
		 * Expression parser.
		 *
		 * @type {Parser}
		 */
		this.parser = new exprEval.Parser({
			operators: {
				in: true
			}
		});
		
		// Provide custom functions to the expression parser
		this.parser.functions = merge(this.parser.functions, this.functions);
		
		/**
		 * Field expression cache keyed by path.
		 *
		 * @type {Object.<string, Expression>}
		 */
		this.expressionCache = {};
	}
	
	/**
	 * Process raw field definitions.
	 *
	 * Fills in default values, derives default names.
	 *
	 * @protected
	 * @param {Field[]} fields - The field to process
	 * @returns {Field[]} The given fields with derived names and default values
	 */
	process(fields)
	{
		if (!fields || !fields.length) {
			return fields;
		}
		
		let i, field, pathFragment, parentPath;
		
		for (i = 0; i < fields.length; i++) {
			field = fields[i];
			
			// Ascertain a parent path and path fragment
			[parentPath, pathFragment] = splitPath(field.path);
			
			field.pathFragment = defaultTo(field.pathFragment, pathFragment);
			field.parent = defaultTo(field.parent, parentPath);
			
			// Derive a name
			if (field.name === undefined) {
				field.name = this.deriveName(field);
			}

			// Apply global defaults
			field = defaults(field, this.defaultValues['*']);
			
			// Apply type-specific defaults
			if (this.defaultValues[field.type]) {
				field = defaults(field, this.defaultValues[field.type]);
			}
			
			// Apply default input options
			// TODO: field.input instead of field.type
			if (this.inputOptions[field.type]) {
				field.options = field.options || {};
				
				field.options = defaults(field.options, this.inputOptions[field.type]);
			}
			
			// Disable the field if it has an expression
			if (!field.hasOwnProperty('disabled')) {
				field.disabled = !!field.expression || !!field.derivation;
			}
		}
		
		return fields;
	}
	
	/**
	 * Derive a property's name from its path.
	 *
	 * @protected
	 * @param {Field} field
	 * @return {string} The derived name
	 */
	deriveName(field)
	{
		let path = field.path;
		let lastDotIndex = path.lastIndexOf('.');
		
		return util.sentenceCase(path.substring(lastDotIndex + 1));
	}
	
	/**
	 * Derive a field's value from some data.
	 *
	 * @protected
	 * @param {string} path - The path of the field to derive a value for.
	 * @param {Object} data - The data to derive values from.
	 * @return {*} The derived value.
	 */
	deriveValue(path, data)
	{
		// Return from the value cache if a value is set
		if (this.valueCache.hasOwnProperty(path)) {
			return this.valueCache[path];
		}
		
		let value = get(data, path);
		let field = this.dictionary[path];
		
		// Return the raw value if there's no such field
		if (!field) {
			return value;
		}
		
		// Cast the value
		value = this.castValue(field, value);
		
		// Compute the field's expression
		value = this.computeFieldExpression(field, data, value);
		
		// Fall back to defaults
		value = defaultTo(value, defaultTo(field.default, null));
		
		// Update the value cache
		this.valueCache[path] = value;
		
		return value;
	}
	
	/**
	 * Compute a field's value from its expression.
	 *
	 * Causes the computation of any dependent fields.
	 *
	 * @param {Field}  field   - The field to compute the value of.
	 * @param {Object} data    - The data to derive values from.
	 * @param {*}      [value] - The default value for the field.
	 * @return {*} The computed value of the field's expression.
	 */
	computeFieldExpression(field, data, value)
	{
		value = this.getFieldValue(field, data);
		
		if (field.expression == null || typeof field.expression !== 'string') {
			return value;
		}
		
		// Parse the expression and substitute special variables
		let expression;
		
		// TODO: Memoize parsed expressions per-field and/or per-expression
		//       Extract building the expression into its own method to make
		//       this easier
		try {
			expression = this.parser.parse(field.expression);
		} catch (error) {
			console.error(`Error parsing expression for field '${field.path}': ${error.message}`);
			
			return value;
		}
		
		let substitutions = {
			$parent: field.parent
		};
		
		for (let s in substitutions) {
			try {
				expression = expression.substitute(s, substitutions[s]);
			} catch (error) {
				console.error(`Error substituting expression variable '${s}' for field '${field.path}: ${error.message}`);
				
				return value;
			}
		}
		
		// Derive values for the variables in the expression
		let variables = expression.variables({ withMembers: true });
		
		let values = {
			$this: field,
			$value: value
		};
		
		for (let v = 0; v < variables.length; v++) {
			let variable = variables[v];
			
			if (has(values, variable))
				continue;
			
			set(values, variable, this.deriveValue(variable, data));
		}
		
		// Build contextual functions
		values = merge(
			values,
			{
				field: (path) => this.dictionary[path],
				value: (path) => {
					// Add to the list of variables used by the expression
					variables.push(path);
					
					// Derive the value for the expression
					return this.deriveValue(path, data);
				}
			}
		);
		
		// Evaluate the expression
		try {
			value = expression.evaluate(values);
		} catch (error) {
			console.error(`Error evaluating expression for field '${field}': ${error.message}`);
		}
		
		//console.log('computeFieldExpression', field.path, expression.toString(), variables, values, value);
		//console.log('computeFieldExpression expression', expression);
		
		// Update the map of field update dependencies
		// TODO: Exclude contextual functions and variables
		// TODO: Move this to a processing step that evaluates the expression
		//       with spy functions
		for (let v = 0; v < variables.length; v++) {
			let variable = variables[v];
			
			this.fieldDependencies[variable] = this.fieldDependencies[variable] || [];
			
			if (this.fieldDependencies[variable].indexOf(field.path) < 0) {
				this.fieldDependencies[variable].push(field.path);
			}
		}
		
		return value;
	}
	
	/**
	 * Cast a value based on the property it belongs to.
	 *
	 * @public
	 * @param {Field} field
	 * @param {*} value
	 */
	castValue(field, value)
	{
		if (!field)
			return value;
		
		if (!this.casts[field.type])
			return value;

		if (Array.isArray(value))
			return value.map(this.casts[field.type]);
		
		return this.casts[field.type](field, value);
	}
	
	/**
	 * Get the keys of child fields that need creating, updating or removing for
	 * a given field.
	 *
	 * @protected
	 * @param {Field} field
	 * @param {Object} data
	 * @return array [newPaths[], existingPaths[], oldPaths[]]
	 */
	diffTemplateFieldKeys(field, data)
	{
		// Grab the data keys and child field keys (path fragments)
		let childData      = this.getFieldValue(field, data);
		let childDataKeys  = Object.keys(childData);
		let childFieldKeys = [];
		
		for (let j in this.dictionary) {
			if (this.dictionary[j].parent === field.path) {
				let [, pathFragment] = splitPath(this.dictionary[j].path);
				
				childFieldKeys.push(pathFragment);
			}
		}
		
		// Keys in data that aren't in fields
		let newKeys = difference(childDataKeys, childFieldKeys);
		
		// Keys in data and fields
		let existingKeys = intersection(childDataKeys, childFieldKeys);
		
		// Keys in fields that aren't in data
		let oldKeys = difference(childFieldKeys, childDataKeys);
		
		// console.log('diffTemplateFieldKeys()', field.path, 'newKeys', newKeys);
		// console.log('diffTemplateFieldKeys()', field.path, 'existingKeys', existingKeys);
		// console.log('diffTemplateFieldKeys()', field.path, 'oldKeys', oldKeys);
		
		return [newKeys, existingKeys, oldKeys];
	}
	
	/**
	 * Remove the field, and its children, at the given path.
	 *
	 * @param {string} path - The path to remove.
	 */
	removePath(path)
	{
		let field = this.dictionary[path];
		
		if (!field) {
			return;
		}
		
		// Recursively remove all child fields
		if (field.children && field.children.length) {
			for (let i = 0; i < field.children.length; i++) {
				this.removePath(field.children[i].path);
			}
		}
		
		// Remove the field from its parent
		let parent = this.dictionary[field.parent];

		pull(parent.children, field);
		
		// Remove the field from the dictionary
		delete this.dictionary[path];
	}
	
	/**
	 * Get the field at the given path.
	 *
	 * @param {string} path - The path of the field to get.
	 * @return {Field}
	 */
	getField(path)
	{
		return this.dictionary[path];
	}
	
	/**
	 * Get the current value of a field.
	 *
	 * @protected
	 * @param {Field} field     - The field to derive a value for
	 * @param {*}     [data={}] - Optional data to read values from
	 * @return {*} The current value of the field
	 */
	getFieldValue(field, data = {})
	{
		let value = null;
		
		if (!field) {
			return value;
		}
		
		value = get(data, field.path);
		
		// Merge default values if specified
		if (field.merge) {
			if (isPlainObject(field.default)) {
				return merge({}, field.default, field.value, value);
			}
			
			// TODO: Handle arrays
		}
		
		// Otherwise use the first defined value
		return defaultTo(value, defaultTo(field.value, field.default));
	}
	
	/**
	 * Get the field template of the given field.
	 *
	 * @protected
	 * @param {Field} field - The field to get the template of.
	 * @return {Field}
	 */
	getFieldTemplate(field)
	{
		let template = field.template;

		// Lookup the path to the template in the dictionary
		if (typeof field.template === 'string') {
			template = this.dictionary[field.template];
		}
		
		return template;
	}
	
	/**
	 * Unravel all templates into fields for the given data.
	 *
	 * @protected
	 * @param {Object} [data] - The data used to unravel field templates
	 * @return {FieldDictionary}
	 */
	updateTemplateFields(data)
	{
		let dictionary = this.dictionary,
			fieldsWithTemplates,
			i,
			j,
			key,
			value,
			template,
			newFields = [];

		// Find all fields that have templates for their children
		fieldsWithTemplates = Object.values(
			pickBy(dictionary, field => !!field.template)
		);
		
		//console.log('updateTemplateFields() fieldsWithTemplates', fieldsWithTemplates.length);
		
		for (i = 0; i < fieldsWithTemplates.length; i++) {
			let field = fieldsWithTemplates[i];
			
			// Find child fields that need to be added, updated or removed
			let [newKeys, existingKeys, oldKeys] = this.diffTemplateFieldKeys(field, data);
			
			// console.log('updateTemplateFields() newKeys', newKeys);
			// console.log('updateTemplateFields() existingKeys', existingKeys);
			// console.log('updateTemplateFields() oldKeys', oldKeys);
			
			// Remove old fields
			for (j = 0; j < oldKeys.length; j++) {
				key = oldKeys[j];
				
				this.removePath(joinPath(field.path, key));
			}
			
			// TODO: Update existing fields
			//       A dictionary-aware update would be good, without forcing rebuilds
			//       Just needs to check if all the right fields in the template exist
			
			// Build new fields
			value    = this.getFieldValue(field, data);
			template = this.getFieldTemplate(field);
			
			newFields = newFields.concat(
				this.buildTemplateFields(field, template, value, newKeys)
			);
		}
		
		//console.log('updateTemplateFields() new fields', newFields);
		
		// Add the new fields to the dictionary
		each(newFields, (field) => {
			dictionary[field.path] = field;
		});
	}
	
	/**
	 * Build fields from a template and its corresponding data.
	 *
	 * @protected
	 * @param {Field}    parent   - The parent field
	 * @param {Field}    template - The template field
	 * @param {*}        [data]   - The data used to build the new fields
	 * @param {string[]} [keys]   - The data keys to build fields for
	 * @return {Field[]} The new fields
	 */
	buildTemplateFields(parent, template, data, keys)
	{
		if (!parent || !parent.path || !template || !data) {
			return [];
		}
		
		keys = keys || null;
		let fields = [];
		
		// Build new fields for each data item
		for (let key in data) {
			if (keys && keys.indexOf(key) < 0)
				continue;
			
			let item = data[key];
			
			fields.push(
				...this.buildTemplateField(
					parent, template, key, item, this.dictionary[joinPath(parent.path, key)]
				)
			);
		}
		
		return fields;
	}
	
	/**
	 * Build a child field, and all of its child fields, from a parent field's
	 * template.
	 *
	 * Acts recursively on any child fields in the template.
	 *
	 * @protected
	 * @param {Field}      parent   - The parent field
	 * @param {Field}      template - The template field
	 * @param {string|int} key      - The key of the new field
	 * @param {*}          value    - The value of the new field
	 * @param {Field}      [field]  - An existing field to merge with
	 * @return {Field[]} The built fields
	 */
	buildTemplateField(parent, template, key, value, field)
	{
		//console.log('buildTemplateField', key, value);
		// TODO: Optional parent?
		
		field = merge(
			{},
			template,
			field,
			{
				path:   joinPath(parent.path, key),
				parent: parent.path,
				value:  value
			}
		);
		
		let fields = [field];
		
		// Extract template children and template
		let children = field.children;
		delete field.children;
		let fieldTemplate = field.template;
		delete field.template;
		
		// Drop the name so it can be derived from the new path
		delete field.name;
		
		// Add the new field to the parent children
		parent.children = parent.children || [];
		parent.children.push(field);
		
		// Create template children or explicit child fields
		if (fieldTemplate) {
			// TODO: Implement if we ever need sub templates... would be crazy
			// each(value, () => this.buildTemplateField(field, fieldTemplate, key, value));
			console.warn("Nested templates are not supported ('" + field.path + "')");
			return field;
		}
		
		// We can finish here if there are no child fields to build
		if (!children || !children.length) {
			return field;
		}
		
		// Recursively build the template children as fields
		for (let c = 0; c < children.length; c++) {
			let child      = children[c];
			let childKey   = child.pathFragment;
			let childValue = field.value ? field.value[childKey] : null;

			let childField = this.buildTemplateField(field, child, childKey, childValue);
			
			fields.push(childField);
		}
		
		// Process the fields
		fields = this.process(fields);
		
		return fields;
	}
	
	/**
	 * Get the value of a property.
	 *
	 * Falls back to default values as appropriate, merging objects.
	 *
	 * @param {string} path
	 */
	getValue(path)
	{
		return this.getFieldValue(this.dictionary[path]);
	}
	
	/**
	 * Update a property with the given value.
	 *
	 * @public
	 * @param {Object} data  - The data to update.
	 * @param {string} path  - The path of the field to update.
	 * @param {*}      value - The value to set.
	 * @return {*} The updated value
	 */
	setValue(data, path, value)
	{
		let field = this.dictionary[path];
		
		// Update the value if one is given
		if (value !== undefined) {
			if (field) {
				field.value = value;
			}
			
			set(data, path, value);
		}
		
		// Update all values after this value change
		// TODO: Build and use a derivation argument map to update only the affected properties? i.e. this.updatePath(path);
		// TODO: Derive all fields only if arguments aren't specified, our hand is forced in that situation i.e. this.update();
		//this.update(data);
		this.updatePath(path, data);
		
		// Get the updated value
		return get(data, path);
	}
	
	/**
	 * Clear the value cache.
	 *
	 * Optionally accepts a path to clear.
	 *
	 * @param {string} path
	 */
	clearValueCache(path = '')
	{
		this.valueCache = {};
		
		// TODO: Implement tree traversal for path field and its child fields
	}
	
	/**
	 * Update the form using the given data.
	 *
	 * @public
	 * @param {Object} [data] - The data to update with.
	 */
	update(data)
	{
		// Clear the value cache
		this.clearValueCache();
		
		// Update template fields
		this.updateTemplateFields(data);
		
		// Update the value of every field
		// TODO: Diff and update any *paths* that changed
		this.updateFields([this.tree], data);
	}
	
	/**
	 * Update the field at the given path.
	 *
	 * @param {string} path - The path of the field to update.
	 * @param {Object} data - The data to update with.
	 */
	updatePath(path, data)
	{
		this.clearValueCache(path);
		
		this.updateFields([this.dictionary[path]], data);
	}
	
	/**
	 * Update the given fields with the given data.
	 *
	 * Recursively descends into child fields and updates dependent fields.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to update.
	 * @param {Object}  data   - The data to update with.
	 */
	updateFields(fields, data)
	{
		if (!fields || !fields.length) {
			return;
		}
		
		let i, field;
		
		for (i = 0; i < fields.length; i++) {
			field = fields[i];
			
			if (!field) {
				continue;
			}
			
			// Update the field's value
			this.updateFieldValue(field, data);
			
			if (field.omit) {
				continue;
			}
			
			// Update the state's value
			this.updateDataValue(field, data);
			
			// Update the field's children
			this.updateFields(field.children, data);
			
			// Update fields dependent upon this one
			this.updateFieldDependencies(field, data);
		}
	}
	
	/**
	 * Update a field using the given data.
	 *
	 * Derives the field's value, setting it on the field and updating it in the
	 * data.
	 *
	 * @protected
	 * @param {Field}  field - The field to update.
	 * @param {Object} data  - The data to update with.
	 */
	updateFieldValue(field, data)
	{
		field.value = this.deriveValue(field.path, data);
	}
	
	/**
	 * Update data from the given field.
	 *
	 * @protected
	 * @param {Field}  field - The field to update with.
	 * @param {Object} data  - The data to update.
	 */
	updateDataValue(field, data)
	{
		if (!field.path || field.omit || field.virtual) {
			return;
		}
		
		set(data, field.path, field.value);
	}
	
	/**
	 * Update fields that are dependent upon the value of the given field.
	 *
	 * @protected
	 * @param {Field} field - The field to update dependent fields of.
	 * @param {Object} data - The data to update from.
	 */
	updateFieldDependencies(field, data)
	{
		let dependencyPaths = this.fieldDependencies[field.path];
		
		console.log(field.path, dependencyPaths);
		
		// Skip if the field has no dependencies
		if (!dependencyPaths || !dependencyPaths.length) {
			return;
		}
		
		let fields = [];
		
		for (let i = 0; i < dependencyPaths.length; i++) {
			if (!this.dictionary[dependencyPaths[i]]) {
				continue;
			}
			
			fields.push(this.dictionary[dependencyPaths[i]]);
		}
		
		this.updateFields(fields, data);
	}
	
	/**
	 * Build a dictionary from the given fields.
	 *
	 * @param {Field[]} fields
	 * @returns {FieldDictionary}
	 */
	buildDictionary(fields)
	{
		return buildDictionary(fields);
	}
	
	/**
	 * Build a tree from the given dictionary.
	 *
	 * @protected
	 * @param {FieldDictionary} dictionary
	 * @returns {Field}
	 */
	buildTree(dictionary)
	{
		return buildTree(dictionary);
	}
	
	/**
	 * Flatten a tree to a dictionary.
	 *
	 * @param {Field} tree
	 * @returns {FieldDictionary}
	 */
	flattenToDictionary(tree)
	{
		// TODO: Implement
	}
	
	/**
	 * Build data from the current form state.
	 *
	 * @param {Field}  field  - The root field to traverse from.
	 * @param {Object} [data] - The target data object.
	 * @return {Object} The built data.
	 */
	buildData(field, data)
	{
		data = data || {};
		
		if (!field)
			return data;
		
		let childData;
		
		// If the field has children, build the data of its children
		if (field.children) {
			for (let c = 0; c < field.children.length; c++) {
				childData = this.buildData(field.children[c], data);
			}
			
			return data;
		}
		
		// Set data if the field has a path
		if (field.path) {
			set(data, field.path, defaultTo(field.value, field.default));
		}
		
		return data;
	}
	
	/**
	 * Build data for a field's children template.
	 *
	 * TODO: Would be nice to avoid using the full field paths to retrieve the
	 *       results. But that would mean changing the paths afterwards.
	 *
	 * @protected
	 * @param {Field}  field  - The field to build child data for.
	 * @param {Object} [data] - The target data object.
	 * @return {Object} The built data.
	 */
	buildTemplateData(field, data)
	{
		if (!field.template) {
			return null;
		}
		
		// Clone the field
		field = merge({}, field);
		
		// Build the template field
		let templateFields = this.buildTemplateField(field, field.template, 0, null);
		
		// The root will always be the first
		let templateField = templateFields[0];
		
		// Build the data for the template field
		return get(this.buildData(templateField), field.path + '.0');
	}
	
	/**
	 * Add new child data for the field at the given path using its template.
	 *
	 * @public
	 * @param {Object}        data  - The data to change.
	 * @param {string}        path  - The path of the field to add new child data to.
	 * @param {string|number} [key] - Optional key to use for the new child data.
	 */
	addItem(data, path, key)
	{
		let field = this.dictionary[path];
		
		// We need to know about the field to do anything here
		if (!field) {
			return;
		}
		
		// Build the new child data
		let newData = this.buildTemplateData(field);
		
		// Get the target for the data
		let target = get(data, path, []);
		
		// Add the new child data to the collection
		if (Array.isArray(target)) {
			target.push(newData);
		} else if (key != null && typeof target === 'object') {
			target[key] = newData;
		} else {
			console.warn(
				`Could not create new child data for '${path}';` +
				` either it wasn't an array or wasn't an object with a key provided`
			);
		}
		
		// Set it back
		set(data, path, target);
		
		// Update the form
		this.update(data);
		//this.updatePath(path, data);
	}
	
	/**
	 * Remove data from the given path.
	 *
	 * @public
	 * @param {Object} data - The data to change.
	 * @param {string} path - The path to remove.
	 */
	remove(data, path)
	{
		let [parentPath, pathFragment] = splitPath(path);
		
		let parent = get(data, parentPath);
		
		if (!parent) {
			return;
		}
		
		if (Array.isArray(parent)) {
			parent.splice(pathFragment, 1);
		} else {
			delete parent[pathFragment];
		}
		
		console.log('remove', parentPath, pathFragment, parent);
		
		set(data, parentPath, parent);
		
		// Update the form
		this.update(data);
		//this.removePath(path);
	}
}

/**
 * A dictionary of fields.
 *
 * Fields are keyed by their path.
 *
 * @typedef {Object.<string, Field>} FieldDictionary
 */

/**
 * A field description.
 *
 * TODO: Update this to reflect the simplest approach to describing fields.
 *       Could also be called FieldOptions if passed to the constructor of a
 *       Field class.
 *
 * @typedef {Object} FieldDescription
 */

/**
 * A field.
 *
 * TODO: Formalise as a class?
 *
 * @typedef {Object} Field
 *
 * @property {string}         path             - The path of the field.
 * @property {string}         [parent]         - The path of the field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}         [pathFragment]   - The path fragment used to compose the field's final path from its parents', if it's part of a template. Numbers are used if none is given. TODO: Rename to leaf, key, pathKey or pathSegment?
 * @property {string}         [type]           - The type of the field. Determines the tag used to render the field. Defaults to `'number'`. TODO: Make this strictly about data type rather than using for tags. That's what `input` should be for.
 * @property {string}         [input]          - The input type to use for this field, if any. `'none'` shows the value without an input, `'hidden'` hides this field. // TODO: Rename? Might not be an actual input... (i.e. section)
 * @property {Object}         [options]        - The input options. A free-form object for different input types to interpret and utilise.
 * @property {string}         [name]           - The field's name. Defaults to a sentence-case translation of the path's final segment. TODO: Rename to label?
 * @property {string}         [description]    - The field's description.
 * @property {boolean}        [omit=false]     - Whether to prevent storing the property's value in data AND prevent updating any children. Defaults to `false`.
 * @property {boolean}        [virtual=false]  - Whether to prevent storing the property's value in data. Defaults to `false`.
 * @property {string|boolean} [visible=true]   - Whether the property is visible. Defaults to `true`. String values are interpreted as expressions.
 * @property {string|boolean} [disabled=false] - Whether the property is disabled. Defaults to `true` if `expression` is set, otherwise defaults to `false`. String values are interpreted as expressions. TODO: Input options?
 * @property {*}              [value]          - The field's value.
 * @property {*}              [default]        - The field's default value. Defaults appropriately for the set `type`.
 * @property {boolean}        [merge]          - Whether to merge the field's value with its default value.
 * @property {string}         [expression]     - An expression used to compute the field's value. Implies `disabled` when set.
 * @property {string}         [validator]      - The field's validation function. Defaults as appropriate to the `type`.
 * @property {number}         [min=-100]       - The minimum value of the field if the type is `'number'`. Defaults to -100. TODO: Input options
 * @property {number}         [max=100]        - The maximum value of the field if the type is `'number'`. Defaults to 100. TODO: Input options
 * @property {number}         [step]           - The step value of the field if the type is `'number'`. TODO: Input options
 * @property {string}         [extends]        - The path of a template field for this field to extend.
 * @property {Field[]}        [children]       - Child fields.
 * @property {Field|string}   [template]       - Template field for creating new child fields. Can be a `Field` or a `path`.
 */
