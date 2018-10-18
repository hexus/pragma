/**
 * Build a dictionary from a list of properties.
 *
 * TODO: Use in a DictionaryProcessor class
 *
 * @param {Property[]} properties
 */
export default function (properties) {
	let dictionary = {};
	
	if (!Array.isArray(properties)) {
		return dictionary;
	}
	
	for (let i = 0; i < properties.length; i++) {
		if (!properties[i] || !properties[i].path)
			continue;
		
		dictionary[properties[i].path] = properties[i];
	}
	
	return dictionary;
}
