import merge from 'lodash/merge';
import defaults from 'lodash/defaultsDeep';
import get from 'lodash/get';
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
			'number': x => parseFloat(x) || 0
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
	 * @param {*} value - The current value of the property
	 * @param {Object} data - The data to derive derivation arguments from
	 * @return {*} The derived value
	 */
	deriveValue(property, value, data)
	{
		value = this.castValue(property, value);
		
		// Casting is all we need if there's no derivation function
		if (!property.derivation)
			return value;
		
		let derivation = property.derivation;
		let derivationArguments = derivation.arguments || [];
		
		let validFunction = !this.derivations[derivation.function] ||
			typeof this.derivations[derivation.function] !== 'function';
		
		// Awkward case of an invalid function
		if (!validFunction) {
			return defaultTo(value, defaultTo(property.default, null));
		}
		
		// TODO: Extract argument processing, derive arguments from '{this}', etc.
		let a, args = [];
		
		for (a = 0; a < derivationArguments.length; a++) {
			args[a] = get(data, derivationArguments[a]);
		}
		
		value = this.derivations[derivation.function](...args);
		
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
		// TODO: Implement based on property type, input type, etc.
		// TODO: Maybe map castings to arrays that come from multi-selects
		
		return value;
	}
	
	buildDictionaryFrom(properties)
	{
		return buildDictionaryFrom(properties);
	}
	
	buildTreeFrom(dictionary)
	{
		return buildTreeFrom(dictionary);
	}
	
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
 *
 * @typedef {Object} Property
 *
 * @property {string}      path             - The path fragment that matches this property.
 * @property {string|int}  parent           - The path fragment or ID that matches this property's parent, if any.
 * @property {string}      [type]           - The type of the property. Defaults to `'number'`.
 * @property {string}      [input]          - The preferred input type of the property, if any. `'none'` shows the value without an input, `'hidden'` hides this property.
 * @property {string}      [name]           - The property's name. Defaults to a title-case translation of the path's leaf.
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
 * @property {Property}    [template]       - Template property for creating more children
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
