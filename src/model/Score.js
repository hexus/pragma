import sum from 'lodash/sum';

/**
 * A generic character score.
 */
export default class Score
{
	/**
	 * Create a new character score.
	 *
	 * @param {?int} [base]         - Base score.
	 * @param {?int} [miscModifier] - Miscellaneous modifier.
	 * @param {?int} [tempModifier] - Temporary modifier.
	 */
	constructor(base, miscModifier, tempModifier)
	{
		this.base = base || 0;
		this.miscModifier = miscModifier || 0;
		this.tempModifier = tempModifier || 0;
	}
	
	/**
	 * Total score.
	 *
	 * @returns {int}
	 */
	get total()
	{
		return sum([this.base, this.miscModifier, this.tempModifier]);
	}
}
