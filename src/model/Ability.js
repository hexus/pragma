import AbilityScore from './AbilityScore';

/**
 * A character ability.
 */
export default class Ability
{
	/**
	 * @param {string} name  - Ability name
	 * @param {int}    score - Base ability score
	 * @param {int}    temp  - Temporary score
	 */
	constructor(name, score, temp)
	{
		temp = temp || 0;

		this.name = name;
		this.shortName = name.substr(0, 3);

		this.abilityScore = new AbilityScore(score);
		this.tempScore = new AbilityScore(temp);
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
	
	/**
	 * @returns {int}
	 */
	get temp()
	{
		return this.tempScore.score;
	}
	
	/**
	 * @param {int} score
	 */
	set temp(score)
	{
		this.tempScore.score = score;
	}
	
	/**
	 * @returns {int}
	 */
	get tempModifier()
	{
		return this.tempScore.modifier;
	}
	
	/**
	 * @returns {int}
	 */
	get bonus()
	{
		return this.temp - this.score;
	}
}
