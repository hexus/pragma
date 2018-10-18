<playground>
	<tree children="{ tree.children }" data="{ sheet }"></tree>

	<script>
		import './tree.tag';

		const app = this.opts.app;

		let properties = this.opts.app.data.properties;
		let processor = app.services.propertyProcessor;

		// TODO: Could just be one method couldn't it...
		properties = processor.process(properties);
		let dictionary = processor.buildDictionaryFrom(properties);
		let tree = processor.buildTreeFrom(dictionary);

		this.tree = tree;

		this.sheet = app.state.sheet;

		console.log(this);
	</script>
</playground>
