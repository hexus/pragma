<picker>
	<input ref="input" list="picker-{_riot_id}-list" oninput="{ input }">

	<datalist id="picker-{_riot_id}-list">
		<option each="{ item, key in data() }" value="{ key }"></option>
	</datalist>

	<button type="button" onclick="{ add }">
		Add
	</button>

	<script>
		import get from 'lodash/get';
		import defaultTo from 'lodash/defaultTo';
		import edit from '../../mixins/edit';
		import domEvent from '../../mixins/domEvent';

		this.mixin(edit);
		this.mixin(domEvent);

		console.log(this);

		// TODO: Implement sourcing data via ajax

		this.data = {};

		this.value = null;

		this.data = function () {
			return get(this.opts.property, 'options.data', {});
		};

		this.input = function (event) {
			if (!this.data()[event.target.value]) {
				this.value = null;
				return;
			}

			this.value = this.data()[event.target.value];
		};

		this.add = function () {
			// Only fire an event for a valid selection
			if (!this.value) {
				return;
			}

			// Fire the event
			let target = defaultTo(
				get(this.opts.property, 'options.target'),
				this.opts.property.path
			);

			this.triggerDom('add', {
				name:  target,
				value: this.value
			});

			// Clear the query input
			this.refs.input.value = null;
		};
	</script>
</picker>
