/**
 * Traverse a tree.
 *
 * TODO: Visitor object? Could have multiple pre/post callbacks
 *
 * Traversal of children can be halted by returning false from the pre-order
 * operation function.
 *
 * @param {Object}   node - The node to traverse.
 * @param {Function} pre  - Pre-order operation.
 * @param {Function} post - Post-order operation.
 */
function traverseTree(node, pre = null, post = null) {
	if (!node) {
		return;
	}
	
	let result;
	
	if (typeof pre === 'function') {
		result = pre(node);
		
		if (result === false) {
			return;
		}
	}
	
	let children = node.children || [];
	
	for (let i = 0; i < children.length; i++) {
		traverseTree(children[i], pre, post);
	}
	
	if (typeof post === 'function') {
		result = post(node);
		
		if (result === false) {
			return;
		}
	}
}

export default traverseTree;
