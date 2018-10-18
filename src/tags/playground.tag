<playground>
	<h3>Tree</h3>

	<tree children="{ tree.children }"></tree>

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

		console.log(this);
	</script>
</playground>
