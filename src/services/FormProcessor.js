import merge           from 'lodash/merge';
import defaults        from 'lodash/defaultsDeep';
import has             from 'lodash/has';
import get             from 'lodash/get';
import set             from 'lodash/set';
import each            from 'lodash/each';
import reject          from 'lodash/reject';
import defaultTo       from 'lodash/defaultTo';
import { util }        from '../mixins/util';
import identity        from 'lodash/identity';
import sum             from '../functions/sum';
import min             from '../functions/min';
import buildDictionary from '../functions/buildDictionary';
import buildTree       from '../functions/buildTree';

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
				store: true,
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
				store: false
			},
			'group': {
				store: false
			},
			'list': {
				store: false
			},
			'pragma-table': {
				store: false
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
	 * @param {Field[]} fields - The field to process
	 * @returns {Field[]} The given fields with derived names and default values
	 */
	process(fields)
	{
		if (!fields || !fields.length) {
			return fields;
		}
		
		let i, field;
		
		for (i = 0; i < fields.length; i++) {
			field = fields[i];
			
			// Derive a name
			if (!field.name) {
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
	 * @param {string} path - The path of the field to derive a value for
	 * @param {Object} data - The data to derive values from
	 * @return {*} The derived value
	 */
	deriveValue(path, data)
	{
		let value = get(data, path);
		let field = this.dictionary[path];
		
		// All we can do is return the raw value if there's no field
		if (!field)
			return value;
		
		value = this.castValue(field, value);
		
		// Casting is all we need if there's no derivation function
		if (!field.derivation) {
			return defaultTo(value, defaultTo(field.default, null));
		}
		
		let derivation = field.derivation;
		let derivationFunction = derivation.function || null;
		
		let validFunction = this.functions[derivationFunction] &&
			typeof this.functions[derivationFunction] === 'function';
		
		// Just return the value or default if there's no valid derivation
		if (!validFunction) {
			return defaultTo(value, defaultTo(field.default, null));
		}
		
		let derivationArguments = this.deriveArguments(field, data);
		
		value = this.functions[derivationFunction](...derivationArguments);
		
		return defaultTo(value, defaultTo(field.default, null));
	}
	
	/**
	 * Derive arguments for a field's derivation.
	 *
	 * TODO: Derive arguments from '{this}', etc.
	 *
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
	 * @param {Object} [data] - The data used to unravel field templates
	 */
	updateTemplates(data)
	{
		let dictionary = this.dictionary;
		let newFields = [], value;

		// TODO: Clear existing fields for every template
		
		// Build new fields for each field with a template
		each(dictionary, (field) => {
			// We only care about fields with templates
			if (!field.template) {
				return;
			}
			
			// TODO: Dictionary lookup for template field path as a string
			
			value = get(data, field.path, []);
			
			console.log(field.path, value);
			
			// Build new fields for the template
			newFields.push(
				...this.buildTemplateFields(field, field.template, value)
			);
		});
		
		console.log(newFields);
		
		// Update the dictionary
		each(newFields, (field) => {
			dictionary[field.path] = field;
		});
	}
	
	/**
	 * Build fields from a template.
	 *
	 * Acts recursively on any child fields in the template.
	 *
	 * @param {Field} parent   - The parent field
	 * @param {Field} template - The template field
	 * @param {*}     value    - The value for the new field
	 * @return {Field[]} The new fields
	 */
	buildTemplateFields(parent, template, value)
	{
		if (!parent || !parent.path || !template || !value) {
			return [];
		}
		
		let field, fields = [];
		
		each(value, (item, key) => {
			// Build the new field
			field = this.buildTemplateField(parent, template, template.pathFragment || key, item);
			
			// Add it to the list of new fields
			fields.push(field);
		});
		
		return fields;
	}
	
	/**
	 * Build a single field from a template.
	 *
	 * TODO: Merge this method into buildTemplateFields(), it seems like they belong together
	 *
	 * @param {Field}      parent   - The parent field
	 * @param {Field}      template - The template field
	 * @param {string|int} key      - The key of the new field
	 * @param {*}          value    - The value of the new field
	 * @return {Field} The built field
	 */
	buildTemplateField(parent, template, key, value)
	{
		let field = merge(
			{},
			template,
			{
				path: [parent.path, template.pathFragment || key].join('.'),
				value: value
			}
		);
		
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
		for (let c = 0; c < children.length; c++) {
			let child = children[c];
			let childKey = child.pathFragment || c;
			let childValue = field.value ? field.value[childKey] : null;
			
			// TODO: Merge this method into buildTemplateFields(), it seems like they belong together
			let childField = this.buildTemplateField(field, child, childKey, childValue);
			this.dictionary[childField.path] = childField;
		}
		
		return field;
	}
	
	/**
	 * Update a property with the given value.
	 *
	 * @param {Object} data  - The data to update.
	 * @param {string} path  - The path to update the value of.
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
	 * @param {Object} [data] - The data to update with.
	 */
	update(data)
	{
		let dictionary = this.dictionary;
		let path;
		
		// Update templates
		this.updateTemplates(data);
		
		// Update values
		for (path in dictionary) {
			if (!dictionary[path])
				continue;
			
			this.updateField(dictionary[path], data);
		}
	}
	
	/**
	 * Update a field using the given data.
	 *
	 * Derives the field's value and unfolds its template.
	 *
	 * @param {Field}  field - The field to update.
	 * @param {Object} data  - The data to update with.
	 */
	updateField(field, data)
	{
		field.value = this.deriveValue(field.path, data);
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
	 * @param {FieldDictionary} dictionary
	 * @returns {Field}
	 */
	buildTree(dictionary)
	{
		return buildTree(dictionary);
	}
	
	/**
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
	 * @param {Field} tree
	 */
	buildData(tree)
	{
		let data = {};
		
		// TODO: Implement
	}
}

/**
 * A dictionary of properties.
 *
 * @typedef {Object.<string, Field>} FieldDictionary
 */

/**
 * A property description.
 *
 * @typedef {Object} Field
 *
 * @property {string}        path             - The path that matches this field.
 * @property {string}        [parent]         - The path for this field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}        [pathFragment]   - The path fragment used to compose the field's final path from its parents', if it's part of a template. Numbers are used if none is given. TODO: Rename to key, pathKey, pathSegment?
 * @property {string}        [type]           - The type of the field. Determines the tag used to render the field. Defaults to `'number'`. TODO: Make this strictly about data type rather than using for tags. That's what `input` should be for.
 * @property {string|Input}  [input]          - The input type to use for this field, if any. `'none'` shows the value without an input, `'hidden'` hides this field. // TODO: Rename? Might not be an actual input... (i.e. section)
 * @property {string}        [name]           - The property's name. Defaults to a sentence-case translation of the path's leaf. TODO: Rename to label?
 * @property {string}        [elaboration]    - An elaboration on the field's name. TODO: Input options
 * @property {string}        [description]    - The field's description.
 * @property {boolean}       [store=true]     - Whether to store the property. Defaults to `true`.
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
