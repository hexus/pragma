/**
 * A character's armor class (AC).
 */
export default class ArmorClass
{
	/**
	 * Create a new character armor class score.
	 *
	 * @param {Ability} ability              - The ability that affects armor class.
	 * @param {Size}    size                 - The character's size.
	 * @param {int}     [armorBonus]         - AC bonus from armor.
	 * @param {int}     [shieldBonus]        - AC bonus from shields.
	 * @param {int}     [naturalArmor]       - AC bonus from natural armor.
	 * @param {int}     [deflectionModifier] - Deflection AC score.
	 * @param {int}     [miscModifier]       - Miscellaneous AC modifier.
	 * @param {int}     [tempModifier]       - Temporary AC modifier.
	 */
	constructor(ability, size, armorBonus, shieldBonus, naturalArmor, deflectionModifier, miscModifier, tempModifier)
	{
		this.ability = ability;
		this.size = size;
		this.armorBonus = armorBonus || 0;
		this.shieldBonus = shieldBonus || 0;
		this.naturalArmor = naturalArmor || 0;
		this.deflectionModifier = deflectionModifier || 0;
		this.miscModifier = miscModifier || 0;
		this.tempModifier = tempModifier || 0;
	}
	
	/**
	 * Ability modifier.
	 *
	 * @return {int}
	 */
	get abilityModifier()
	{
		return this.ability.modifier;
	}
	
	/**
	 * Size modifier.
	 *
	 * @return {int}
	 */
	get sizeModifier()
	{
		return this.size.modifier;
	}
	
	/**
	 * Total armor class score.
	 *
	 * @return {number}
	 */
	get total()
	{
		return 10 +
			this.armorBonus + this.shieldBonus + this.abilityModifier + this.sizeModifier + this.naturalArmor +
			this.deflectionModifier + this.miscModifier + this.tempModifier;
	}
	
	/**
	 * Touch armor class score.
	 *
	 * @returns {number}
	 */
	get touch()
	{
		return this.total - this.armorBonus - this.shieldBonus - this.naturalArmor;
	}
	
	/**
	 * Flat-footed armor class score.
	 *
	 * @returns {number}
	 */
	get flatFooted()
	{
		return this.total - this.abilityModifier;
	}
}
