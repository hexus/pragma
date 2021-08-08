/**
 * Build a dictionary from a list of objects.
 *
 * @param {Object[]} objects    - The objects to make a dictionary from.
 * @param {string} [key='path'] - The property to key each object by.
 * @return {Object.<string, Object>} The dictionary of objects.
 */
export default function (objects, key = 'path') {
	let dictionary = {};

	if (Array.isArray(objects) && objects.length) {
		for (let i = 0; i < objects.length; i++) {
			if (!objects[i] || objects[i][key] == null) {
				continue;
			}

			dictionary[objects[i][key]] = objects[i];
		}
	}

	return dictionary;
}
