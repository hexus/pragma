import AbilityScore from './AbilityScore';

/**
 * A character ability.
 */
export default class Ability
{
	/**
	 * @param {string} name
	 * @param {int}    score
	 */
	constructor(name, score)
	{
		this.name = name;
		this.shortName = name.substr(0, 3);
		this.abilityScore = new AbilityScore(score);
	}
	
	/**
	 * @returns {int}
	 */
	get score()
	{
		return this.abilityScore.score;
	}
	
	/**
	 * @param {int} score
	 */
	set score(score)
	{
		this.abilityScore.score = score;
	}
	
	/**
	 * @returns {int}
	 */
	get modifier()
	{
		return this.abilityScore.modifier;
	}
}
