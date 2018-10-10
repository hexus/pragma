/**
 * A character's combat maneuver defense score.
 */
export default class CombatManeuverDefense
{
	/**
	 * Create a new combat maneuver defense score.
	 *
	 * TODO: BAB object with a score attached. References for the win.
	 *
	 * @param {int}     baseAttackBonus - Base attack bonus.
	 * @param {Ability} str             - Strength ability.
	 * @param {Ability} dex             - Dexterity ability.
	 * @param {Size}    size            - Character size.
	 * @param {int}     [miscModifier]  - Miscellaneous CMD modifier.
	 * @param {int}     [tempModifier]  - Temporary CMD modifier.
	 */
	constructor(baseAttackBonus, str, dex, size, miscModifier, tempModifier)
	{
		this.baseAttackBonus = baseAttackBonus;
		this.str = str;
		this.dex = dex;
		this.size = size;
		this.miscModifier = miscModifier;
		this.tempModifier = tempModifier;
	}
	
	/**
	 * TODO: Refactor abilities to provide this value easily
	 *
	 * @returns {number}
	 */
	get strModifier()
	{
		return this.str.tempModifier || this.str.modifier;
	}
	
	/**
	 * TODO: Refactor abilities to provide this value easily
	 *
	 * @returns {number}
	 */
	get dexModifier()
	{
		return this.dex.tempModifier || this.dex.modifier;
	}
	
	/**
	 * Special size modifier.
	 *
	 * @returns {number}
	 */
	get sizeModifier()
	{
		return this.size.specialModifier;
	}
	
	get total()
	{
		return 10 +
			this.baseAttackBonus + this.strModifier + this.dexModifier + this.sizeModifier +
			this.miscModifier + this.tempModifier;
	}
}
