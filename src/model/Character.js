/**
 * A character.
 */
export default class Character
{
	/**
	 * Create a new character.
	 *
	 * @param {General}   general
	 * @param {Size}      size
	 * @param {Abilities} abilities
	 * @param {Defense}   defense
	 * @param {Offense}   offense
	 * @param {Skills}    skills
	 */
	constructor(general, size, abilities, defense, offense, skills)
	{
		this.general   = general;
		this.size      = size;
		this.abilities = abilities;
		this.defense   = defense;
		this.offense   = offense;
		this.skills    = skills;
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
