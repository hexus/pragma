/**
 * A set of properties that define the structure of a Pathfinder Character Sheet.
 *
 * Used for generating character sheets, processing maps and UI.
 *
 * TODO: Worth splitting these out to separate files and composing them here.
 * TODO: Consider defining UI layout somewhere else... maybe.
 *
 * @see {PropertyProcessor} for the {Property} schema
 * @see {CharacterSheet} for the data schema
 * @type {Property[]}
 */
const properties = [
	{
		path:        'general',
		type:        'section',
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
		description: "The character's general and moral attitude",
		default:     'Chaotic Neutral'
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
		type:        'section',
		name:        'Race',
		description: "The character's race"
	},
	{
		path:        'race.name',
		type:        'string',
		description: "The name of the race"
	},
	{
		path:        'classes',
		type:        'section',
		name:        'Classes',
		description: "The character's classes"
	},
	{
		path:     'classes.list',
		type:     'list',
		name:     'Class list',
		template: {
			name:     'Class',
			type:     'group',
			children: [
				{
					pathFragment: 'name',
					type:         'string',
					name:         'Class name'
				},
				{
					pathFragment: 'levels',
					name:         'Levels'
				}
			]
		},
	},
	{
		path: 'classes.list.0',
		type: 'group',
		name: 'Class'
	},
	{
		path: 'classes.list.0.name',
		type: 'string',
		name: 'Class name'
	},
	{
		path: 'classes.list.0.levels',
		name: 'Levels'
	},
	{
		path: 'abilities',
		type: 'section',
		name: 'Abilities'
	},
	{
		path: 'abilities.str',
		type: 'group',
		name: 'Strength'
	},
	{
		path: 'abilities.str.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.str.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.str.score']
		}
	},
	{
		path: 'abilities.dex',
		type: 'group',
		name: 'Dexterity'
	},
	{
		path: 'abilities.dex.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.dex.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.dex.score']
		}
	},
	{
		path: 'abilities.con',
		type: 'group',
		name: 'Constitution'
	},
	{
		path: 'abilities.con.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.con.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.con.score']
		}
	},
	{
		path: 'abilities.int',
		type: 'group',
		name: 'Intelligence'
	},
	{
		path: 'abilities.int.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.int.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.int.score']
		}
	},
	{
		path: 'abilities.wis',
		type: 'group',
		name: 'Wisdom'
	},
	{
		path: 'abilities.wis.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.wis.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.wis.score']
		}
	},
	{
		path: 'abilities.cha',
		type: 'group',
		name: 'Charisma'
	},
	{
		path: 'abilities.cha.score'
		// TODO: Derivations when base score is a thing
	},
	{
		path:       'abilities.cha.modifier',
		derivation: {
			function:  'abilityModifier',
			arguments: ['abilities.cha.score']
		}
	},
	{
		path:        'defense',
		type:        'section',
		name:        'Defense',
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
			function:  'min',
			arguments: ['defense.hitPoints.current', 'defense.hitPoints.total']
		}
	},
	{
		path:       'defense.hitPoints.total',
		derivation: {
			function:  'sum',
			arguments: ['defense.hitPoints.base', 'defense.hitPoints.tempModifier']
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
