<pragma>
	<h1>Pragma</h1>

	<input type="button" value="Force Update" onmouseup="{ () => {} }"/>

	<virtual if="{ !sheet }">
		<!-- Character List -->
	</virtual>

	<virtual if="{ sheet }">
		<h2>Character Sheet</h2>

		<fieldset>
			<legend>Processing</legend>

			<label>
				<input type="radio" name="strict" checked="{ !sheet.strict }" value="" onchange="{ onStrictChange }"/>
				Permissive <!-- Free text -->
			</label>

			<label>
				<input type="radio" name="strict" checked="{ sheet.strict }" value="simple" onchange="{ onStrictChange }"/>
				Propagated <!-- Modifier propagation -->
			</label>

			<label>
				<input type="radio" name="strict" checked="{ sheet.strict }" value="strict" onchange="{ onStrictChange }"/>
				Processed <!-- Derive all the things -->
			</label>
		</fieldset>

		<character character="{ sheet }" strict="{ sheet.strict }" onedit="{ onCharacterEdit }"></character>
	</virtual>

	<script>
		import './character.tag';
		import clone from 'lodash/cloneDeep';
		import set from 'lodash/set';

		// Application state, services and domain logic
		let app = this.opts.app;

		let state = app.state;
		let store = app.store;

		let factory = app.services.factory;
		let processor = app.services.processor;

		let character = state.character || factory.create();

		this.sheet = clone(state.sheet);

		// Methods
		this.process = function () {
			//this.sheet = clone(state.sheet);

			if (this.sheet.strict) {
				processor.process(character, this.sheet);
			} else {
				processor.propagate(this.sheet);
			}
		};

		// DOM handlers

		/**
		 * Update the processing mode of the sheet and reprocess it.
		 *
		 * @param {CustomEvent} event
		 */
		this.onStrictChange = function (event) {
			this.sheet.strict = event.currentTarget.value;
			this.process();
		};

		/**
		 * Update the state sheet and display sheet when a character sheet
		 * property changes.
		 *
		 * Start a timeout for a store sheet update.
		 *
		 * @param {CustomEvent} event
		 */
		this.onCharacterEdit = function (event) {
			console.log(event);

			let { name, value, input } = event.detail;

			// Cast value based on input type TODO: Cast on dispatch, include rawValue property
			if (input.type === 'number')
				value = parseFloat(value);

			set(state.sheet, name, value);
			set(this.sheet, name, value);

			// TODO: Timeout to update store.sheet with cloned state.sheet
		};

		// Event handlers
		this.on('mount', function () {
			this.update();
		});

		this.on('update', function () {
			this.process();
		});

		this.on('unmount', function () {
			this.state = null;
			this.store = null;
			this.character = null;
			this.sheet = null;
		});
	</script>
</pragma>
