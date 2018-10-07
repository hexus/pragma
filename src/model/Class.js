/**
 * A character's class.
 */
export default class Class
{
	/**
	 * Create a new character class.
	 *
	 * @param {string} name
	 * @param {int} level
	 * @param archetype
	 * @param skills
	 */
	constructor(name, level, archetype, skills)
	{
		this.name = name;
		this.level = Math.max(1, level);
		this.archetype = archetype;
		this.skills = skills;
	}
}
