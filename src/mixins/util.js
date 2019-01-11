import Case from 'case';
import toUpper from 'lodash/toUpper';
import clamp from 'lodash/clamp';

/**
 * Utility functions mixin for Riot tags.
 *
 * TODO: Extract these and just compose them here for the mixin.
 */
const util = {
	/**
	 * Convert a string to title case.
	 *
	 * TODO: This could really be enhanced!
	 *
	 * @param {string} string
	 * @return {string}
	 */
	sentenceCase: function (string) {
		return Case.sentence(string);
	},
	
	/**
	 * Convert a string to upper case.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	upperCase: function (string) {
		return toUpper(string);
	},
	
	/**
	 * Clamp a value.
	 *
	 * TODO: Seems to be redundant.
	 *
	 * @param {number} value
	 * @param {number} min
	 * @param {number} max
	 * @return {string|number}
	 */
	clamp: function (value, min, max) {
		return clamp(value, min, max);
	},
	
	/**
	 * Determine whether a value is numeric.
	 *
	 * @param {*} value
	 * @return boolean
	 */
	isNumeric: function (value) {
		return (typeof value === 'number' || typeof value === 'string') &&
			!isNaN(parseFloat(value)) && isFinite(value);
	}
};

/**
 * @mixin
 */
export default {
	util: util
};

export { util };
