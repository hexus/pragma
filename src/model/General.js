/**
 * General character information.
 */
export default class General
{
	/**
	 * @param {string} name
	 * @param {string} gender
	 * @param {string} age
	 * @param {string} height
	 * @param {string} hair
	 * @param {string} eyes
	 * @param {string} home
	 * @param {string} deity
	 * @param {string[]} extra
	 */
	constructor(name, gender, age, height, hair, eyes, home, deity, extra)
	{
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.height = height;
		this.hair = hair;
		this.eyes = eyes;
		this.home = home;
		this.deity = deity;
		this.extra = [];
	}
}
