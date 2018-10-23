/**
 * A set of fields that define the structure of a Pathfinder Character Sheet.
 *
 * Used for generating character sheets, processing maps and UI.
 *
 * TODO: Worth splitting these out to separate files and composing them here.
 * TODO: Consider defining UI layout somewhere else... maybe.
 *
 * @see {FormProcessor} for the {Field} schema
 * @see {CharacterSheet} for the data schema
 * @type {Field[]}
 */
const fields = [
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
		// virtual!
		path: 'abilities.table',
		type: 'pragma-table'
	},
	{
		path: 'abilities.str',
		parent: 'abilities.table',
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
		parent: 'abilities.table',
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
		parent: 'abilities.table',
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
		parent: 'abilities.table',
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
		parent: 'abilities.table',
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
		parent: 'abilities.table',
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
	},
	{
		path: 'defense.armorClass',
		type: 'group',
		name: 'AC'
	},
	{
		path:       'defense.armorClass.total',
		name:       'Armor Class',
		derivation: {
			function:  'sum',
			arguments: [
				10,
				'defense.armorClass.armorBonus',
				'defense.armorClass.shieldBonus',
				'defense.armorClass.abilityModifier',
				'defense.armorClass.sizeModifier',
				'defense.armorClass.naturalArmor',
				'defense.armorClass.deflectionModifier',
				'defense.armorClass.miscModifier',
				'defense.armorClass.tempModifier'
			]
		}
	},
	{
		path:       'defense.armorClass.touch',
		derivation: {
			function:  'sum',
			arguments: [
				10,
				'defense.armorClass.abilityModifier',
				'defense.armorClass.sizeModifier',
				'defense.armorClass.deflectionModifier',
				'defense.armorClass.miscModifier',
				'defense.armorClass.tempModifier'
			]
		}
	},
	{
		path:       'defense.armorClass.flatFooted',
		name:       'Flat-footed Armor Class',
		derivation: {
			function:  'sum',
			arguments: [
				10,
				'defense.armorClass.armorBonus',
				'defense.armorClass.shieldBonus',
				'defense.armorClass.sizeModifier',
				'defense.armorClass.naturalArmor',
				'defense.armorClass.deflectionModifier',
				'defense.armorClass.miscModifier',
				'defense.armorClass.tempModifier'
			]
		}
	},
	{
		path: 'defense.armorClass.armorBonus',
	},
	{
		path: 'defense.armorClass.shieldBonus'
	},
	{
		path:       'defense.armorClass.abilityModifier',
		derivation: {
			function:  'copy',
			arguments: ['abilities.dex.modifier']
		}
	},
	{
		path:       'defense.armorClass.sizeModifier',
		derivation: {
			function:  'copy',
			arguments: ['size.modifier']
		}
	},
	{
		path: 'defense.armorClass.naturalArmor'
	},
	{
		path: 'defense.armorClass.deflectionModifier'
	},
	{
		path: 'defense.armorClass.miscModifier'
	},
	{
		path: 'defense.armorClass.tempModifier'
	},
	{
		path: 'defense.damageReduction'
	},
	{
		path: 'defense.spellResistance'
	},
	{
		path: 'defense.saves',
		name: 'Saving throws',
		type: 'section'
	},
	{
		path: 'defense.saves.fortitude',
		type: 'group'
	},
	{
		path: 'defense.saves.fortitude.total',
		derivation: {
			function: 'sum',
			arguments: [
				'defense.saves.fortitude.base',
				'defense.saves.fortitude.abilityModifier',
				'defense.saves.fortitude.magicModifier',
				'defense.saves.fortitude.miscModifier',
				'defense.saves.fortitude.tempModifier'
			]
		}
	},
	{
		path: 'defense.saves.fortitude.base'
	},
	{
		path:       'defense.saves.fortitude.abilityModifier',
		derivation: {
			function:  'copy',
			arguments: ['abilities.con.modifier']
		}
	},
	{
		path: 'defense.saves.fortitude.magicModifier'
	},
	{
		path: 'defense.saves.fortitude.miscModifier'
	},
	{
		path: 'defense.saves.fortitude.tempModifier'
	},
	{
		path: 'defense.saves.reflex',
		type: 'group'
	},
	{
		path: 'defense.saves.reflex.total',
		derivation: {
			function: 'sum',
			arguments: [
				'defense.saves.reflex.base',
				'defense.saves.reflex.abilityModifier',
				'defense.saves.reflex.magicModifier',
				'defense.saves.reflex.miscModifier',
				'defense.saves.reflex.tempModifier'
			]
		}
	},
	{
		path: 'defense.saves.reflex.base'
	},
	{
		path:       'defense.saves.reflex.abilityModifier',
		derivation: {
			function:  'copy',
			arguments: ['abilities.dex.modifier']
		}
	},
	{
		path: 'defense.saves.reflex.magicModifier'
	},
	{
		path: 'defense.saves.reflex.miscModifier'
	},
	{
		path: 'defense.saves.reflex.tempModifier'
	},
	{
		path: 'defense.saves.will',
		type: 'group'
	},
	{
		path: 'defense.saves.will.total',
		derivation: {
			function: 'sum',
			arguments: [
				'defense.saves.will.base',
				'defense.saves.will.abilityModifier',
				'defense.saves.will.magicModifier',
				'defense.saves.will.miscModifier',
				'defense.saves.will.tempModifier'
			]
		}
	},
	{
		path: 'defense.saves.will.base'
	},
	{
		path:       'defense.saves.will.abilityModifier',
		derivation: {
			function:  'copy',
			arguments: ['abilities.wis.modifier']
		}
	},
	{
		path: 'defense.saves.will.magicModifier'
	},
	{
		path: 'defense.saves.will.miscModifier'
	},
	{
		path: 'defense.saves.will.tempModifier'
	},
	{
		path: 'defense.combatManeuverDefense',
		type: 'group'
	},
	{
		path: 'defense.combatManeuverDefense.total',
		derivation: {
			function: 'sum',
			arguments: [
				10,
				'defense.combatManeuverDefense.baseAttackBonus',
				'defense.combatManeuverDefense.strModifier',
				'defense.combatManeuverDefense.dexModifier',
				'defense.combatManeuverDefense.sizeModifier',
				'defense.combatManeuverDefense.miscModifier',
				'defense.combatManeuverDefense.tempModifier'
			]
		}
	},
	{
		path: 'defense.combatManeuverDefense.baseAttackBonus',
		derivation: {
			function: 'copy',
			arguments: ['offense.baseAttackBonus']
		}
	},
	{
		path: 'defense.combatManeuverDefense.strModifier',
		derivation: {
			function: 'copy',
			arguments: ['abilities.str.modifier']
		}
	},
	{
		path: 'defense.combatManeuverDefense.dexModifier',
		derivation: {
			function: 'copy',
			arguments: ['abilities.dex.modifier']
		}
	},
	{
		path: 'defense.combatManeuverDefense.sizeModifier',
		derivation: {
			function: 'copy',
			arguments: ['size.modifier']
		}
	},
	{
		path: 'defense.combatManeuverDefense.miscModifier'
	},
	{
		path: 'defense.combatManeuverDefense.tempModifier'
	}
];

export default fields;
