<playground>
	<tree children="{ tree.children }" data="{ sheet }" onedit="{ edit }"></tree>

	<script>
		import './tree.tag';

		const app = this.opts.app;

		let properties = app.data.properties;
		let processor = app.services.propertyProcessor;

		// TODO: Could just be one method couldn't it...
		properties = processor.process(properties);
		let dictionary = processor.buildDictionaryFrom(properties);
		let tree = processor.buildTreeFrom(dictionary);

		this.tree = tree;

		this.sheet = app.state.sheet;

		this.edit = function (event) {
			console.log('playground edit event', event);

			let { path, value } = event.detail;

			let property = dictionary[path];

			// Processing
			value = processor.deriveValue(property, value, this.sheet);

			set(this.sheet, path, value);
		};

		console.log(this);
	</script>
</playground>
