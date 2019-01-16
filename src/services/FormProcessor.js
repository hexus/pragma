import exprEval        from 'expr-eval';
import merge           from 'lodash/merge';
import defaults        from 'lodash/defaultsDeep';
import map             from 'lodash/map';
import reduce          from 'lodash/reduce';
import has             from 'lodash/has';
import get             from 'lodash/get';
import set             from 'lodash/set';
import pull            from 'lodash/pull';
import each            from 'lodash/each';
import defaultTo       from 'lodash/defaultTo';
import difference      from 'lodash/difference';
import intersection    from 'lodash/intersection';
import isPlainObject   from 'lodash/isPlainObject';
import toNumber        from 'lodash/toNumber';
import { util }        from '../mixins/util';
import sum             from '../functions/sum';
import sumBy           from 'lodash/sumBy';
import multiply        from '../functions/multiply';
import buildDictionary from '../functions/buildDictionary';
import buildTree       from '../functions/buildTree';
import splitPath       from '../functions/splitPath';
import joinPath        from '../functions/joinPath';

const UP = -1;
const BOTH = 0;
const DOWN = 1;

/**
 * Pragma form.
 *
 * Expands field lists a dictionary and tree. Processes field expressions from
 * state data.
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
				input: 'string',
				default: ''
			},
			'number': {
				input: 'number',
				default: 0
			},
			'boolean': {
				input: 'boolean',
				default: false
			},
			'section': {
				input: 'section'
			},
			'group': {
				input: 'group'
			},
			'list': {
				input: 'list'
			},
			'list-item': {
				input: 'list-item'
			},
			'table': {
				input: 'pragma-table'
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
			sum,
			sumBy,
			map,
			reduce
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
			'number':  (f, v) => toNumber(util.clamp(v, get(f, 'options.min'), get(f, 'options.max'))),
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
			if (this.inputOptions[field.input]) {
				field.options = field.options || {};
				
				field.options = defaults(field.options, this.inputOptions[field.input]);
			}
			
			// Disable the field implicitly if it has an expression
			if (!field.hasOwnProperty('disabled')) {
				field.disabled = !!field.expression;
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
		
		let field = this.getField(path);
		let value = get(data, path);
		
		// Return the raw value if there's no such field
		if (!field) {
			return value;
		}

		// Cast the value
		value = this.castValue(field, value);
		
		// Evaluate the field's expression
		value = this.evaluateFieldExpression(field, data, value);
		
		// Fall back to defaults
		value = defaultTo(value, defaultTo(field.default, null));
		
		// Update the value cache
		this.valueCache[path] = value;
		
		return value;
	}
	
	/**
	 * Build a field's expression.
	 *
	 * @param {Field} field - The field to build an expression for.
	 * @return {Expression} The built expression.
	 */
	buildFieldExpression(field)
	{
		if (field.expression == null || typeof field.expression !== 'string') {
			return null;
		}
		
		// Use the cached expression if one is available
		if (this.expressionCache[field.path]) {
			return this.expressionCache[field.path];
		}
		
		// Build the initial expression
		let expression;
		
		try {
			expression = this.parser.parse(field.expression);
		} catch (error) {
			console.error(`Error parsing expression for field '${field.path}': ${error.message}`);
			
			return null;
		}
		
		// Substitute contextual variables
		let substitutions = {
			$parent: field.parent
		};
		
		for (let s in substitutions) {
			try {
				expression = expression.substitute(s, substitutions[s]);
			} catch (error) {
				console.error(`Error substituting expression variable '${s}' for field '${field.path}: ${error.message}`);
				
				return null;
			}
		}
		
		this.expressionCache[field.path] = expression;
		
		return expression;
	}
	
	/**
	 * Evaluate a field's value from its expression.
	 *
	 * Causes the evaluation of any field dependencies as a result.
	 *
	 * @param {Field}  field   - The field to compute the value of.
	 * @param {Object} data    - The data to derive values from.
	 * @param {*}      [value] - The current value of the field.
	 * @return {*} The computed value of the field's expression.
	 */
	evaluateFieldExpression(field, data, value)
	{
		value = this.getFieldValue(field, data, value);
		
		// Parse the expression
		let expression = this.buildFieldExpression(field);
		
		if (!expression) {
			return value;
		}
		
		// TODO: Extract deriving variables and building contextual functions
		//       let variables = buildExpressionContext(field, data, expression, value)?
		//       Contextual functions should still update the same "variables" reference
		
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
				field: (path) => {
					variables.push(path);
					
					return this.getField(path);
				},
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
		
		//console.log('evaluateFieldExpression', field.path, expression.toString(), variables, values, value);
		//console.log('evaluateFieldExpression expression', expression);
		
		// Update the map of field update dependencies
		// TODO: Exclude contextual variables
		// TODO: Move this to an earlier processing step that evaluates the
		//       expression with spy functions
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

		// if (Array.isArray(value))
		// 	return value.map(this.casts[field.type]);
		
		value = this.casts[field.type](field, value);
		
		return value;
	}
	
	/**
	 * Get the keys of child fields that need creating, updating or removing for
	 * a given field.
	 *
	 * @protected
	 * @param {Field} field - The field with a template.
	 * @param {Object} data - The data to diff against.
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
	 * Get the parent field of the field at the given path.
	 *
	 * @param {Field} field
	 * @return {Field|null}
	 */
	getFieldParent(field)
	{
		if (!field) {
			return null;
		}
		
		return this.getField(field.parent);
	}
	
	/**
	 * Get the current value of a field.
	 *
	 * @protected
	 * @param {Field} field     - The field to get the value of
	 * @param {*}     [data={}] - Optional data to read current values from
	 * @param {*}     [value]   - Optional current value
	 * @return {*} The current value of the field
	 */
	getFieldValue(field, data = {}, value = null)
	{
		if (!field) {
			return value;
		}
		
		value = defaultTo(value, get(data, field.path));
		
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
	 * @return {Field|null}
	 */
	getFieldTemplate(field)
	{
		if (!field) {
			return null;
		}
		
		let template = field.template;
		
		// Lookup the path to the template field in the dictionary
		if (typeof field.template === 'string') {
			template = this.getField(field.template);
		}
		
		return template;
	}
	
	/**
	 * Get the fields dependent upon the given field.
	 *
	 * @param {Field} field
	 * @return {Field[]} The dependent fields
	 */
	getFieldDependencies(field)
	{
		let dependencies = this.fieldDependencies[field.path];
		
		// Skip if the field has no dependencies
		if (!dependencies || !dependencies.length) {
			return [];
		}
		
		let fields = [];
		
		for (let i = 0; i < dependencies.length; i++) {
			let dependency = this.getField(dependencies[i]);
			
			if (!dependency) {
				continue;
			}
			
			fields.push(dependency);
		}
		
		return fields;
	}
	
	/**
	 * Unravel all templates into fields for the given field and data.
	 *
	 * @protected
	 * @param {Field}  field  - The field to update template fields for.
	 * @param {Object} [data] - The data used to unravel field templates.
	 * @return {FieldDictionary}
	 */
	updateTemplateFields(field, data)
	{
		let dictionary = this.dictionary,
			i,
			key,
			path,
			value,
			template,
			newFields = [];

		// Find child fields that need to be added, updated or removed
		let [newKeys, existingKeys, oldKeys] = this.diffTemplateFieldKeys(field, data);
		
		// Remove old fields
		for (i = 0; i < oldKeys.length; i++) {
			key  = oldKeys[i];
			path = joinPath(field.path, key);
			
			this.removeField(this.getField(path));
		}
		
		// Update existing fields
		// TODO: A dictionary-aware update would be good, without forcing rebuilds
		//       Just needs to check if all the right fields in the template exist
		// for (i = 0; i < existingKeys.length; i++) {
		// 	key  = existingKeys[i];
		// 	path = joinPath(field.path, key);
		//
		// 	this.updateField(this.getField(path), data);
		// }
		
		// Build new fields
		value    = this.getFieldValue(field, data);
		template = this.getFieldTemplate(field);
		
		newFields = newFields.concat(
			this.buildTemplateFields(field, template, value, newKeys)
		);
		
		//console.log('updateTemplateFields() new fields', newFields);
		
		// Add the new fields to the dictionary and update them
		each(newFields, (field) => {
			dictionary[field.path] = field;
			
			//this.updateField(field, data, DOWN);
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
	buildTemplateFields(parent, template, data, keys = null)
	{
		if (!parent || !parent.path || !template || !data) {
			return [];
		}

		let fields = [];
		
		// Build new fields for each data item
		for (let key in data) {
			if (Array.isArray(keys) && keys.indexOf(key) < 0)
				continue;
			
			let item = data[key];
			
			fields.push(
				...this.buildTemplateField(
					parent, template, key, item, this.getField(joinPath(parent.path, key))
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
	 * TODO: Extract extending a field.
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
				path:         joinPath(parent.path, key),
				pathFragment: key,
				parent:       parent.path,
				value:        value
			}
		);
		
		/**
		 * @type {Field[]}
		 */
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
			return fields;
		}
		
		// We can finish here if there are no child fields to build
		if (!children || !children.length) {
			return fields;
		}
		
		
		// Recursively build the template children as fields
		let childFields = [];
		
		for (let c = 0; c < children.length; c++) {
			let child      = children[c];
			let childKey   = child.pathFragment;
			let childValue = field.value ? field.value[childKey] : null;

			childFields = childFields.concat(
				this.buildTemplateField(field, child, childKey, childValue)
			);
		}
		
		fields = fields.concat(childFields);
		
		// Process the fields
		fields = this.process(fields);
		
		return fields;
	}
	
	/**
	 * Get the current value of a field.
	 *
	 * Falls back to default values as appropriate, merging objects.
	 *
	 * @param {string} path - The path to the field.
	 * @return {*} The value of the field
	 */
	getValue(path)
	{
		return this.getFieldValue(this.getField(path));
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
		let field = this.getField(path);
		
		// Update the value if one is given
		if (value !== undefined) {
			if (field) {
				field.value = value;
			}
			
			set(data, path, value);
		}
		
		// Update the field at this path
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
		// Just empty the entire cache if there's no path is or there's no field
		// at the given path
		if (true || !path || !this.getField(path)) {
			// TODO: Remove lazy debugging
			this.valueCache = {};
			
			return;
		}
		
		let field = this.getField(path);
		
		// Clear the cached value for this field
		delete this.valueCache[field.path];
		
		// Clear cached values of parent fields
		let parent = this.getField(field.parent);
		
		while (parent) {
			delete this.valueCache[parent.path];
			
			parent = this.getField(parent.parent);
		}
		
		// Clear cached values of child fields
		let children = field.children;
		
		while (children && children.length) {
			let nextChildren = [];
			
			for (let i = 0; i < children.length; i++) {
				let child = children[i];
				
				delete this.valueCache[child.path];
				
				if (child.children)
					nextChildren = nextChildren.concat(child.children);
			}
			
			children = nextChildren;
		}
	}
	
	/**
	 * Update the form using the given data.
	 *
	 * @public
	 * @param {Object} [data] - The data to update with.
	 */
	update(data)
	{
		// Update the value of every field
		// TODO: Diff any *paths* that changed and update those
		//       i.e. implement diffTemplateFieldPaths()
		this.updatePath('', data);
	}
	
	/**
	 * Update the field at the given path.
	 *
	 * @param {string} path - The path of the field to update.
	 * @param {Object} data - The data to update with.
	 */
	updatePath(path, data)
	{
		this.updateField(this.getField(path), data);
	}
	
	/**
	 * Update the given fields with the given data.
	 *
	 * Recursively descends into child fields and updates dependent fields,
	 * including parents.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to update.
	 * @param {Object}  data   - The data to update with.
	 * @param {number} [direction=BOTH] - Update direction (UP: -1, BOTH: 0, DOWN: 1)
	 */
	updateFields(fields, data, direction)
	{
		if (!Array.isArray(fields) || !fields.length) {
			return;
		}
		
		for (let i = 0; i < fields.length; i++) {
			this.updateField(fields[i], data, direction);
		}
	}
	
	/**
	 * Update the given field with the given data.
	 *
	 * Recursively descends into child fields and updates dependent fields,
	 * including parents.
	 *
	 * @protected
	 * @param {Field}   field  - The fields to update.
	 * @param {Object}  data   - The data to update with.
	 * @param {number} [direction=BOTH] - Update direction (UP: -1, BOTH: 0, DOWN: 1)
	 */
	updateField(field, data, direction = BOTH)
	{
		if (!field) {
			return;
		}
		
		//console.log('updateField()', field.path);
		
		this.clearValueCache(field.path);
		
		// Update the field's children
		if (direction >= 0) {
			let template = this.getFieldTemplate(field);
			
			// TODO: This would be a good spot for an event to fire to allow plugins
			//       (like templates) to intercept child update behaviour
			if (template) {
				this.updateTemplateFields(field, data);
			}
			
			if (field.children) {
				this.updateFields(field.children, data);
			}
		}
		
		// Skip omitted fields
		if (field.omit) {
			return;
		}
		
		// Update the state's value
		this.updateDataValue(field, data);
		
		// Update the field's value (and update all fields dependent on this one)
		this.updateFieldValue(field, data);
	}
	
	/**
	 * Update data from the given field.
	 *
	 * @protected
	 * @param {Field}  field - The field to update with.
	 * @param {Object} data  - The data to update.
	 * @return {Object} The updated data.
	 */
	updateDataValue(field, data)
	{
		if (!field || field.omit || field.virtual) {
			return data;
		}
		
		set(data, field.path, this.deriveValue(field.path, data));
		
		return data;
	}
	
	/**
	 * Update a field using the given data.
	 *
	 * @protected
	 * @param {Field}  field - The field to update.
	 * @param {Object} data  - The data to update with.
	 */
	updateFieldValue(field, data)
	{
		if (!field) {
			return;
		}
		
		// Update the field value
		field.value = get(data, field.path);
		
		// Update all fields dependent on this one
		this.updateFieldDependencies(field, data);
	}
	
	/**
	 * Update fields that are dependent upon the value of the given field.
	 *
	 * @protected
	 * @param {Field} field - The field to update dependencies of.
	 * @param {Object} data - The data to update from.
	 */
	updateFieldDependencies(field, data)
	{
		// Recursively update parent field values
		this.updateFieldParents(field, data);
		
		//console.log('updateFieldDependencies()', field.path, dependencyPaths);
		
		// Update fields listed as dependencies
		let dependencies = this.getFieldDependencies(field);
		
		this.updateFields(dependencies, data);
	}
	
	/**
	 * Update the parent fields of the given field.
	 *
	 * @protected
	 * @param {Field}  field - The field to update parents of.
	 * @param {Object} data  - The data to update with.
	 */
	updateFieldParents(field, data)
	{
		this.updateField(this.getFieldParent(field), data, UP);
	}
	
	/**
	 * Remove data at the given path and update parent fields.
	 *
	 * @protected
	 * @param {string}  path - The path to remove.
	 * @param {Object}  data - The data to remove the path from.
	 */
	removePath(path, data)
	{
		let field = this.getField(path);
		
		if (!field) {
			return;
		}
		
		// Remove the state data
		this.removeData(field, data);
		
		// Update the parent field
		this.updateField(this.getFieldParent(field), data);
	}
	
	/**
	 * Remove the given fields.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to remove.
	 */
	removeFields(fields)
	{
		if (!Array.isArray(fields) || !fields.length) {
			return;
		}
		
		for (let i = 0; i < fields.length; i++) {
			this.removeField(fields[i]);
		}
	}
	
	/**
	 * Remove a field.
	 *
	 * Clears dictionary and parent references to the field.
	 *
	 * Doesn't remove data or update parent field values.
	 *
	 * @protected
	 * @param {Field}  field - The field to remove.
	 */
	removeField(field)
	{
		if (!field) {
			return;
		}
		
		this.clearValueCache(field.path);
		
		// Remove the field's children
		this.removeFields(field.children);
		
		// Remove the field from the dictionary and dependency list
		delete this.dictionary[field.path];
		delete this.fieldDependencies[field.path];
		
		// Remove the field from its parent
		let parent = this.getFieldParent(field);
		pull(parent.children, field);
	}
	
	/**
	 * Remove a field's path from the given data.
	 *
	 * @param {Field} field - The field whose path to remove from data.
	 * @param {Object} data - The data to remove from.
	 */
	removeData(field, data)
	{
		if (!field) {
			return;
		}
		
		let parent = this.getField(field.parent);
		
		if (!parent) {
			return;
		}
		
		let parentPath = parent.path;
		let parentValue = this.getFieldValue(parent, data);
		let key = field.pathFragment;
		
		if (Array.isArray(parentValue)) {
			parentValue.splice(key, 1);
		} else {
			delete parentValue[key];
		}
		
		set(data, parentPath, parentValue);
		
		//this.updateFieldValue(parent, data);
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
	 * Build data from the current field state.
	 *
	 * @param {Field}  field     - The root field to traverse from.
	 * @param {Object} [data={}] - The target data object.
	 * @return {Object} The built data.
	 */
	buildData(field, data = {})
	{
		if (!field) {
			return data;
		}
		
		let childData;
		
		// If the field has children, build the data of its children
		if (field.children) {
			for (let c = 0; c < field.children.length; c++) {
				childData = this.buildData(field.children[c], data);
			}
			
			return data;
		}
		
		// Set data
		set(data, field.path, defaultTo(field.value, field.default));
		
		return data;
	}
	
	/**
	 * Build data for a field's template.
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
		let template = this.getFieldTemplate(field);
		
		if (!field.template) {
			return null;
		}
		
		// TODO: Try to build data directly from the template
		//       There might be no need to build this field
		
		// Clone the field
		field = merge({}, field);
		
		// Build the template field
		let templateFields = this.buildTemplateField(field, template, 0, null);
		
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
		let field = this.getField(path);

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
		this.updatePath(path, data);
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
		this.removePath(path, data);
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
 * @property {string}         [pathFragment]   - The leaf of the field's path. TODO: Rename to key
 * @property {string}         [type]           - The type of the field. Determines the tag used to render the field. Defaults to `'number'`.
 * @property {string}         [input]          - The input type to use for this field, if any. // TODO: Rename? Might not be an actual input... (i.e. section)
 * @property {Object}         [options]        - The input options. A free-form object for different input types to interpret and utilise.
 * @property {string}         [name]           - The field's name. Defaults to a sentence-case translation of the path's final segment. TODO: Rename to label?
 * @property {string}         [description]    - The field's description.
 * @property {boolean}        [omit=false]     - Whether to prevent storing the property's value in data AND prevent updating any children. Defaults to `false`.
 * @property {boolean}        [virtual=false]  - Whether to prevent storing the property's value in data. Defaults to `false`.
 * @property {string|boolean} [visible=true]   - Whether the property is visible. Defaults to `true`. String values are interpreted as expressions.
 * @property {string|boolean} [disabled=false] - Whether the property is disabled. Defaults to `true` if `expression` is set, otherwise defaults to `false`. String values are interpreted as expressions. TODO: Input options?
 * @property {*}              [value]          - The field's value.
 * @property {*}              [default]        - The field's default value. Defaults appropriately for the set `type`.
 * @property {boolean}        [merge]          - Whether to merge the field's non-scalar value with its default value.
 * @property {string}         [expression]     - An expression used to compute the field's value. Implies `disabled` when set.
 * @property {string}         [validator]      - The field's validation function. Defaults as appropriate to the `type`.
 * @property {string}         [extends]        - The path of a field to extend.
 * @property {Field[]}        [children]       - Child fields.
 * @property {Field|string}   [template]       - Template field that all child fields should extend. Can be a `Field` or a `path` to a field.
 * @property {Object|array}   [fixed]          - A map or list of child keys that cannot be removed at runtime, if present.
 */
