<picker>
	<input ref="input" list="picker-{_riot_id}-list" oninput="{ input }">

	<datalist id="picker-{_riot_id}-list">
		<option each="{ item, key in data() }" value="{ getItemValue(item, key) }"></option>
	</datalist>

	<button type="button" onclick="{ add }" disabled="{ !value }">
		Add
	</button>

	<script>
		import get from 'lodash/get';
		import set from 'lodash/set';
		import defaultTo from 'lodash/defaultTo';
		import domEvent from '../../mixins/domEvent';
		import Papa from 'papaparse';

		this.mixin(domEvent);

		console.log(this);

		let tag = this;

		this.value = null;

		this.source = function () {
			return get(this.opts.property, 'options.source');
		};

		this.data = function () {
			return get(this.opts.property, 'options.data', {});
		};

		this.static = function () {
			return get(this.opts.property, 'options.static', false);
		};

		function parseData(data) {
			return new Promise((resolve) => {
				resolve(
					Papa.parse(data, {
						delimiter:     ',',
						header:        true,
						dynamicTyping: true
					}).data
				);
			});
		}

		function updateData(data) {
			return new Promise((resolve) => {
				resolve(
					set(tag.opts.property, 'options.data', data)
				);
			});
		}

		this.loadData = function () {
			return fetch(this.source())
				.then(response => response.text())
				.then(parseData)
				.then(updateData)
				.catch((error) => {
					console.error(`Error loading data for field '${this.opts.property.path}'`, error);
				});
		};

		this.updateValue = function (value) {
			// Linear search for the given value, validating that it's in the data
			// TODO: Use a good autocomplete library, native won't cut it
			let i;
			let data = this.data();
			let keys = Object.keys(data);
			let item;

			for (i = 0; i < keys.length; i++) {
				item = data[keys[i]];

				if (this.getItemValue(item, keys[i]) === value) {
					this.value = item;

					return;
				}
			}

			this.value = null;
		};

		this.getItemValue = function (item, key) {
			// Use the configured value key, falling back to the item key
			let valueKey = get(this.opts.property, 'options.key');

			return valueKey ? get(item, valueKey) : key;
		};

		this.input = function (event) {
			if (!this.static() && this.source()) {
				// Load data on input if it isn't static
				this.loadData().then(() => {
					this.updateValue(event.target.value);
				});
			} else {
				// Update immediately if data is static
				this.updateValue(event.target.value);
			}
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

			// Clear the value
			this.value = null;
			this.refs.input.value = null;
		};

		// Load data upfront if configured
		this.on('mount', function () {
			this.static() && this.loadData().then(() => this.update());
		});
	</script>
</picker>
