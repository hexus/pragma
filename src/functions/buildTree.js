/**
 * Build a property tree from a dictionary of properties.
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
	
	let path, property, parent;
	
	// Link up properties to their parents, placing any properties without
	// parents into the children of our tree
	for (path in dictionary) {
		property = dictionary[path];
		
		if (!property || property.path == null || path !== property.path) {
			// You're weird and don't belong in our tree, bye Felicia
			// TODO: "path" could be valid here, set it to property.path if so
			console.warn(`Skipped property without path`, property);
			continue;
		}
		
		if (property.parent == null) {
			// You don't have an explicitly defined parent, bye Felicia
			// TODO: Add to root?
			console.warn(`Skipped property '${path}'; it has no parent`);
			continue;
		}
		
		parent = dictionary[property.parent];
		
		if (!parent) {
			// Sorry, you're an orphan, you don't get into the tree
			// TODO: Be nice and create a parent for them?
			console.warn(`Orphaned property '${path}'`);
			continue;
		}
		
		parent.children = parent.children || [];
		
		parent.children.push(property);
	}
	
	return tree;
}
