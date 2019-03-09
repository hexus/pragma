<picker>
	<select ref="input"></select>

	<button if="target()" type="button" onclick="{ add }" disabled="{ !value }">
		Add
	</button>

	<script>
		import get from 'lodash/get';
		import set from 'lodash/set';
		import defaultTo from 'lodash/defaultTo';
		import domEvent from '../../mixins/domEvent';
		import Choices from 'choices.js';
		//import 'choices.js/public/assets/styles/choices.css'; // TODO: Make this work
		import Papa from 'papaparse';

		this.mixin(domEvent);

		let tag = this;

		/**
		 * Currently selected value.
		 *
		 * @type {*}
		 */
		this.value = null;

		/**
		 * Choices input element.
		 *
		 * @type {Object}
		 */
		this.choices = null;

		this.source = function () {
			return get(this.opts.property, 'options.source');
		};

		this.options = function () {
			return get(this.opts.property, 'options.options', {});
		};

		this.static = function () {
			return get(this.opts.property, 'options.static', false);
		};

		this.target = function () {
			return get(this.opts.property, 'options.target');
		};

		function parseOptions(data) {
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

		function updateOptions(data) {
			return new Promise((resolve) => {
				// Update the field's options
				set(tag.opts.property, 'options.options', data);

				// Update the Choices instance options
				tag.choices.setChoices(
					data,
					tag.getItemValueKey(),
					tag.getItemLabelKey()
				);

				resolve(data);
			});
		}

		this.loadOptions = function () {
			if (this.source()) {
				return fetch(this.source())
					.then(response => response.text())
					.then(parseOptions)
					.then(updateOptions)
					.catch((error) => {
						console.error(`Error loading data for field '${this.opts.property.path}'`, error);
					});
			}

			// TODO: Promisify this
			//return this.options();
			throw new Error('Inline options are not yet supported');
		};

		this.updateValue = function (value) {
			console.log(this.choices);

			// Linear search for the given value
			let i;
			let options = this.options();
			let keys = Object.keys(options);
			let item;

			console.log(options);

			for (i = 0; i < keys.length; i++) {
				item = options[keys[i]];

				if (this.getItemValue(item, keys[i]) === value) {
					this.value = item;

					return;
				}
			}

			this.value = null;
		};

		this.getItemValueKey = function () {
			return get(this.opts.property, 'options.key');
		};

		this.getItemLabelKey = function () {
			return get(this.opts.property, 'options.label');
		};

		this.getItemValue = function (item, key) {
			// Use the configured value key, falling back to the item key
			let valueKey = this.getItemValueKey();

			return valueKey ? get(item, valueKey) : key;
		};

		this.getItemLabel = function (item, key) {
			let labelKey = this.getItemLabelKey();

			return labelKey ? get(item, labelKey) : null;
		};

		this.input = function (event) {
			if (!this.static() && this.source()) {
				// Load data on input if it isn't static
				this.loadOptions().then(() => {
					this.updateValue(event.target.value);
				});
			} else {
				// Update immediately if data is static
				this.updateValue(event.target.value);
			}
		};

		this.add = function () {
			// Only fire an event for a valid selection and target
			if (!this.value || !this.target()) {
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

		this.on('mount', function () {
			// Set up the select
			this.choices = new Choices(this.refs.input, {
				renderChoiceLimit: 50,
				searchResultLimit: 50
			});

			this.refs.input.addEventListener('addItem', function (event) {
				// Update the selected value
				tag.updateValue(event.detail.value);

				// Update the tag
				tag.update();
			});

			// Load data upfront if configured
			this.static() && this.loadOptions().then(() => this.update());
		});
	</script>
</picker>
