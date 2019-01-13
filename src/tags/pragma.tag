<pragma>
	<tree children="{ tree.children }" onadd="{ add }" onedit="{ edit }" onremove="{ remove }"></tree>

	<div if="{ opts.hasOwnProperty('debug') }" style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; background: rgba(255, 255, 255, 0.5); overflow: auto;">
		<!-- Debug the data -->
		<!-- TODO: Pragma debug tag that decorates this tag with debugging functionality -->
		<!-- TODO: Pragma edit tag that decorates this tag with form editing functionality -->
		<pre>{ JSON.stringify(sheet, null, 2) }</pre>

		<!--<h2>Form</h2>-->
		<!--<pre>{ JSON.stringify(tree, null, 2) }</pre>-->
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
		//       Fire events to communicate data updates, handle data attribute
		//       changes to allow external changes to data
		let app = this.opts.app;

		let formProcessor = app.services.formProcessor;

		this.tree = formProcessor.tree;

		this.sheet = app.state.sheet;

		formProcessor.update(this.sheet);

		this.edit = function (event) {
			let { name, value } = event.detail;

			formProcessor.setValue(this.sheet, name, value);
		};

		this.add = function (event) {
			let { name } = event.detail;

			formProcessor.addItem(this.sheet, name);
		};

		this.remove = function (event) {
			let { name } = event.detail;

			formProcessor.remove(this.sheet, name);
		};
	</script>
</pragma>
