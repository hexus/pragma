/**
 * Build a property tree from a dictionary of fields.
 *
 * @param {FieldDictionary} dictionary
 * @returns {Field}
 */
export default function (dictionary) {
	// Let's make a tree out of a dictionary
	let tree = {
		path: '',
		children: []
	};
	
	// Bail early on an empty dictionary
	if (!dictionary) {
		return tree;
	}
	
	// Make sure the root is available as a parent in the dictionary
	if (dictionary['']) {
		tree = dictionary[''];
	} else {
		dictionary[''] = tree;
	}
	
	let path, field, parent;
	
	// Link up properties to their parents, placing any properties without
	// parents into the children of our tree
	for (path in dictionary) {
		field = dictionary[path];
		
		// Skip the root node silently
		if (field === tree) {
			continue;
		}
		
		if (!field || field.path == null || path !== field.path) {
			// You're weird and don't belong in our tree, bye Felicia
			// TODO: "path" could be valid here, set it to field.path if so
			console.warn(`Skipped field without path`, field);
			continue;
		}
		
		if (field.parent == null) {
			// You don't have an explicitly defined parent, bye Felicia
			// TODO: Add to root?
			console.warn(`Skipped field '${path}'; it has no parent`);
			continue;
		}
		
		parent = dictionary[field.parent];
		
		if (!parent) {
			// Sorry, you're an orphan, you don't get into the tree
			// TODO: Be nice and create a parent for them?
			console.warn(`Orphaned field '${path}'`);
			continue;
		}
		
		parent.children = parent.children || [];
		
		if (!parent.children.includes(field)) {
			parent.children.push(field);
		}
	}
	
	return tree;
}
