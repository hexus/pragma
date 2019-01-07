<pragma>
	<!--<pre>{ JSON.stringify(sheet, null, 2) }</pre>-->

	<!--<pre>{ JSON.stringify(tree.children, null, 2) }</pre>-->

	<tree children="{ tree.children }" onedit="{ edit }" onadd="{ add }" onremove="{ remove }"></tree>

	<!-- Debug the data -->
	<div style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; background: rgba(255, 255, 255, 0.5); overflow: auto;">
		<pre>{ JSON.stringify(sheet, null, 2) }</pre>
	</div>

	<script>
		import './tree.tag';
		import './input/string.tag';
		import './input/number.tag';
		import './input/boolean.tag';
		import './input/section.tag';
		import './input/group.tag';
		import './input/list.tag';
		import './input/pragma-table.tag';

		// TODO: Change this tag to accept only a form description and some data
		//       There should be an easy way to get and set the data after mounting
		let app = this.opts.app;

		let formProcessor = app.services.formProcessor;

		this.tree = formProcessor.tree;

		this.sheet = app.state.sheet;

		formProcessor.update(this.sheet);

		this.edit = function (event) {
			console.log('pragma edit event', event);

			let { name, value } = event.detail;

			formProcessor.setValue(this.sheet, name, value);
		};

		this.add = function (event) {
			console.log('pragma add event', event);

			let { name } = event.detail;

			formProcessor.addItem(this.sheet, name);
		};

		this.remove = function (event) {
			console.log('pragma remove event', event);

			let { name } = event.detail;

			formProcessor.remove(this.sheet, name);
		};

		console.log(this);
	</script>
</pragma>
