<pragma>
	<tree children="{ form.tree.children }" onadd="{ add }" onedit="{ edit }" onremove="{ remove }"></tree>

	<div if="{ opts.hasOwnProperty('debug') }"
		 style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; background: rgba(255, 255, 255, 0.5); overflow: auto;">
		<!-- Debug the data -->
		<!-- TODO: Pragma debug tag that decorates this tag with debugging functionality -->
		<!-- TODO: Pragma edit tag that decorates this tag with form editing functionality -->
		<pre>{ JSON.stringify(state, null, 2) }</pre>
	</div>

	<script>
		// Import default tags, mixins, and the Form class
		import './tree.tag';
		import './input/string.tag';
		import './input/number.tag';
		import './input/boolean.tag';
		import './input/selection.tag';
		import './input/section.tag';
		import './input/group.tag';
		import './input/list.tag';
		import './input/pragma-table.tag';
		import domEvent      from '../mixins/domEvent';
		import FormProcessor from "../services/FormProcessor";

		// Globally mixin the DOM event helper
		riot.mixin(domEvent);

		// Retrieve tag options
		let fields, functions, state, form;

		this.form  = null;
		this.state = null;

		// Define event handlers
		this.add = function (event) {
			let { name } = event.detail;

			form.addItem(this.state, name);
		};

		this.edit = function (event) {
			let { name, value } = event.detail;

			form.setValue(this.state, name, value);
		};

		this.remove = function (event) {
			let { name } = event.detail;

			form.removeValue(this.state, name);
		};

		this.sync = function () {
			fields    = this.opts.fields || this.root.fields || {};
			functions = this.opts.functions || this.root.functions || {};
			state     = this.opts.state || this.root.state || {};

			form = new FormProcessor(fields, functions);

			this.form  = form;
			this.state = state;

			form.update(this.state);
		};

		this.sync();
		//this.on('mount', this.sync);
		//this.on('update', this.sync);
	</script>
</pragma>
