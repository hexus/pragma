/**
 * Build a dictionary from a list of objects.
 *
 * @param {Object[]} objects            - The objects to make a dictionary from.
 * @param {string} [keyProperty='path'] - The property to key each object by.
 * @return {Object.<string, Object>} The dictionary of objects.
 */
export default function (objects, keyProperty) {
	keyProperty    = keyProperty || 'path';
	let dictionary = {};
	
	if (!Array.isArray(objects)) {
		return dictionary;
	}
	
	for (let i = 0; i < objects.length; i++) {
		if (!objects[i] || !objects[i][keyProperty]) {
			continue;
		}
		
		dictionary[objects[i][keyProperty]] = objects[i];
	}
	
	return dictionary;
}
