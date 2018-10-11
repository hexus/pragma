import AbilityScore from './AbilityScore';
import { util } from '../mixins/util';

/**
 * A character ability.
 *
 * TODO: Refactor to just have baseScore and tempBonus properties
 */
export default class Ability
{
	/**
	 * Create a new character ability.
	 *
	 * @param {string} name  - Ability name
	 * @param {int}    score - Base ability score
	 * @param {int}    temp  - Temporary score
	 */
	constructor(name, score, temp)
	{
		temp = temp || 0;

		this.name = name;
		this.shortName = name.substr(0, 3).toLowerCase();

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
		return util.isNumeric(this.tempScore) ? this.tempModifier : this.baseModifier;
	}
	
	/**
	 * @returns {int}
	 */
	get baseModifier()
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
