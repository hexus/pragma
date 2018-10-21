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
export default class PropertyProcessor
{
	/**
	 * Create a new property processor.
	 *
	 * @param {Object.<string, Function>} derivations - Functions to make available for property value derivations.
	 */
	constructor(derivations)
	{
		/**
		 * Default values for each property type.
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
		this.derivations = merge({
			'copy': identity,
			'sum': sum,
			'min': min,
			'interpolate': identity // TODO: Actual interpolation/templating
		}, derivations);
		
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
		
	}
	
	/**
	 * Process raw properties.
	 *
	 * Fills in default values, determines default names.
	 *
	 * @param {Property[]} properties
	 */
	process(properties)
	{
		if (!properties || !properties.length) {
			return properties;
		}
		
		let i, property;
		
		for (i = 0; i < properties.length; i++) {
			property = properties[i];
			
			// Derive a name TODO: Improve, obv
			if (!property.name) {
				property.name = this.deriveName(property);
			}
			
			// Tasty merge sandwiches, to retain the original reference
			property = defaults(property, this.defaultValues['*']);
			
			if (this.defaultValues[property.type]) {
				property = defaults(property, this.defaultValues[property.type]);
			}
		}
		
		return properties;
	}
	
	/**
	 * Derive a property's name from its path.
	 *
	 * @param {Property} property
	 * @return {string} The derived name
	 */
	deriveName(property)
	{
		let path = property.path;
		let lastDotIndex = path.lastIndexOf('.');
		
		return util.titleCase(path.substring(lastDotIndex + 1));
	}
	
	/**
	 * Derive a property's value from some data.
	 *
	 * @param {Property} property - The property to derive a value for
	 * @param {Object} data - The data to derive derivation arguments from
	 * @return {*} The derived value
	 */
	deriveValue(property, data)
	{
		if (!property)
			return null;
		
		let value = get(data, property.path);
		
		value = this.castValue(property, value);
		
		// Casting is all we need if there's no derivation function
		if (!property.derivation)
			return value;
		
		let derivation = property.derivation;
		let derivationFunction = derivation.function || null;
		let derivationArguments = derivation.arguments || [];
		
		let validFunction = this.derivations[derivationFunction] &&
			typeof this.derivations[derivationFunction] === 'function';
		
		// Awkward case of an invalid function
		if (!validFunction) {
			return defaultTo(value, defaultTo(property.default, null));
		}
		
		// TODO: Extract argument processing, derive arguments from '{this}', etc.
		let a, argument, args = [];
		
		for (a = 0; a < derivationArguments.length; a++) {
			argument = derivationArguments[a];
			
			// TODO: DERIVE or UPDATE values here, getting is not enough, we need to recurse
			// TODO: '{argument.path}' strings instead of any string, to allow constant string values
			if (typeof argument === 'string')
				args[a] = get(data, derivationArguments[a]);
			else
				args[a] = argument;
		}
		
		value = this.derivations[derivationFunction](...args);
		
		return defaultTo(value, defaultTo(property.default, null));
	}
	
	/**
	 * Cast a value based on the property it belongs to.
	 *
	 * @param {Property} property
	 * @param {*} value
	 */
	castValue(property, value)
	{
		if (!property)
			return value;
		
		if (!this.casts[property.type])
			return value;
		
		// TODO: Maybe, for array values that would come from multi-selects, map castings across each array element
		
		return this.casts[property.type](property, value);
	}
	
	/**
	 * Update a property with the given value.
	 *
	 * @param {PropertyDictionary} dictionary - The property dictionary
	 * @param {Object} data - The data to update
	 * @param {Property} property - The property the value belongs to
	 * @param {*} value - The value to update within the data according to the property
	 */
	updateValue(dictionary, data, property, value)
	{
		// Update this value
		set(data, property.path, value);
		
		// Derive all values after this value change
		// TODO: Use a derivation argument map to derive only the affected properties? Derive all if arguments aren't specified
		for (let p in dictionary) {
			if (!dictionary[p])
				continue;
			
			property = dictionary[p];
			
			set(
				data,
				property.path,
				value = this.deriveValue(property, data)
			);
		}
		
		// Get the updated value
		return get(data, property.path);
	}
	
	/**
	 * @param {Property[]}properties
	 * @returns {PropertyDictionary}
	 */
	buildDictionaryFrom(properties)
	{
		return buildDictionaryFrom(properties);
	}
	
	/**
	 * @param {PropertyDictionary} dictionary
	 * @returns {Property[]}
	 */
	buildTreeFrom(dictionary)
	{
		return buildTreeFrom(dictionary);
	}
	
	/**
	 * @param {Property[]} tree
	 * @returns {PropertyDictionary}
	 */
	flattenToDictionary(tree)
	{
		// TODO: Implement
	}
}

/**
 * A dictionary of properties.
 *
 * @typedef {Object.<string, Property>} PropertyDictionary
 */

/**
 * A property description.
 *
 * TODO: Think about multiple selection. A lot.
 * TODO: Rename to field.
 *
 * @typedef {Object} Property
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
 * @property {Property[]}  [children]       - Child properties.
 * @property {Property|Property[]} [template] - Template property for creating more children for `'list'` or `'table'` property types.
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
