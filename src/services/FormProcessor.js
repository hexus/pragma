import merge           from 'lodash/merge';
import defaults        from 'lodash/defaultsDeep';
import get             from 'lodash/get';
import set             from 'lodash/set';
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
 *
 * TODO: Rename to FormProcessor
 */
export default class FormProcessor
{
	/**
	 * Create a new property processor.
	 *
	 * @param {Field[]}                     fields        - Form fields.
 	 * @param {Object.<string, Derivation>} functions     - Functions to make available for field value derivations.
	 * @param {Object.<string, Object>}     inputOptions  - Default input options keyed by input type.
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
				type: 'number',
				derive: true
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
			'interpolate': identity // TODO: Actual interpolation/templating
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
	 * Process raw properties.
	 *
	 * Fills in default values, determines default names.
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
	 * @param {Object} data - The data to field values from
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
		if (!field.derivation)
			return defaultTo(value, defaultTo(field.default, null));
		
		let derivation = field.derivation;
		let derivationFunction = derivation.function || null;
		let derivationArguments = derivation.arguments || [];
		
		let validFunction = this.functions[derivationFunction] &&
			typeof this.functions[derivationFunction] === 'function';
		
		// Just return the value or default if there's no valid derivation
		if (!validFunction) {
			return defaultTo(value, defaultTo(field.default, null));
		}
		
		// TODO: Extract argument processing, derive arguments from '{this}', etc.
		let a, argument, args = [];
		
		for (a = 0; a < derivationArguments.length; a++) {
			argument = derivationArguments[a];

			// TODO: '{argument.path}' strings instead of any string, to allow constant string values
			if (typeof argument === 'string') {
				if (argument === field.path)
					args[a] = value;
				else
					args[a] = this.deriveValue(argument, data);
			} else {
				args[a] = argument;
			}
		}
		
		value = this.functions[derivationFunction](...args);
		
		return defaultTo(value, defaultTo(field.default, null));
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
	 * Update a property with the given value.
	 *
	 * @param {Object} data  - The data to update.
	 * @param {string} path  - The data path to update the value of.
	 * @param {*}      value - The value to update within the data according to the property.
	 * @return {*} The updated value
	 */
	updateValue(data, path, value)
	{
		let dictionary = this.dictionary;
		let field;
		
		// TODO: Bail if a field exists and its derivation is enabled
		
		// Update the value
		set(data, path, value);
		
		// Derive all values after this value change
		// TODO: Build and use a derivation argument map to derive only the affected properties? Derive all fields only if arguments aren't specified.
		for (let p in dictionary) {
			if (!dictionary[p])
				continue;
			
			field = dictionary[p];
			
			set(
				data,
				field.path,
				value = this.deriveValue(field.path, data)
			);
		}
		
		// Get the updated value
		return get(data, field.path);
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
	 * Build data from a tree of fields.
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
 * @property {string|int}    [parent]         - The path for this field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}        [pathFragment]   - The path fragment used to compose the property's final path from its parents', if it's part of a template. Numbers are used if none is given. TODO: Rename to name?
 * @property {string}        [type]           - The type of the field. Determines the tag used to render the field. Defaults to `'number'`. TODO: Make this strictly about data type rather than using for tags
 * @property {string|Input}  [input]          - The preferred input type of the property, if any. `'none'` shows the value without an input, `'hidden'` hides this property. // TODO: Rename? Might not be an actual input... (i.e. section)
 * @property {string}        [name]           - The property's name. Defaults to a sentence-case translation of the path's leaf. TODO: Rename to label
 * @property {string}        [elaboration]    - An elaboration on the property's name.
 * @property {string}        [description]    - The property's description.
 * @property {boolean}       [store=true]     - Whether to store the property. Defaults to `true`.
 * @property {boolean}       [disabled=false] - Whether the property is disabled. Implied if derivation is set.
 * @property {*}             [default]        - The property's default value. Defaults as appropriate to the `type`.
 * @property {boolean}       [derive=true]    - Whether to derive a value if a derivation is present.
 * @property {Derivation}    [derivation]     - The property's processing definition. If one exists, this property won't have an editable input.
 * @property {string}        [sanitizer]      - The property's sanitization function.
 * @property {string}        [validator]      - The property's validation function. Defaults as appropriate to the `type`.
 * @property {number}        [min=-100]       - The minimum value of the property if the type is `'number'`. Defaults to -100.
 * @property {number}        [max=100]        - The maximum value of the property if the type is `'number'`. Defaults to 100.
 * @property {number}        [step]           - The step value of the property if the type is `'number'`.
 * @property {Field[]}       [children]       - Child properties.
 * @property {Field|Field[]} [template] - Template property for creating more children for `'list'` or `'table'` property types.
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
 * @property {string}                function    - The name of the function to apply.
 * @property {Array<number|string>}  [arguments] - Constant values and property paths to become arguments to the function.
 */
