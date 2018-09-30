import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import toUpper from 'lodash/toUpper';

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
		}
	}
};
