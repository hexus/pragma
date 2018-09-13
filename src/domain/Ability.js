import AbilityScore from './AbilityScore';

/**
 * A character ability.
 */
export default class Ability
{
	/**
	 * @param {string} name  - Ability name
	 * @param {int}    score - Ability score
	 * @param {int}    bonus - Bonus score
	 */
	constructor(name, score, bonus)
	{
		bonus = bonus || 0;
		
		this.name = name;
		this.shortName = name.substr(0, 3);
		this.abilityScore = new AbilityScore(score + bonus);
		this.baseScore = new AbilityScore(score);
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
	get baseScore()
	{
		return this.baseScore.score;
	}
	
	/**
	 * @returns {int}
	 */
	get baseModifier()
	{
		return this.baseScore.modifier;
	}
	
	/**
	 * @returns {int}
	 */
	get modifier()
	{
		return this.abilityScore.modifier;
	}
}
