/**
 * A set of fields that define the structure of a Pathfinder Character Sheet.
 *
 * Used for generating character sheets and UI.
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
		// Sections placeholder parent
		path: 'sections',
		type: 'hidden',
		omit: true
	},
	{
		// Templates placeholder parent
		path: 'templates',
		type: 'hidden',
		omit: true
	},
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
		path:    'sections.classes',
		parent:  '',
		type:    'section',
		name:    'Classes',
		virtual: true
	},
	{
		path:        'classes',
		type:        'section',
		name:        'Classes',
		description: "The character's classes"
	},
	{
		path: 'templates.class',
		name: 'Class',
		type: 'group',
		options: {
			hideLabel: true
		}
	},
	{
		path: 'templates.class.name',
		type: 'string',
		name: 'Class name'
	},
	{
		path: 'templates.class.levels',
		type: 'number',
		name: 'Levels'
	},
	{
		path:     'classes',
		parent:   'sections.classes',
		type:     'list',
		options:  {
			editable: true // TODO: Rename to mutable.. or something more appropriate
		},
		template: 'templates.class',
	},
	{
		path:    'sections.abilities',
		parent:  '',
		type:    'section',
		name:    'Abilities',
		virtual: true
	},
	{
		path:    'abilities',
		parent:  'sections.abilities',
		type:    'pragma-table',
		options: {
			showLabel: true,
			headings:  [
				'Ability',
				'Score',
				'Modifier',
				'Base',
				'Racial',
				'Misc',
				'Temp'
			]
		}
	},
	{
		path: 'abilities.str',
		type: 'group',
		name: 'Strength'
	},
	{
		path: 'abilities.str.score',
		expression:
			'$parent.base +' +
			'$parent.racialBonus +' +
			'$parent.miscBonus +' +
			'$parent.tempBonus'
	},
	{
		path:       'abilities.str.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path: 'abilities.str.base'
	},
	{
		path: 'abilities.str.racialBonus'
	},
	{
		path: 'abilities.str.miscBonus'
	},
	{
		path: 'abilities.str.tempBonus'
	},
	{
		path: 'abilities.dex',
		type: 'group',
		name: 'Dexterity'
	},
	{
		path: 'abilities.dex.score',
		expression:
			'$parent.base +' +
			'$parent.racialBonus +' +
			'$parent.miscBonus +' +
			'$parent.tempBonus'
	},
	{
		path:       'abilities.dex.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path: 'abilities.dex.base'
	},
	{
		path: 'abilities.dex.racialBonus'
	},
	{
		path: 'abilities.dex.miscBonus'
	},
	{
		path: 'abilities.dex.tempBonus'
	},
	{
		path: 'abilities.con',
		type: 'group',
		name: 'Constitution'
	},
	{
		path: 'abilities.con.score'
	},
	{
		path:       'abilities.con.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path: 'abilities.int',
		type: 'group',
		name: 'Intelligence'
	},
	{
		path: 'abilities.int.score'
	},
	{
		path:       'abilities.int.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path: 'abilities.wis',
		type: 'group',
		name: 'Wisdom'
	},
	{
		path: 'abilities.wis.score'
	},
	{
		path:       'abilities.wis.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path: 'abilities.cha',
		type: 'group',
		name: 'Charisma'
	},
	{
		path: 'abilities.cha.score'
	},
	{
		path:       'abilities.cha.modifier',
		expression: 'abilityModifier($parent.score)'
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
		name: 'Hit points'
	},
	{
		path:       'defense.hitPoints.current',
		expression: 'min($self, $parent.total)',
		disabled: false
	},
	{
		path:       'defense.hitPoints.total',
		expression: '$parent.base + $parent.tempModifier'
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
		expression: '10 + $parent.armorBonus + $parent.shieldBonus + $parent.abilityModifier + ' +
						'$parent.sizeModifier + $parent.naturalArmor + $parent.deflectionModifier + ' +
						'$parent.miscModifier + $parent.tempModifier'
	},
	{
		path:       'defense.armorClass.touch',
		expression: '$parent.total - $parent.armorBonus - $parent.shieldBonus - $parent.naturalArmor'
	},
	{
		path:       'defense.armorClass.flatFooted',
		name:       'Flat-footed Armor Class',
		expression: '$parent.total - $parent.abilityModifier'
	},
	{
		path: 'defense.armorClass.armorBonus',
	},
	{
		path: 'defense.armorClass.shieldBonus'
	},
	{
		path:       'defense.armorClass.abilityModifier',
		expression: 'abilities.dex.modifier'
	},
	{
		path:       'defense.armorClass.sizeModifier',
		expression: 'size.modifier'
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
		path:    'sections.saves',
		parent:  'defense',
		name:    'Saving throws',
		type:    'section',
		virtual: true
	},
	{
		path:    'defense.saves',
		parent:  'sections.saves',
		type:    'pragma-table',
		options: {
			showLabel: true,
			headings:     [
				'Save',
				'Total',
				'Base',
				'Ability',
				'Magic',
				'Misc',
				'Temp'
			]
		}
	},
	{
		path: 'defense.saves.fortitude',
		type: 'group'
	},
	{
		path:       'defense.saves.fortitude.total',
		expression: '$parent.base + $parent.abilityModifier + ' +
						'$parent.magicModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path: 'defense.saves.fortitude.base'
	},
	{
		path:       'defense.saves.fortitude.abilityModifier',
		expression: 'abilities.con.modifier'
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
		path:       'defense.saves.reflex.total',
		expression: '$parent.base + $parent.abilityModifier + ' +
						'$parent.magicModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path: 'defense.saves.reflex.base'
	},
	{
		path:       'defense.saves.reflex.abilityModifier',
		expression: 'abilities.dex.modifier'
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
		path:       'defense.saves.will.total',
		expression: '$parent.base + $parent.abilityModifier + ' +
						'$parent.magicModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path: 'defense.saves.will.base'
	},
	{
		path:       'defense.saves.will.abilityModifier',
		expression: 'abilities.wis.modifier'
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
		path:       'defense.combatManeuverDefense.total',
		expression: '10 + $parent.baseAttackBonus + $parent.strModifier + ' +
						'$parent.dexModifier + $parent.sizeModifier + ' +
						'$parent.miscModifier + $parent.tempModifier'
	},
	{
		path:       'defense.combatManeuverDefense.baseAttackBonus',
		expression: 'offense.baseAttackBonus'
	},
	{
		path:       'defense.combatManeuverDefense.strModifier',
		expression: 'abilities.str.modifier'
	},
	{
		path:       'defense.combatManeuverDefense.dexModifier',
		expression: 'abilities.dex.modifier'
	},
	{
		path:       'defense.combatManeuverDefense.sizeModifier',
		expression: 'size.modifier'
	},
	{
		path: 'defense.combatManeuverDefense.miscModifier'
	},
	{
		path: 'defense.combatManeuverDefense.tempModifier'
	},
	{
		path: 'offense',
		type: 'section',
		description: 'Offense statistics'
	},
	{
		path: 'offense.initiative',
		type: 'group'
	},
	{
		path:       'offense.initiative.total',
		expression: '$parent.abilityModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path:       'offense.initiative.abilityModifier',
		expression: 'abilities.dex.modifier'
	},
	{
		path: 'offense.initiative.miscModifier'
	},
	{
		path: 'offense.initiative.tempModifier'
	},
	{
		path: 'offense.baseAttackBonus'
	},
	{
		path: 'offense.speed',
		type: 'group'
	},
	{
		path: 'offense.speed.land',
		type: 'string'
	},
	{
		path: 'offense.speed.withArmor',
		type: 'string'
	},
	{
		path: 'offense.speed.fly',
		type: 'string'
	},
	{
		path: 'offense.speed.swim',
		type: 'string'
	},
	{
		path: 'offense.speed.climb',
		type: 'string'
	},
	{
		path: 'offense.speed.burrow',
		type: 'string'
	},
	{
		path: 'offense.combatManeuverBonus',
		type: 'group'
	},
	{
		path:       'offense.combatManeuverBonus.total',
		expression: '10 + $parent.baseAttackBonus + $parent.abilityModifier + ' +
						'$parent.sizeModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path:       'offense.combatManeuverBonus.baseAttackBonus',
		expression: 'offense.baseAttackBonus'
	},
	{
		path:       'offense.combatManeuverBonus.abilityModifier',
		expression: 'abilities.str.modifier'
	},
	{
		path:       'offense.combatManeuverBonus.sizeModifier',
		expression: 'size.modifier'
	},
	{
		path: 'offense.combatManeuverBonus.miscModifier'
	},
	{
		path: 'offense.combatManeuverBonus.tempModifier'
	},
	{
		path: 'templates.skill',
		type: 'group'
	},
	{
		path: 'templates.skill.trained',
		disabled: true
	},
	{
		path:       'templates.skill.total',
		expression: '$parent.abilityModifier + $parent.classBonus + ' +
						'$parent.ranks + $parent.racialBonus + ' +
						'$parent.traitBonus + $parent.miscModifier + ' +
						'$parent.tempModifier',
	},
	{
		path:     'templates.skill.ability',
		// TODO: "Select" input
		type:     'string',
		options:  {
			options: '`abilities`'
		},
		disabled: true
	},
	{
		path:       'templates.skill.abilityModifier',
		expression: 'abilities.dex.modifier'
	},
	{
		path: 'templates.skill.trained',
		type: 'boolean',
		disabled: true
	},
	{
		path: 'templates.skill.classSkill',
		type: 'boolean'
	},
	{
		path:       'templates.skill.classBonus',
		expression: '$parent.classSkill and (not $parent.trained or $parent.ranks > 0) ? 3 : 0'
	},
	{
		path: 'templates.skill.ranks',
		min: 0
	},
	{
		path: 'templates.skill.racialBonus'
	},
	{
		path: 'templates.skill.traitBonus'
	},
	{
		path: 'templates.skill.miscModifier'
	},
	{
		path: 'templates.skill.tempModifier'
	},
	{
		path: 'skills',
		type: 'section'
	},
	{
		path:     'skills.list',
		type:     'pragma-table',
		options:  {
			showLabel: true,
			headings:     [
				'Skill',
				'Trained',
				'Total',
				'Ability',
				'Modifier',
				'Class', // Class skill
				'',      // Class bonus
				'Ranks',
				'Racial',
				'Trait',
				'Misc',
				'Temp'
			]
		},
		template: 'templates.skill',
		default:  {
			acrobatics:     { ability: 'dex' },
			appraise:       { ability: 'int' },
			bluff:          { ability: 'cha' },
			climb:          { ability: 'str' },
			craft:          { ability: 'int', variant: true }, // TODO: Variant skills
			diplomacy:      { ability: 'cha' },
			disableDevice:  { ability: 'dex', trained: true },
			disguise:       { ability: 'cha' },
			escapeArtist:   { ability: 'dex' },
			fly:            { ability: 'dex' },
			handleAnimal:   { ability: 'cha', trained: true },
			heal:           { ability: 'wis' },
			intimidate:     { ability: 'cha' },
			knowledge:      { ability: 'int', trained: true },  // TODO: Fixed variant skills
			linguistics:    { ability: 'int', trained: true },
			perception:     { ability: 'wis' },
			perform:        { ability: 'cha', variant: true },
			profession:     { ability: 'wis', trained: true, variant: true },
			ride:           { ability: 'dex' },
			senseMotive:    { ability: 'wis' },
			sleightOfHand:  { ability: 'dex' },
			spellcraft:     { ability: 'int', trained: true },
			stealth:        { ability: 'dex' },
			survival:       { ability: 'wis' },
			swim:           { ability: 'str' },
			useMagicDevice: { ability: 'cha', trained: true},
			test: {}
		}
	},
	{
		// TODO: Implement inheritance
		//       Implement fixed list items
		path:    'skills.list.test',
		name:    'Test skill',
		type:    'group',
		extends: 'templates.skill'
	},
	{
		path:    'skills.list.test2',
		name:    'Test skill 2',
		type:    'group',
		extends: 'templates.skill'
	}
];

export default fields;
