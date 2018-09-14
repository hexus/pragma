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
	
	get str()
	{
		return this.abilities.str;
	}
	
	get dex()
	{
		return this.abilities.dex;
	}
	
	get con()
	{
		return this.abilities.con;
	}
	
	get int()
	{
		return this.abilities.int;
	}
	
	get wis()
	{
		return this.abilities.wis;
	}
	
	get cha()
	{
		return this.abilities.cha;
	}
}
