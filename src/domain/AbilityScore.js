/**
 * A character ability score.
 */
export default class AbilityScore
{
	/**
	 * Create a new ability score.
	 *
	 * @param {int=10} score - An ability score between 1 and 45.
	 */
	constructor(score)
	{
		/**
		 * @type {int}
		 */
		this.score = Math.max(1, Math.min(45, score)) || 10;
	}
	
	/**
	 * @returns {int}
	 */
	get modifier()
	{
		return Math.floor((this.score / 2) - 5);
	}
}
