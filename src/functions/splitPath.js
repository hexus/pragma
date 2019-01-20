/**
 * Split a field path into its "parent path" and "key" segments.
 *
 * @param {string} path            - The field path to split.
 * @param {string} [delimiter='.'] - The path delimiter to use.
 * @return {string[]} [parentPath, key]
 */
export default function (path, delimiter = '.') {
	let parentPath, key;

	let lastDelimiterIndex = path.lastIndexOf(delimiter);
	
	if (lastDelimiterIndex < 1) {
		parentPath = '';
		key = path;
	} else {
		parentPath = path.substring(0, lastDelimiterIndex);
		key = path.substring(lastDelimiterIndex + 1);
	}
	
	return [parentPath, key];
}
