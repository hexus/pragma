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
		 * TODO: Drop this and use opts.property.value instead
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
					tag.getOptionValuePath(),
					tag.getOptionLabelKey()
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
			// Linear search for the given value
			let i;
			let options = this.options();
			let keys = Object.keys(options);
			let option;

			for (i = 0; i < keys.length; i++) {
				option = options[keys[i]];

				if (this.getOptionValue(option, keys[i]) === value) {
					this.value = option;

					return;
				}
			}

			this.value = null;
		};

		this.getOptionValuePath = function () {
			return get(this.opts.property, 'options.key');
		};

		this.getOptionLabelKey = function () {
			return get(this.opts.property, 'options.label');
		};

		/**
		 * Get the value of the given option.
		 *
		 * @param {*}             option - The option.
		 * @param {string|number} [key]  - The key of the option.
		 * @returns {string|number}
		 */
		this.getOptionValue = function (option, key) {
			// Use the configured value key, falling back to the option key
			let valueKey = this.getOptionValuePath();

			return valueKey ? get(option, valueKey) : key;
		};

		/**
		 * Get the label of the given option.
		 *
		 * @param {*} option - The option.
		 * @returns {string}
		 */
		this.getOptionLabel = function (option) {
			let labelKey = this.getOptionLabelKey();

			return labelKey ? get(option, labelKey) : null;
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
			this.updateValue(null);
			this.choices.setValue(null);
		};

		this.on('mount', function () {
			let input = this.refs.input;

			// Set up the select
			this.choices = new Choices(input, {
				renderChoiceLimit: 50,
				searchResultLimit: 50
			});

			input.addEventListener('addItem', function (event) {
				// TODO: Support multiple selections

				// Update the selected value
				// TODO: Remove this
				tag.updateValue(event.detail.value);

				// Trigger the edit event
				tag.triggerDom('edit', {
					name:  tag.opts.property.path,
					value: event.detail.value
				});
			});

			// Load data upfront if configured
			this.static() && this.loadOptions().then(() => this.update());
		});

		this.on('update', function () {
			let option = this.opts.property.value;

			// TODO: Support multiple selections
			this.choices.setValue([
				{
					label: this.getOptionLabel(option),
					value: this.getOptionValue(option)
				}
			]);
		});
	</script>
</picker>
