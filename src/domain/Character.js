/**
 * A character.
 */
export default class Character
{
	/**
	 * @param {General} general
	 * @param {Abilities} abilities
	 */
	constructor(general, abilities)
	{
		this.general = general;
		this.abilities = abilities;
	}
	
	get name()
	{
		return this.general.name;
	}
}
