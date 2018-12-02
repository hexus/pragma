<pragma>
	<!--<pre>{ JSON.stringify(sheet, null, 2) }</pre>-->

	<!--<pre>{ JSON.stringify(tree.children, null, 2) }</pre>-->

	<tree children="{ tree.children }" onedit="{ edit }" onadd="{ add }" onremove="{ remove }"></tree>

	<!-- Debug the data -->
	<pre>{ JSON.stringify(sheet, null, 2) }</pre>

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
			console.log('pragma edit event', event);

			let { name, value } = event.detail;

			// Update a value
			formProcessor.updateValue(this.sheet, name, value);

			console.log(name, value);
		};

		this.add = function (event) {
			console.log('pragma add event', event);

			let { name } = event.detail;

			// Add a new data item
			formProcessor.addItem(this.sheet, name);

			// Update the form
			formProcessor.update(this.sheet);
		};

		this.remove = function (event) {
			console.log('pragma remove event', event);

			let { name } = event.detail;

			// Remove a value
			formProcessor.remove(this.sheet, name);

			// Update the form
			formProcessor.update(this.sheet);
		};

		console.log(this);
	</script>
</pragma>
