import merge from 'lodash/merge';
import defaults from 'lodash/defaultsDeep';
import get from 'lodash/get';
import set from 'lodash/set';
import defaultTo from 'lodash/defaultTo';
import { util } from '../mixins/util';
import identity from 'lodash/identity';
import sum from '../functions/sum';
import min from '../functions/min';
import buildDictionaryFrom from '../functions/buildDictionaryFrom';
import buildTreeFrom from '../functions/buildTreeFrom';

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
	 * @param {Field[]}                     fields    - Form fields.
 	 * @param {Object.<string, Derivation>} functions - Functions to make available for field value derivations.
	 */
	constructor(fields, functions)
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
		 * @type {Field[]}
		 */
		this.fields = this.process(fields);
		
		/**
		 * @type {FieldDictionary}
		 */
		this.dictionary = buildDictionaryFrom(this.fields);
		
		/**
		 * @type {Field[]}
		 */
		this.tree = buildTreeFrom(this.dictionary);
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
		
		let i, property;
		
		for (i = 0; i < fields.length; i++) {
			property = fields[i];
			
			// Derive a name
			if (!property.name) {
				property.name = this.deriveName(property);
			}
			
			// Tasty merge sandwiches, to retain the original reference
			property = defaults(property, this.defaultValues['*']);
			
			if (this.defaultValues[property.type]) {
				property = defaults(property, this.defaultValues[property.type]);
			}
		}
		
		return fields;
	}
	
	/**
	 * Derive a property's name from its path.
	 *
	 * TODO: Improve this
	 *
	 * @param {Field} field
	 * @return {string} The derived name
	 */
	deriveName(field)
	{
		let path = field.path;
		let lastDotIndex = path.lastIndexOf('.');
		
		return util.titleCase(path.substring(lastDotIndex + 1));
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
		let field = this.dictionary[path];
		
		if (!field)
			return null;
		
		let value = get(data, field.path);
		
		value = this.castValue(field, value);
		
		// Casting is all we need if there's no derivation function
		if (!field.derivation)
			return value;
		
		let derivation = field.derivation;
		let derivationFunction = derivation.function || null;
		let derivationArguments = derivation.arguments || [];
		
		let validFunction = this.functions[derivationFunction] &&
			typeof this.functions[derivationFunction] === 'function';
		
		// Awkward case of an invalid function
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
	 * @param {Object} data - The data to update
	 * @param {Field} path - The property the value belongs to
	 * @param {*} value - The value to update within the data according to the property
	 */
	updateValue(data, path, value)
	{
		let dictionary = this.dictionary;
		let field = dictionary[path];
		
		// Do nothing if we have no such field
		if (!field)
			return;
		
		// Update the value
		set(data, field.path, value);
		
		// Derive all values after this value change
		// TODO: Use a derivation argument map to derive only the affected properties? Derive all if arguments aren't specified
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
	 * @param {Field[]} properties
	 * @returns {FieldDictionary}
	 */
	buildDictionaryFrom(properties)
	{
		return buildDictionaryFrom(properties);
	}
	
	/**
	 * @param {FieldDictionary} dictionary
	 * @returns {Field[]}
	 */
	buildTreeFrom(dictionary)
	{
		return buildTreeFrom(dictionary);
	}
	
	/**
	 * @param {Field[]} tree
	 * @returns {FieldDictionary}
	 */
	flattenToDictionary(tree)
	{
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
 * @property {string}      path             - The path that matches this property.
 * @property {string|int}  [parent]         - The path for this property's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}      pathFragment     - The path fragment used to compose the property's final path from its parents', if it's part of a template. Numbers are used if none is given. TODO: Rename to name
 * @property {string}      [type]           - The type of the property. Defaults to `'number'`.
 * @property {string}      [input]          - The preferred input type of the property, if any. `'none'` shows the value without an input, `'hidden'` hides this property.
 * @property {string}      [name]           - The property's name. Defaults to a title-case translation of the path's leaf. TODO: Rename to label
 * @property {string}      [elaboration]    - An elaboration on the property's name. Defaults to `null`.
 * @property {string}      [description]    - The property's description. Defaults to `null`.
 * @property {boolean}     [store=true]     - Whether to store the property. Defaults to `true`.
 * @property {boolean}     [disabled=false] - Whether the property is disabled. Implied if derivation is set.
 * @property {*}           [default]        - The property's default value. Defaults as appropriate to the `type`.
 * @property {Derivation}  [derivation]     - The property's processing definition. If one exists, this property won't have an editable input.
 * @property {string}      [sanitizer]      - The property's sanitization function.
 * @property {string}      [validator]      - The property's validation function. Defaults as appropriate to the `type`.
 * @property {number}      [min=-100]       - The minimum value of the property if the type is `'number'`. Defaults to -100.
 * @property {number}      [max=100]        - The maximum value of the property if the type is `'number'`. Defaults to 100.
 * @property {number}      [step]           - The step value of the property if the type is `'number'`.
 * @property {Field[]}  [children]       - Child properties.
 * @property {Field|Field[]} [template] - Template property for creating more children for `'list'` or `'table'` property types.
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
