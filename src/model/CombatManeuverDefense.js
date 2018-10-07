/**
 * A character's combat maneuver defense score.
 */
export default class CombatManeuverDefense
{
	/**
	 * Create a new combat maneuver defense score.
	 *
	 * @param {int}     baseAttackBonus - Base attack bonus
	 * @param {Ability} str             - Strength ability
	 * @param {Ability} dex             - Dexterity ability
	 * @param {int}     size            - Size modifier
	 * @param {int}     [miscModifier]  - Miscellaneous CMD modifier
	 * @param {int}     [tempModifier]  - Temporary CMD modifier
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
	
	get strModifier()
	{
		return this.str.tempModifier || this.str.modifier;
	}
	
	get dexModifier()
	{
		return this.dex.tempModifier || this.dex.modifier;
	}
	
	get sizeModifier()
	{
		return this.size;
	}
	
	set sizeModifier(value)
	{
		this.size = value;
	}
	
	get total()
	{
		return 10 +
			this.baseAttackBonus + this.strModifier + this.dexModifier + this.sizeModifier +
			this.miscModifier + this.tempModifier;
	}
}
