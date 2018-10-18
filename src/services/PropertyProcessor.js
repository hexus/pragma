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
	constructor()
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
		this.derivations = {
			'copy': identity,
			'sum': sum,
			'min': min
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
		// TODO: Implement
		
		return properties;
	}
	
	/**
	 * Cast a value based on the property it belongs to.
	 *
	 * @param {Property} property
	 * @param {*} value
	 */
	castValue(property, value)
	{
		// TODO: Implement

		return value;
	}
	
	/**
	 * Derive a property's value from some data.
	 *
	 * @param {Property} property
	 * @param {Object} data
	 */
	deriveValue(property, data)
	{
	
	}
	
	buildDictionaryFrom(properties)
	{
		return buildDictionaryFrom(properties);
	}
	
	buildTreeFrom(dictionary)
	{
		return buildTreeFrom(dictionary);
	}
	
	flatten(tree)
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
 * @typedef {Object} Property
 *
 * @property {string}     path          - The path fragment that matches this property.
 * @property {string}     [type]        - The type of the property. Defaults to `'number'`.
 * @property {string}     [input]       - The preferred input type of the property, if any. `'none'` shows the value without an input, `'hidden'` hides this property.
 * @property {string}     [name]        - The property's name. Defaults to a title-case translation of the path's leaf.
 * @property {string}     [elaboration] - An elaboration on the property's name. Defaults to `null`.
 * @property {string}     [description] - The property's description. Defaults to `null`.
 * @property {boolean}    [store=true]  - Whether to store the property. Defaults to `true`.
 * @property {*}          [default]     - The property's default value. Defaults as appropriate to the type.
 * @property {Derivation} [derivation]  - The property's processing definition. If one exists, this property won't have an editable input.
 * @property {number}     [min=-100]    - The minimum value of the property if the type is `'number'`. Defaults to -100.
 * @property {number}     [max=100]     - The maximum value of the property if the type is `'number'`. Defaults to 100.
 * @property {number}     [step]        - The step value of the property if the type is `'number'`.
 */

/**
 * A derivation definition of a property.
 *
 * Describes how to derive the property's final value.
 *
 * @typedef {Object} Derivation
 *
 * @property {string}                type        - The derivation type. 'propagate', 'summate' or 'interpolate'.
 * @property {array|string}          value       - The derivation value. Describes how to propagate, summate or interpolate the value.
 * @property {Array<number|string>}  [arguments] - Constant values and property paths to become arguments to the derivation function, if the value is a function. Defaults to the entire character sheet.
 */
