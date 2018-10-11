/**
 * A character saving throw.
 */
export default class SavingThrow
{
	/**
	 * Create a new saving throw.
	 *
	 * @param {string}  name
	 * @param {int}     base
	 * @param {Ability} ability
	 * @param {int}     [magicModifier]
	 * @param {int}     [miscModifier]
	 * @param {int}     [tempModifier]
	 */
	constructor(name, base, ability, magicModifier, miscModifier, tempModifier)
	{
		this.name = name;
		this.base = base || 0;
		this.ability = ability;
		this.magicModifier = magicModifier || 0;
		this.miscModifier = miscModifier || 0;
		this.tempModifier = tempModifier || 0;
	}
	
	/**
	 * Ability modifier.
	 *
	 * @returns {number}
	 */
	get abilityModifier()
	{
		return this.ability.modifier;
	}
	
	/**
	 * Get the total saving throw score.
	 *
	 * @returns {number}
	 */
	get total()
	{
		return this.base + this.abilityModifier + this.magicModifier + this.miscModifier + this.tempModifier;
	}
}
