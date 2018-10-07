//import Class from './domain/Class';

const data = {
	/**
	 * Character classes database.
	 */
	classes: {
	
	},
	
	/**
	 * Character skills database.
	 */
	skills: {
	
	},
	
	/**
	 * Spells database.
	 */
	spells: {
	
	},
	
	/**
	 * Maps properties that propagate to other properties.
	 *
	 * The keys of this map denote properties that, as a result of propagation, should have disabled inputs.
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
export const skills = data.skills;
export const spells = data.spells;
export const propagationMap = data.propagationMap;
export const abilityMaps = data.abilityMaps;
