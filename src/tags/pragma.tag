<pragma>
	<tree children="{ form.tree.children }" onadd="{ add }" onedit="{ edit }" onremove="{ remove }"></tree>

	<div if="{ opts.debug !== undefined }"
		 style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; background: rgba(255, 255, 255, 0.5); overflow: auto;">
		<!-- Debug the data -->
		<!-- TODO: Pragma debug tag that decorates this tag with debugging functionality -->
		<!-- TODO: Pragma edit tag that decorates this tag with form editing functionality -->
		<pre>{ JSON.stringify(state, null, 2) }</pre>
	</div>

	<script>
		import './tree.tag';
		import './input/string.tag';
		import './input/number.tag';
		import './input/boolean.tag';
		import './input/selection.tag';
		import './input/section.tag';
		import './input/picker.tag';
		import './input/group.tag';
		import './input/list.tag';
		import './input/pragma-table.tag';
		import domEvent      from '../mixins/domEvent';
		import FormProcessor from "../services/FormProcessor";

		// Globally mixin the DOM event helper
		riot.mixin(domEvent);

		// Define properties
		this.form  = new FormProcessor([]);
		this.state = null;
		this.fields = null;

		if (window && this.opts.debug != null) {
			window.pragma = this.form;
		}

		// Define event handlers
		this.add = function (event) {
			let { name, key, value } = event.detail;

			if (!name) {
				return;
			}

			this.form.addItem(this.state, name, key, value);
		};

		this.edit = function (event) {
			let { name, value } = event.detail;

			if (!name) {
				return;
			}

			value = this.form.setValue(this.state, name, value);

			event.detail.value = value;
		};

		this.remove = function (event) {
			let { name } = event.detail;

			if (!name) {
				return;
			}

			this.form.removeValue(this.state, name);
		};

		this.sync = function () {
			let fields    = this.opts.fields || this.root.fields || {};
			let functions = this.opts.functions || this.root.functions || {};
			let defaults  = this.opts.defaults || this.root.defaults || {};
			let state     = this.opts.state || this.root.state || {};

			this.form.setDefaults(defaults);
			this.form.addFunctions(functions);

			if (fields !== this.fields) {
				console.time('setFields');
				this.fields = fields;
				this.form.setFields(fields);
				console.timeEnd('setFields');
			}

			if (state !== this.state) {
				console.time('update');
				this.state = state;
				this.form.update(this.state);
				console.timeEnd('update');
			}
		};

		this.root.sync = () => {
			this.sync();
		};

		this.root.update = () => {
			this.update();
		};

		this.on('mount', this.sync);
		this.on('update', this.sync);
	</script>
</pragma>
