/**
 * Traverse a tree.
 *
 * TODO: Visitor object? Could have multiple pre/post callbacks
 *
 * @param {Object}   node - The node to traverse.
 * @param {Function} pre  - Pre-subtree visitor function.
 * @param {Function} post - Post-subtree visitor function.
 */
function traverseTree(node, pre = null, post = null) {
	if (!node) {
		return;
	}
	
	if (typeof pre === 'function') {
		pre(node);
	}
	
	let children = node.children || [];
	
	for (let i = 0; i < children.length; i++) {
		traverseTree(children[i], pre, post);
	}
	
	if (typeof post === 'function') {
		post(node);
	}
}

export default traverseTree;
