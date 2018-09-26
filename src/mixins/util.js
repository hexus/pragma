import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

/**
 * Utility functions mixin for Riot tags.
 */
export default {
	util: {
		/**
		 * Convert a string to title case.
		 *
		 * @param {string} string
		 */
		titleCase: function (string) {
			return startCase(toLower(string));
		}
	}
};
