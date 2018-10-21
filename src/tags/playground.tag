<playground>
	<tree children="{ tree.children }" data="{ sheet }" onedit="{ edit }"></tree>

	<script>
		import './tree.tag';
		import './input/number.tag';
		import './input/string.tag';
		import './input/section.tag';
		import './input/group.tag';
		import './input/list.tag';

		import set from 'lodash/set';

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

			let { name, value } = event.detail;

			let property = dictionary[name];

			processor.updateValue(dictionary, this.sheet, property, value);

			console.log(name, value);
		};

		console.log(this);
	</script>
</playground>
