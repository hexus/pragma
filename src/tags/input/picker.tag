<picker>
	<select ref="input">
		<option if="{ placeholder() }" placeholder value="">
			{ placeholder() }
		</option>
	</select>

	<button if="target()" type="button" onclick="{ add }" disabled="{ !value() }">
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

		this.placeholder = function () {
			let placeholder = get(this.opts.property, 'options.placeholder');

			if (!placeholder) {
				return false;
			}

			return typeof placeholder === 'string' ? placeholder: 'Select an option';
		};

		/**
		 * Get the current value.
		 *
		 * @return {*}
		 */
		this.value = function () {
			return this.opts.property.value;
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

		/**
		 * Get the full option for the given option value.
		 *
		 * @param {string|number} value
		 * @return {*}
		 */
		this.getValueOption = function (value) {
			// Linear search for the given value
			let i;
			let options = this.options();
			let keys = Object.keys(options);
			let option;

			for (i = 0; i < keys.length; i++) {
				option = options[keys[i]];

				if (this.getOptionValue(option, keys[i]) === value) {
					return option;
				}
			}

			return null;
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
			this.triggerDom('add', {
				name:  this.target(),
				value: this.value()
			});

			// TODO: "property.options.clear" check?

			// Clear the value
			//this.choices.setChoiceByValue('');
			this.triggerDom('edit', {
				name: this.opts.property.path,
				value: ''
			});
		};

		this.on('mount', function () {
			let input = this.refs.input;

			// Set up the select
			this.choices = new Choices(input, {
				renderChoiceLimit: 50,
				searchResultLimit: 50
			});

			input.addEventListener('change', function (event) {
				// TODO: Support multiple selections

				// Trigger the edit event
				tag.triggerDom('edit', {
					name:  tag.opts.property.path,
					value: tag.getValueOption(event.detail.value)
				});
			});

			// Load data upfront if configured
			this.static() && this.loadOptions().then(() => this.update());
		});

		this.on('update', function () {
			let option = this.value();

			if (!option) {
				this.choices.setChoiceByValue('');
				return;
			}

			console.log('picker update', option);

			// TODO: Support multiple selections
			this.choices.setChoiceByValue(this.getOptionValue(option));
		});
	</script>
</picker>
