//import Class from './domain/Class';

const data = {
	/**
	 * Character classes data set.
	 */
	classes: {
	
	},
	
	/**
	 * Creature sizes data set.
	 */
	sizes: {
		fine: {
			name:            'Fine',
			modifier:        +8,
			specialModifier: -8,
			flyModifier:     +8,
			stealthModifier: +16,
			space:           0.5,
			reach:           0
		},
		diminutive: {
			name:            'Diminutive',
			modifier:        +4,
			specialModifier: -4,
			flyModifier:     +6,
			stealthModifier: +12,
			space:           1,
			reach:           0
		},
		tiny: {
			name:            'Tiny',
			modifier:        +2,
			specialModifier: -2,
			flyModifier:     +4,
			stealthModifier: +8,
			space:           2.5,
			reach:           0
		},
		small: {
			name:            'Small',
			modifier:        +1,
			specialModifier: -1,
			flyModifier:     +2,
			stealthModifier: +4,
			space:           5,
			reach:           5
		},
		medium: {
			name:            'Medium',
			modifier:        +0,
			specialModifier: +0,
			flyModifier:     +0,
			stealthModifier: +0,
			space:           5,
			reach:           5
		},
		large: {
			name:            'Large',
			modifier:        -1,
			specialModifier: +1,
			flyModifier:     -2,
			stealthModifier: -4,
			space:           0.5,
			reach:           0
		},
		huge: {
			name:            'Huge',
			modifier:        -2,
			specialModifier: +2,
			flyModifier:     -4,
			stealthModifier: -8,
			space:           0.5,
			reach:           0
		},
		gargantuan: {
			name:            'Gargantuan',
			modifier:        -4,
			specialModifier: +4,
			flyModifier:     -6,
			stealthModifier: -12,
			space:           0.5,
			reach:           0
		},
		colossal: {
			name:            'Colossal',
			modifier:        -8,
			specialModifier: +8,
			flyModifier:     -8,
			stealthModifier: -16,
			space:           0.5,
			reach:           0
		}
	},
	
	/**
	 * Character skills data set.
	 */
	skills: {
	
	},
	
	/**
	 * Spells data set.
	 */
	spells: {
	
	},
	
	/**
	 * Property propagation map.
	 *
	 * Maps properties that propagate to other properties.
	 *
	 * Keys are target properties, and values are one or more source properties.
	 *
	 * The keys of this map happen to denote properties that, as a result of propagation, should have disabled inputs.
	 */
	propagationMap: {
		'defense.armorClass.abilityModifier':          ['abilities.dex.modifier', 'abilities.dex.tempModifier'],
		'defense.combatManeuverDefense.strModifier':   ['abilities.str.modifier', 'abilities.str.tempModifier'],
		'defense.combatManeuverDefense.dexModifier':   ['abilities.dex.modifier', 'abilities.dex.tempModifier'],
		'defense.saves.fortitude.abilityModifier':     ['abilities.con.modifier', 'abilities.con.tempModifier'],
		'defense.saves.reflex.abilityModifier':        ['abilities.dex.modifier', 'abilities.dex.tempModifier'],
		'defense.saves.will.abilityModifier':          ['abilities.wis.modifier', 'abilities.wis.tempModifier', ],
		'offense.combatManeuverBonus.baseAttackBonus': 'offense.baseAttackBonus',
		'offense.combatManeuverBonus.abilityModifier': ['abilities.str.modifier', 'abilities.str.tempModifier', ],
		'offense.initiative.abilityModifier':          ['abilities.dex.modifier', 'abilities.dex.tempModifier'],
	}
};

export default data;

export const classes = data.classes;
export const sizes = data.sizes;
export const skills = data.skills;
export const spells = data.spells;
export const propagationMap = data.propagationMap;
export const abilityMaps = data.abilityMaps;
