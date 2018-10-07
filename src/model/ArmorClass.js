/**
 * A character's armor class (AC).
 */
export default class ArmorClass
{
	/**
	 * Create a new character armor class score.
	 *
	 * @param {int}     armorBonus         - AC bonus from armor.
	 * @param {int}     shieldBonus        - AC bonus from shields.
	 * @param {Ability} ability            - The ability that affects armor class.
	 * @param {int}     size               - The character's size bonus. TODO: Character Size class
	 * @param {int}     naturalArmor       - AC bonus from natural armor.
	 * @param {int}     deflectionModifier - Deflection AC score.
	 * @param {int}     miscModifier       - Miscellaneous AC modifier.
	 * @param {int}     tempModifier       - Temporary AC modifier.
	 */
	constructor(armorBonus, shieldBonus, ability, size, naturalArmor, deflectionModifier, miscModifier, tempModifier)
	{
		this.armorBonus = armorBonus || 0;
		this.shieldBonus = shieldBonus || 0;
		this.ability = ability;
		this.size = size || 0;
		this.naturalArmor = naturalArmor || 0;
		this.deflectionModifier = deflectionModifier || 0;
		this.miscModifier = miscModifier || 0;
		this.tempModifier = tempModifier || 0;
	}
	
	/**
	 * TODO: Refactor abilities to provide this value easily
	 */
	get abilityModifier()
	{
		return this.ability.tempModifier || this.ability.modifier;
	}
	
	/**
	 * TODO: Character Size class (return this.size.modifier)
	 *
	 * @return {int}
	 */
	get sizeModifier()
	{
		return this.size;
	}
	
	/**
	 * TODO: Character Size class (remove this method)
	 *
	 * @param {int} value
	 */
	set sizeModifier(value)
	{
		this.size = value;
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
		return this.total - this.armorBonus - this.naturalArmor;
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
