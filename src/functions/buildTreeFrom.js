/**
 * Build a property tree from a dictionary of properties.
 *
 * @param {FieldDictionary} dictionary
 * @returns {FieldTree} TODO: Typedef
 */
export default function (dictionary) {
	// Let's make a tree out of a dictionary
	let tree = {
		children: []
	};
	
	// Bail early on an empty dictionary
	if (!dictionary) {
		return tree;
	}
	
	let path, property, lastDotIndex, parentPath, parent;
	
	// Link up properties to their parents, placing any properties without
	// parents into the children of our tree
	for (path in dictionary) {
		property = dictionary[path];
		
		if (!property || !property.path || path !== property.path) {
			// You're weird and don't belong in our tree, bye Felicia
			continue;
		}
		
		// Ascertain a parent
		
		// TODO: Extract this block?
		if (property.parent) {
			parent = dictionary[property.parent];
		} else {
			lastDotIndex = property.path.lastIndexOf('.');
			
			if (lastDotIndex < 1) {
				parentPath = null;
				parent     = tree;
			} else {
				parentPath = property.path.substring(lastDotIndex, 0);
				parent     = dictionary[parentPath];
			}
		}
		
		// Sorry, you're an orphan, you don't get into the tree
		if (!parent) {
			// TODO: Be nice and create a parent for them?
			console.warn(`Orphaned property '${path}'`);
			continue;
		}
		
		parent.children = parent.children || [];
		
		parent.children.push(property);
	}
	
	return tree;
}
