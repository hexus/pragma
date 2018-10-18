/**
 * A set of properties that define the structure of a Pathfinder Character Sheet.
 *
 * Used for generating character sheets, processing maps and UI.
 *
 * TODO: Worth splitting these out to separate files and composing them here.
 * TODO: Consider defining UI layout somewhere else... maybe.
 *
 * @see {PropertyProcessor} for the {Property} schema
 * @see CharacterSheet
 * @type {Property[]}
 */
const properties = [
	{
		path:        'general',
		type:        'group',
		name:        'General',
		description: 'General character information'
	},
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
		// TODO: This will need elaborating into multiple properties later on
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
		path: 'abilities',
		type: 'group',
		name: 'Abilities'
	},
	{
		path: 'abilities.str',
		type: 'set',
		name: 'Strength'
	},
	{
		path: 'abilities.str.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.str.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.str.score']
		}
	},
	{
		path: 'abilities.dex',
		name: 'Dexterity'
	},
	{
		path: 'abilities.dex.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.dex.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.dex.score']
		}
	},
	{
		path: 'abilities.con',
		name: 'Constitution'
	},
	{
		path: 'abilities.con.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.con.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.con.score']
		}
	},
	{
		path: 'abilities.int',
		name: 'Intelligence'
	},
	{
		path: 'abilities.int.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.int.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.int.score']
		}
	},
	{
		path: 'abilities.wis',
		name: 'Wisdom'
	},
	{
		path: 'abilities.wis.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.wis.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.wis.score']
		}
	},
	{
		path: 'abilities.cha',
		name: 'Charisma'
	},
	{
		path: 'abilities.cha.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.cha.modifier',
		derivation: {
			type:      'interpolated',
			value:     'abilityModifier',
			arguments: ['abilities.cha.score']
		}
	},
	{
		path:         'defense',
		type:         'group',
		name:         'Defense',
		description: 'Defense statistics'
	},
	{
		path: 'defense.hitPoints',
		type: 'group',
		name: 'Hit Points'
	},
	{
		path:       'defense.hitPoints.current',
		derivation: {
			type:      'interpolated',
			value:     'min',
			arguments: ['this', 'defense.hitPoints.total']
		}
	},
	{
		path:       'defense.hitPoints.total',
		derivation: {
			type:  'summated',
			value: ['defense.hitPoints.base', 'defense.hitPoints.tempModifier']
		}
	},
	{
		path: 'defense.hitPoints.base',
	},
	{
		path: 'defense.hitPoints.tempModifier'
	},
	{
		path: 'defense.hitPoints.nonLethalDamage'
	}
];

export default properties;
