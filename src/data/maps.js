const maps = {
	/**
	 * Property propagation map.
	 *
	 * Denotes properties that are copied from other properties.
	 *
	 * Keys are target properties and values are one or more source properties.
	 *
	 * The keys of this map happen to denote properties that, as a result of propagation, should have disabled inputs.
	 */
	propagation: {
		'defense.armorClass.abilityModifier':          'abilities.dex.modifier',
		'defense.combatManeuverDefense.strModifier':   'abilities.str.modifier',
		'defense.combatManeuverDefense.dexModifier':   'abilities.dex.modifier',
		'defense.saves.fortitude.abilityModifier':     'abilities.con.modifier',
		'defense.saves.reflex.abilityModifier':        'abilities.dex.modifier',
		'defense.saves.will.abilityModifier':          'abilities.wis.modifier',
		'offense.combatManeuverBonus.baseAttackBonus': 'offense.baseAttackBonus',
		'offense.combatManeuverBonus.abilityModifier': 'abilities.str.modifier',
		'offense.initiative.abilityModifier':          'abilities.dex.modifier',
	},
	
	/**
	 * Property summation map.
	 *
	 * Denotes properties that are summed from other properties.
	 *
	 * Keys are target properties and values are one or more source properties.
	 *
	 * The keys of this map happen to denote properties that, as a result of summation, should have disabled inputs.
	 */
	summation: {
		'defense.armorClass.touch':      [
			'defense.armorClass.abilityModifier',
			'defense.armorClass.sizeModifier',
			'defense.armorClass.naturalArmor',
			'defense.armorClass.deflectionModifier',
			'defense.armorClass.miscModifier',
			'defense.armorClass.tempModifier'
		],
		'defense.armorClass.flatFooted': [
			'defense.armorClass.armorBonus',
			'defense.armorClass.shieldBonus',
			'defense.armorClass.sizeModifier',
			'defense.armorClass.naturalArmor',
			'defense.armorClass.deflectionModifier',
			'defense.armorClass.miscModifier',
			'defense.armorClass.tempModifier'
		],
		'defense.armorClass.total':      [
			'defense.armorClass.armorBonus',
			'defense.armorClass.shieldBonus',
			'defense.armorClass.abilityModifier',
			'defense.armorClass.sizeModifier',
			'defense.armorClass.naturalArmor',
			'defense.armorClass.deflectionModifier',
			'defense.armorClass.miscModifier',
			'defense.armorClass.tempModifier'
		]
	},
	
	/**
	 * Property summation map.
	 *
	 * Denotes properties that are interpolated from other properties.
	 *
	 * Keys are target properties and values are one or more source properties.
	 *
	 * Keys are target properties and values are interpolation strings (templates) or functions.
	 *
	 * The keys of this map happen to denote properties that, as a result of summation, should have disabled inputs.
	 */
	interpolation: {}
};

export default maps;

export const propagationMap = maps.propagation;
export const summationMap = maps.summation;
export const interpolationMap = maps.interpolation;
