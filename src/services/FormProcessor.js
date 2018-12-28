import merge           from 'lodash/merge';
import defaults        from 'lodash/defaultsDeep';
import get             from 'lodash/get';
import set             from 'lodash/set';
import each            from 'lodash/each';
import pickBy          from 'lodash/pickBy';
import startsWith      from 'lodash/startsWith';
import defaultTo       from 'lodash/defaultTo';
import { util }        from '../mixins/util';
import identity        from 'lodash/identity';
import sum             from '../functions/sum';
import min             from '../functions/min';
import buildDictionary from '../functions/buildDictionary';
import buildTree       from '../functions/buildTree';
import splitPath       from '../functions/splitPath';

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
 	 * @param {Object.<string, Derivation>} [functions]    - Functions to make available for field value derivations.
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
				type: 'number'
			},
			'number': {
				default: 0,
				min: -100,
				max: 100,
				step: 1
			},
			'string': {
				default: ''
			},
			'section': {
			
			},
			'group': {
			
			},
			'list': {
			
			},
			'pragma-table': {
			
			}
		};
		
		/**
		 * Derivation functions.
		 *
		 * @type {Object.<string, Function>}
		 */
		this.functions = merge({
			'copy': identity,
			'sum': sum,
			'min': min,
			'expression': identity // TODO: Actual expression processing
		}, functions);
		
		/**
		 * Default input options keyed by input type.
		 */
		this.inputOptions = merge({
			'number': {
				min: -100,
				max: 100
			}
		}, inputOptions);
		
		/**
		 * Typecasting functions.
		 *
		 * TODO: Strong casting functions
		 *
		 * @type {Object.<string, Function>}
		 */
		this.casts = {
			'number': (p, v) => util.clamp(v, p.min, p.max)
		};
		
		/**
		 * The set of form fields.
		 *
		 * @type {Field[]}
		 */
		this.fields = this.process(fields);
		
		/**
		 * Fields keyed by path.
		 *
		 * @type {FieldDictionary}
		 */
		this.dictionary = buildDictionary(this.fields);
		
		/**
		 * Fields composed into a tree.
		 *
		 * @type {Field}
		 */
		this.tree = buildTree(this.dictionary);
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
	 * Derive a property's value from some data.
	 *
	 * @protected
	 * @param {string} path - The path of the field to derive a value for.
	 * @param {Object} data - The data to derive values from.
	 * @return {*} The derived value.
	 */
	deriveValue(path, data)
	{
		let value = get(data, path);
		let field = this.dictionary[path];
		
		// Return the raw value if there's no such field
		if (!field) {
			return value;
		}
		
		// Cast the value
		value = this.castValue(field, value);
		
		// Compute the field's expression
		value = this.computeExpression(field, data, value);
		
		return defaultTo(value, defaultTo(field.default, null));
	}
	
	/**
	 * Compute a field's value from its expression.
	 *
	 * Causes the computation of any dependent fields.
	 *
	 * @param {Field}  field   - The field to compute the value of.
	 * @param {Object} data    - The data to derive values from.
	 * @param {*}      [value] - The runtime default value for the field.
	 * @return {*} The computed value of the field's expression.
	 */
	computeExpression(field, data, value)
	{
		let derivation = field.derivation;
		
		let validFunction =
				derivation &&
				derivation.function &&
				this.functions[derivation.function] &&
				typeof this.functions[derivation.function] === 'function';
		
		// Return the value or default if there's no valid derivation
		if (!validFunction) {
			return defaultTo(value, defaultTo(field.default, null));
		}
		
		let derivationFunction = derivation.function;
		
		// Otherwise, derive any arguments and invoke the function with them
		let derivationArguments = this.deriveArguments(field, data);
		
		return this.functions[derivationFunction](...derivationArguments);
	}
	
	/**
	 * Derive arguments for a field's derivation.
	 *
	 * TODO: Derive arguments from '{this}', etc.
	 *
	 * @protected
	 * @param {Field} field - The field to derive derivation arguments for.
	 * @param {Object} data - The data to derive arguments from
	 * @return {*} The derived argument value
	 */
	deriveArguments(field, data)
	{
		if (!field.derivation || !field.derivation.arguments)
			return [];
		
		//
		let a, argument, args = [];
		
		for (a = 0; a < field.derivation.arguments.length; a++) {
			argument = field.derivation.arguments[a];
			
			// TODO: '{path}' strings instead of any string, to allow constant string values
			if (typeof argument === 'string') {
				if (argument === field.path)
					args[a] = get(data, field.path);
				else
					args[a] = this.deriveValue(argument, data);
			} else {
				args[a] = argument;
			}
		}
		
		return args;
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
	 * Unravel all templates into fields for the given data.
	 *
	 * TODO: Optimise by only rebuilding fields as necessary
	 *        - Update values of existing template fields
	 *        - Build new fields as necessary
	 *        - Remove redundant fields as necessary
	 *
	 * TODO: Stop this from replacing the dictionary reference, it causes problems
	 *
	 * @protected
	 * @param {Object} [data] - The data used to unravel field templates
	 */
	updateTemplateFields(data)
	{
		let dictionary = this.dictionary;
		let newFields = [], value;

		// Find all fields that have templates for their children
		let fieldsWithTemplates = pickBy(dictionary, field => !!field.template);
		
		// Clear existing template fields TODO: This is naive, see docblock above
		each(fieldsWithTemplates, (fieldWithTemplate) => {
			// Remove them from the dictionary
			dictionary = pickBy(
				dictionary,
				field => !startsWith(field.path, fieldWithTemplate.path + '.')
			);
			
			// Empty the field's children to make way for the next generation
			fieldWithTemplate.children = [];
		});
		
		// Build new fields for each field with a template
		each(fieldsWithTemplates, (field) => {
			let template = field.template;
			
			// Lookup the path to the template in the dictionary
			if (typeof field.template === 'string') {
				template = dictionary[field.template];
			}
			
			value = get(data, field.path);
			
			// Build new fields for the template
			newFields.push(
				...this.buildTemplateFields(field, template, value)
			);
		});
		
		console.log('new fields', newFields);
		
		// Update the dictionary with the new fields
		each(newFields, (field) => {
			dictionary[field.path] = field;
		});
		
		this.dictionary = dictionary;
		
		// lol
		// this.tree = this.buildTree(this.dictionary);
	}
	
	/**
	 * Build fields from a template and its corresponding data.
	 *
	 * @protected
	 * @param {Field} parent   - The parent field
	 * @param {Field} template - The template field
	 * @param {*}     [data]   - The data used to build the new fields
	 * @return {Field[]} The new fields
	 */
	buildTemplateFields(parent, template, data)
	{
		if (!parent || !parent.path || !template || !data) {
			return [];
		}
		
		let fields = [];
		
		// Build new fields for each data item
		each(data, (item, key) => {
			fields.push(
				...this.buildTemplateField(
					parent, template, key, item
				)
			);
		});
		
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
	 * @return {Field[]} The built fields
	 */
	buildTemplateField(parent, template, key, value)
	{
		console.log('buildTemplateField', key, value);
		// TODO: Optional parent?
		
		let field = merge(
			{},
			template,
			{
				path: [parent.path, key].join('.'),
				value: value
			}
		);
		
		let fields = [field];
		
		// Extract template children and template
		let children = field.children;
		delete field.children;
		let fieldTemplate = field.template;
		delete field.template;
		
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
		// TODO: Use each()
		for (let c = 0; c < children.length; c++) {
			let child = children[c];
			let childKey = child.pathFragment;
			let childValue = field.value ? field.value[childKey] : null;
			let childField = this.buildTemplateField(field, child, childKey, childValue);
			
			fields.push(childField);
		}
		
		// Process the fields
		fields = this.process(fields);
		
		return fields;
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
	updateValue(data, path, value)
	{
		let dictionary = this.dictionary;
		let field = dictionary[path];
		
		// Update the value if one is given
		if (value !== undefined) {
			// TODO: Also check whether the field's value is derived, skip setting anything if so
			if (field) {
				field.value = value;
			}
			
			set(data, path, value);
		}
		
		// Update all values after this value change
		// TODO: Build and use a derivation argument map to update only the affected properties? i.e. this.updatePath(path);
		// TODO: Derive all fields only if arguments aren't specified, our hand is forced in that situation i.e. this.update();
		this.update(data);
		
		// Get the updated value
		return get(data, path);
	}
	
	/**
	 * Update every field using the given data.
	 *
	 * @public
	 * @param {Object} [data] - The data to update with.
	 */
	update(data)
	{
		// Update template fields
		this.updateTemplateFields(data);
		
		// Update the value of every field
		this.updateFields([this.tree], data);
	}
	
	/**
	 * Update the given fields with the given data.
	 *
	 * Recursively descends into child fields.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to update.
	 * @param {Object} data    - The data to update with.
	 */
	updateFields(fields, data)
	{
		if (!fields || !fields.length) {
			return;
		}
		
		let i, field;
		
		for (i = 0; i < fields.length; i++) {
			field = fields[i];
			
			// Update the field's value
			this.updateFieldValue(field, data);
			
			if (field.omit) {
				continue;
			}
			
			// Update the data value
			this.updateDataValue(field, data);
			
			// Update the field's children
			this.updateFields(field.children, data);
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
	 * @param {Object}        data  - The data to change.
	 * @param {string}        path  - The path of the field to add new child data to.
	 * @param {string|number} [key] - Optional key to use for the new child data.
	 */
	addItem(data, path, key)
	{
		let field = this.dictionary[path];
		
		// We need to know about the field to do anything here
		if (!field)
			return;
		
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
	}
	
	/**
	 * Remove data from the given path.
	 *
	 * @param {Object} data - The data to change.
	 * @param {string} path - The path to remove.
	 */
	remove(data, path)
	{
		// if (!has(data, path)) {
		// 	return;
		// }
		
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
	}
}

/**
 * A dictionary of fields.
 *
 * @typedef {Object.<string, Field>} FieldDictionary
 */

/**
 * A field description.
 *
 * TODO: Update this to reflect the simplest approach to describing fields.
 *
 * @typedef {Object} FieldDescription
 */

/**
 * A field.
 *
 * TODO: Formalise as a class?
 *
 * @typedef {FieldDescription} Field
 *
 * @property {string}        path             - The path that matches this field.
 * @property {string}        [parent]         - The path for this field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}        [pathFragment]   - The path fragment used to compose the field's final path from its parents', if it's part of a template. Numbers are used if none is given. TODO: Rename to key, pathKey, pathSegment?
 * @property {string}        [type]           - The type of the field. Determines the tag used to render the field. Defaults to `'number'`. TODO: Make this strictly about data type rather than using for tags. That's what `input` should be for.
 * @property {string|Input}  [input]          - The input type to use for this field, if any. `'none'` shows the value without an input, `'hidden'` hides this field. // TODO: Rename? Might not be an actual input... (i.e. section)
 * @property {string}        [name]           - The property's name. Defaults to a sentence-case translation of the path's leaf. TODO: Rename to label?
 * @property {string}        [elaboration]    - An elaboration on the field's name. TODO: Input options
 * @property {string}        [description]    - The field's description.
 * @property {boolean}       [omit=false]     - Whether to prevent storing the property's value in data AND prevent updating any children. Defaults to `false`.
 * @property {boolean}       [virtual=false]  - Whether to prevent storing the property's value in data. Defaults to `false`.
 * @property {boolean}       [disabled=false] - Whether the property is disabled. Implied if derivation is set. TODO: Input options?
 * @property {*}             [value]          - The field's value.
 * @property {*}             [default]        - The field's default value. Defaults as appropriate to the `type`.
 * @property {Derivation}    [derivation]     - The field's processing definition. If one exists, this field won't have an editable input.
 * @property {string}        [validator]      - The field's validation function. Defaults as appropriate to the `type`.
 * @property {number}        [min=-100]       - The minimum value of the field if the type is `'number'`. Defaults to -100. TODO: Input options
 * @property {number}        [max=100]        - The maximum value of the field if the type is `'number'`. Defaults to 100. TODO: Input options
 * @property {number}        [step]           - The step value of the field if the type is `'number'`. TODO: Input options
 * @property {Field[]}       [children]       - Child fields.
 * @property {Field|string}  [template]       - Template field for creating new child fields. Can be a Field or a `path`.
 */

/**
 * An input description.
 *
 * @typedef {Object} Input
 *
 * @property {string}                                type    - The input type. Determines the tag to use to render the field.
 * @property {Object.<string|number, string|number>} options - Options for this input type.
 */

/**
 * A derivation definition of a property.
 *
 * Describes how to derive the property's final value.
 *
 * @typedef {Object} Derivation
 *
 * @property {string}                function         - The name of the function to apply.
 * @property {Array<number|string>}  [arguments]      - Constant values and property paths to become arguments to the function.
 * @property {boolean}               [disabled=false] - Whether this derivation is disabled
 */
