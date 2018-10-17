/**
 * A dictionary containing information about each property in a character sheet.
 *
 * Used for generating character sheets, processing maps and UI.
 *
 * TODO: Worth splitting these out and merging here, then processing, regardless of settling on flat or nested structure.
 *
 * @see CharacterSheet
 * @type {Dictionary}
 */
import abilityModifier from "../model/functions/abilityModifier";

const dictionary = [
	{
		path:        'general.name',
		type:        'string',
		name:        'Name',
		description: "The character's given or chosen name"
	},
	{
		path:        'general.alignment',
		type:        'string',
		name:        'Alignment',
		description: "The character's general and moral attitude"
	},
	{
		path:        'general.age',
		type:        'string',
		name:        'Age',
		description: "The character's age"
	},
	{
		path:        'general.gender',
		type:        'string',
		name:        'Gender',
		description: "The character's gender"
	},
	{
		path:        'general.height',
		type:        'string',
		name:        'Height',
		description: "The character's height"
	},
	{
		path:        'general.weight',
		type:        'string',
		name:        'Weight',
		description: "The character's weight"
	},
	{
		path:        'general.hair',
		type:        'string',
		name:        'Hair',
		description: "The character's eye color"
	},
	{
		path:        'general.eyes',
		type:        'string',
		name:        'Eyes',
		description: "The character's eye color"
	},
	{
		path:        'race',
		type:        'string',
		name:        'Race',
		description: "The character's race"
	},
	{
		// TODO: This will need elaborating into multiple properties later on
		path:        'class',
		type:        'string',
		name:        'Class',
		description: "The character's class"
	},
	{
		path: 'abilities.str.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.str.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.str.score']
		}
	},
	{
		path: 'abilities.dex.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.dex.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.dex.score']
		}
	},
	{
		path: 'abilities.con.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.con.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.con.score']
		}
	},
	{
		path: 'abilities.int.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.int.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.int.score']
		}
	},
	{
		path: 'abilities.wis.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.wis.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.wis.score']
		}
	},
	{
		path: 'abilities.cha.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.cha.modifier',
		derivation: {
			type:      'interpolated',
			value:     abilityModifier,
			arguments: ['abilities.cha.score']
		}
	},
];

export default dictionary;

/**
 * A dictionary containing information about each property in a character sheet.
 *
 * TODO: Nested dictionaries to describe each section, or a separate dictionary?
 * e.g:
 * property {string} name
 * property {string} description
 * property {boolean} [set=false] - whether this is a set of dictionaries
 * property {string} [focus] - path of property to focus the group on (ability score or AC for example, which could group by derivation)
 * property {string|string[]} [subFocus] - paths of properties to sit next to the focus property (ability modifier for example)
 * property {Dictionary|DictionaryItems} items
 *
 * @typedef {Array<DictionaryItem>} Dictionary
 */

/**
 * The description of a character sheet property.
 *
 * @typedef {Object} DictionaryItem
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
 * @property {number}     [min]         - The minimum value of the property if the type is `'number'`.
 * @property {number}     [max]         - The maximum value of the property if the type is `'number'`.
 * @property {number}     [step]        - The step value of the property if the type is `'number'`.
 */

/**
 * The derivation definition of a character sheet property.
 *
 * Describes how to derive the property's final value.
 *
 * @typedef {Object} Derivation
 *
 * @property {string}                type        - The derivation type. 'propagate', 'summate' or 'interpolate'.
 * @property {Function|array|string} value       - The derivation value. Describes how to propagate, summate or interpolate the value.
 * @property {Array<number|string>}  [arguments] - Constant values and property paths to become arguments to the derivation function, if the value is a function. Defaults to the entire character sheet.
 */
