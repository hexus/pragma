<playground>
	<h3>Tree</h3>

	<tree children="{ tree.children }"></tree>

	<h3>Properties</h3>

	<div each="{ property, path in dictionary }">
		{ path }
	</div>

	<script>
		import './tree.tag';
		import get from 'lodash/get';
		import set from 'lodash/set';

		this.dictionary = this.opts.app.data.dictionary;

		// Let's make a tree out of a dictionary
		this.tree = {
			path: '',
			name: 'Character Sheet',
			children: []
		};

		let path, property, lastDotIndex, parentPath, parent;

		// Link up properties to their parents, placing any properties without
		// parents into the children of our tree
		for (path in this.dictionary) {
			property = this.dictionary[path];

			if (!property || !property.path) {
				// Bye bye, you don't get to be in our tree
				continue;
			}

			// Ascertain a parent
			lastDotIndex = property.path.lastIndexOf('.');

			if (lastDotIndex < 1) {
				parentPath = null;
				parent = this.tree;
			} else {
				parentPath = property.path.substring(lastDotIndex, 0);
				parent = this.dictionary[parentPath];
			}

			console.log(path, parentPath, parent);

			// Sorry, you're an orphan, you don't get into the tree
			if (!parent) {
				// TODO: Be nice and create a parent for them?
				console.warn(`Orphaned property '${path}'`);
				continue;
			}

			// Give the parent some loving arms for its children (an array)
			parent.children = parent.children || [];

			parent.children.push(property);
		}

		console.log(this.tree);
	</script>
</playground>
