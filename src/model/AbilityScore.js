import clamp from 'lodash/clamp';
import abilityModifier from './functions/abilityModifier';
import { util } from '../mixins/util';

/**
 * A character ability score.
 */
export default class AbilityScore
{
	/**
	 * Create a new ability score.
	 *
	 * @param {?int=10} score - An ability score between 1 and 45.
	 */
	constructor(score)
	{
		/**
		 * @type {?int}
		 */
		this.score = util.isNumeric(score) ? clamp(score, -60, 60) : null;
	}
	
	/**
	 * @returns {?int}
	 */
	get modifier()
	{
		return abilityModifier(this.score);
	}
}
