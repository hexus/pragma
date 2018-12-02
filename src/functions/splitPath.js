/**
 * Split a path into its parent-path and base-path segments.
 *
 * @param {string} path - The path to split.
 * @return {string[]} [parentPath, pathFragment]
 */
export default function (path) {
	let parentPath, pathFragment;

	let lastDotIndex = path.lastIndexOf('.');
	
	if (lastDotIndex < 1) {
		parentPath = '';
		pathFragment = path;
	} else {
		parentPath = path.substring(0, lastDotIndex);
		pathFragment = path.substring(lastDotIndex + 1);
	}
	
	return [parentPath, pathFragment];
}
