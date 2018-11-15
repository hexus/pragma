<playground>
	<!--<pre>{ JSON.stringify(sheet, null, 2) }</pre>-->

	<!--<pre>{ JSON.stringify(tree.children, null, 2) }</pre>-->

	<tree children="{ tree.children }" data="{ sheet }" onedit="{ edit }" onadd="{ add }"></tree>

	<script>
		import './tree.tag';
		import './input/number.tag';
		import './input/string.tag';
		import './input/section.tag';
		import './input/group.tag';
		import './input/list.tag';
		import './input/pragma-table.tag';

		let app = this.opts.app;

		let formProcessor = app.services.formProcessor;

		this.tree = formProcessor.tree;

		this.sheet = app.state.sheet;

		formProcessor.update(this.sheet);

		this.edit = function (event) {
			console.log('playground edit event', event);

			let { name, value } = event.detail;

			formProcessor.updateValue(this.sheet, name, value);

			console.log(name, value);
		};

		this.add = function (event) {
			console.log('playground add event', event);

			let { name } = event.detail;

			// Add a new data item
			formProcessor.addItem(this.sheet, name);

			// Update the form
			formProcessor.update(this.sheet);
		};

		console.log(this);
	</script>
</playground>
