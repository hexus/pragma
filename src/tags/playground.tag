<playground>
	<tree children="{ tree.children }" data="{ sheet }" onedit="{ edit }"></tree>

	<script>
		import './tree.tag';
		import './input/number.tag';
		import './input/string.tag';
		import './input/section.tag';
		import './input/group.tag';
		import './input/list.tag';
		import './input/pragma-table.tag';

		const app = this.opts.app;

		let formProcessor = app.services.formProcessor;

		this.tree = formProcessor.tree;

		this.sheet = app.state.sheet;

		this.edit = function (event) {
			console.log('playground edit event', event);

			let { name, value } = event.detail;

			formProcessor.updateValue(this.sheet, name, value);

			console.log(name, value);
		};

		console.log(this);
	</script>
</playground>
