/**
 * A set of fields that describe a Pathfinder Character Sheet.
 *
 * TODO: Worth splitting these out to separate files and composing them here.
 * TODO: Consider defining UI layout somewhere else... maybe.
 *
 * @see {FormProcessor} for the {Field} schema
 * @see {CharacterSheet} for the data schema
 * @type {Field[]}
 */
const fields = [
	// Placeholder fields
	{
		// Sections placeholder parent
		path: 'sections',
		type: 'virtual',
		omit: true
	},
	{
		// Templates placeholder parent
		path: 'templates',
		type: 'virtual',
		omit: true
	},
	
	// Profile
	{
		path:        'profile',
		type:        'section',
		name:        'Profile',
		description: 'Character profile'
	},
	{
		path:        'profile.name',
		type:        'string',
		name:        'Name',
		description: "The character's given or chosen name"
	},
	{
		path:        'profile.alignment',
		type:        'selection',
		name:        'Alignment',
		description: "The character's general and moral attitude",
		options:     {
			options: {
				'lawfulGood':     'Lawful Good',
				'neutralGood':    'Neutral Good',
				'chaoticGood':    'Chaotic Good',
				'lawfulNeutral':  'Lawful Neutral',
				'trueNeutral':    'True Neutral',
				'chaoticNeutral': 'Chaotic Neutral',
				'lawfulEvil':     'Lawful Evil',
				'neutralEvil':    'Neutral Evil',
				'chaoticEvil':    'Chaotic Evil'
			}
		}
	},
	{
		path:        'profile.age',
		type:        'string',
		name:        'Age',
		description: "The character's age"
	},
	{
		path:        'profile.gender',
		type:        'string',
		name:        'Gender',
		description: "The character's gender"
	},
	{
		path:        'profile.height',
		type:        'string',
		name:        'Height',
		description: "The character's height"
	},
	{
		path:        'profile.weight',
		type:        'string',
		name:        'Weight',
		description: "The character's weight"
	},
	{
		path:        'profile.hair',
		type:        'string',
		name:        'Hair',
		description: "The character's eye color"
	},
	{
		path:        'profile.eyes',
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
	
	// Classes
	{
		path: 'templates.class.name',
		type: 'string',
		name: 'Class name'
	},
	{
		path:    'templates.class',
		name:    'Class',
		type:    'group',
		options: {
			hideLabel: true
		}
	},
	{
		path:    'templates.class.levels',
		type:    'number',
		name:    'Levels',
		options: {
			min: 1
		},
		default: 1
	},
	{
		path:        'classes',
		type:        'section',
		name:        'Classes',
		description: "The character's classes"
	},
	{
		path:       'classes.level',
		expression: 'sumBy($parent.list, "levels")'
	},
	{
		path:     'classes.list',
		type:     'list',
		options:  {
			editable: true // TODO: Rename to mutable.. or something else more appropriate
		},
		template: 'templates.class',
		fixed:    {
			0: true // Always keep the first class
		}
	},
	
	// Abilities
	{
		path: 'templates.ability',
		type: 'group',
		name: 'Ability'
	},
	{
		path: 'templates.ability.score',
		expression:
			  '$parent.base +' +
				  '$parent.racialBonus +' +
				  '$parent.miscBonus +' +
				  '$parent.tempBonus'
	},
	{
		path:       'templates.ability.modifier',
		expression: 'abilityModifier($parent.score)'
	},
	{
		path:    'templates.ability.base',
		default: 10
	},
	{
		path: 'templates.ability.racialBonus'
	},
	{
		path: 'templates.ability.miscBonus'
	},
	{
		path: 'templates.ability.tempBonus'
	},
	{
		path:    'sections.abilities',
		parent:  '',
		type:    'section',
		name:    'Abilities',
		virtual: true
	},
	{
		path:     'abilities',
		parent:   'sections.abilities',
		type:     'table',
		template: 'templates.ability',
		fixed:    ['str', 'dex', 'con', 'int', 'wis', 'cha'],
		options:  {
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
		path: 'abilities.dex',
		type: 'group',
		name: 'Dexterity'
	},
	{
		path: 'abilities.con',
		type: 'group',
		name: 'Constitution'
	},
	{
		path: 'abilities.int',
		type: 'group',
		name: 'Intelligence'
	},
	{
		path: 'abilities.wis',
		type: 'group',
		name: 'Wisdom'
	},
	{
		path: 'abilities.cha',
		type: 'group',
		name: 'Charisma'
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
		expression: 'min($value, $parent.total)',
		disabled:   false
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
		path: 'templates.save',
		type: 'group',
		//name: null
	},
	{
		path:       'templates.save.total',
		expression: '$parent.base + $parent.abilityModifier + ' +
						'$parent.magicModifier + $parent.miscModifier + ' +
						'$parent.tempModifier'
	},
	{
		path: 'templates.save.base'
	},
	{
		path:       'templates.save.abilityModifier',
		expression: 'abilities.con.modifier'
	},
	{
		path: 'templates.save.magicModifier'
	},
	{
		path: 'templates.save.miscModifier'
	},
	{
		path: 'templates.save.tempModifier'
	},
	{
		path:    'sections.saves',
		parent:  'defense',
		name:    'Saving throws',
		type:    'section',
		virtual: true
	},
	{
		path:     'defense.saves',
		parent:   'sections.saves',
		type:     'table',
		template: 'templates.save',
		fixed:    ['fortitude', 'reflex', 'will'], // TODO: Expressions don't work without this
		options:  {
			showLabel: true,
			headings:  [
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
		path: 'defense.saves.fortitude'
	},
	{
		path:       'defense.saves.fortitude.abilityModifier',
		expression: 'abilities.con.modifier'
	},
	{
		path: 'defense.saves.reflex'
	},
	{
		path:       'defense.saves.reflex.abilityModifier',
		expression: 'abilities.dex.modifier'
	},
	{
		path: 'defense.saves.will'
	},
	{
		path:       'defense.saves.will.abilityModifier',
		expression: 'abilities.wis.modifier'
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
		path:        'offense',
		type:        'section',
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
		name: null,
		type: 'group'
	},
	{
		path:     'templates.skill.trained',
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
		type:     'selection',
		options:  {
			options: {
				'str': 'Strength',
				'dex': 'Dexterity',
				'con': 'Constitution',
				'int': 'Intelligence',
				'wis': 'Wisdom',
				'cha': 'Charisma'
			}
		},
		default:  'str',
		disabled: true
	},
	{
		path:       'templates.skill.abilityModifier',
		expression: 'value(concat("abilities.", $parent.ability, ".modifier"))'
	},
	{
		path:     'templates.skill.trained',
		type:     'boolean',
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
		path:    'templates.skill.ranks',
		options: {
			min: 0
		}
	},
	{
		path: 'templates.skill.racialBonus'
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
		type:     'list',
		input:    'pragma-table',
		options:  {
			showLabel: true,
			headings:  [
				'Skill',
				'Trained',
				'Total',
				'Ability',
				'Modifier',
				'Class', // Class skill
				'',      // Class bonus
				'Ranks',
				'Racial',
				'Misc',
				'Temp'
			]
		},
		template: 'templates.skill',
		merge:    true,
		fixed:    [
			'acrobatics', 'appraise', 'bluff', 'climb', 'craft', 'diplomacy',
			'disableDevice', 'disguise', 'escapeArtist', 'fly', 'handleAnimal',
			'heal', 'intimidate', 'knowledgeArcana', 'knowledgeDungeoneering',
			'knowledgeEngineering', 'knowledgeGeography', 'knowledgeHistory',
			'knowledgeLocal', 'knowledgeNature', 'knowledgeNobility',
			'knowledgePlanes', 'knowledgeReligion', 'linguistics', 'perception',
			'perform', 'profession', 'ride', 'senseMotive', 'sleightOfHand',
			'spellcraft', 'stealth', 'survival', 'swim', 'useMagicDevice',
			'test', 'test2'
		],
		default:  {
			acrobatics:             { ability: 'dex' },
			appraise:               { ability: 'int' },
			bluff:                  { ability: 'cha' },
			climb:                  { ability: 'str' },
			craft:                  { ability: 'int', variant: true },
			diplomacy:              { ability: 'cha' },
			disableDevice:          { ability: 'dex', trained: true },
			disguise:               { ability: 'cha' },
			escapeArtist:           { ability: 'dex' },
			fly:                    { ability: 'dex' },
			handleAnimal:           { ability: 'cha', trained: true },
			heal:                   { ability: 'wis' },
			intimidate:             { ability: 'cha' },
			knowledgeArcana:        { ability: 'int', trained: true },
			knowledgeDungeoneering: { ability: 'int', trained: true },
			knowledgeEngineering:   { ability: 'int', trained: true },
			knowledgeGeography:     { ability: 'int', trained: true },
			knowledgeHistory:       { ability: 'int', trained: true },
			knowledgeLocal:         { ability: 'int', trained: true },
			knowledgeNature:        { ability: 'int', trained: true },
			knowledgeNobility:      { ability: 'int', trained: true },
			knowledgePlanes:        { ability: 'int', trained: true },
			knowledgeReligion:      { ability: 'int', trained: true },
			linguistics:            { ability: 'int', trained: true },
			perception:             { ability: 'wis' },
			perform:                { ability: 'cha', variant: true },
			profession:             { ability: 'wis', trained: true, variant: true },
			ride:                   { ability: 'dex' },
			senseMotive:            { ability: 'wis' },
			sleightOfHand:          { ability: 'dex' },
			spellcraft:             { ability: 'int', trained: true },
			stealth:                { ability: 'dex' },
			survival:               { ability: 'wis' },
			swim:                   { ability: 'str' },
			useMagicDevice:         { ability: 'cha', trained: true }
		}
	},
	{
		path:    'skills.list.test',
		name:    'Test skill',
		default: {
			ability: 'dex'
		}
	},
	{
		path:    'skills.list.test2',
		name:    'Test skill 2',
		default: {
			ability: 'cha'
		}
	},
	{
		path: 'spells',
		type: 'section'
	},
	{
		// TODO: Collection type used for lists *and* selects/pickers?
		//       Generic loading for child data and/or options?
		path:    'spells.search',
		type:    'selection',
		input:   'picker',
		//virtual: true
		options: {
			target:      'spells.list',            // Add selections to spell list
			source:      '/src/data/spells.csv',   // Source URL for data
			static:      true,                     // Load the data source once
			type:        'csv',                    // TODO: Support different source data types
			key:         'id',                     // Item value key
			label:       'name',                   // Item label key
			placeholder: 'Search for a spell' // Placeholder text
		}
	},
	{
		path: 'templates.spell',
		type: 'group'
	},
	{
		path: 'templates.spell.name',
		type: 'string'
	},
	{
		path: 'templates.spell.short_description',
		type: 'string'
	},
	{
		path:     'spells.list',
		type:     'list',
		template: 'templates.spell'
	}
];

export default fields;
