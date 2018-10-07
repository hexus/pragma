import SavingThrow from "./SavingThrow";

/**
 * A character's saving throws.
 */
export default class SavingThrows
{
	/**
	 * Create a new set of saving throws.
	 *
	 * @param {Abilities} abilities - Character abilities
	 * @param {int}       fort      - Base fortitude save
	 * @param {int}       ref       - Base reflex save
	 * @param {int}      will      - Base will save
	 */
	constructor(abilities, fort, ref, will)
	{
		this.fortitude = new SavingThrow('Fortitude', fort, abilities.con);
		this.reflex = new SavingThrow('Reflex', ref, abilities.dex);
		this.will = new SavingThrow('Will', will, abilities.wis);
	}
}
