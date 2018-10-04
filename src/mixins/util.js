import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import toUpper from 'lodash/toUpper';
import clamp from 'lodash/clamp';

/**
 * Utility functions mixin for Riot tags.
 */
export default {
	util: {
		/**
		 * Convert a string to title case.
		 *
		 * @param {string} string
		 * @return {string}
		 */
		titleCase: function (string) {
			return startCase(toLower(string));
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
		 * Clamp a value but allow it to remain an empty string.
		 *
		 * @param {string|number} value
		 * @param {number}        min
		 * @param {number}        max
		 * @return {string|number}
		 */
		clamp: function (value, min, max) {
			return value !== '' ? clamp(value, min, max) : '';
		}
	}
};
