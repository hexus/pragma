import Ability from './Ability';

/**
 * Character abilities.
 */
export default class Abilities
{
	/**
	 * @param {int} str - Strength score
	 * @param {int} dex - Dexterity score
	 * @param {int} con - Constitution score
	 * @param {int} int - Intelligence score
	 * @param {int} wis - Wisdom score
	 * @param {int} cha - Charisma score
	 */
	constructor(str, dex, con, int, wis, cha)
	{
		this.str = new Ability('Strength', str);
		this.dex = new Ability('Dexterity', dex);
		this.con = new Ability('Constitution', con);
		this.int = new Ability('Intelligence', int);
		this.wis = new Ability('Wisdom', wis);
		this.cha = new Ability('Charisma', cha);
	}
}
