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
				<input type="radio" name="processing" checked="{ !sheet.processing }" value="" onchange="{ onProcessingChange }"/>
				Permissive <!-- Free editing -->
			</label>

			<label>
				<input type="radio" name="processing" checked="{ sheet.processing === 'propagated' }" value="propagated" onchange="{ onProcessingChange }"/>
				Propagated <!-- Value propagation -->
			</label>

			<label>
				<input type="radio" name="processing" checked="{ sheet.processing === 'processed' }" value="processed" onchange="{ onProcessingChange }"/>
				Processed <!-- Derive, model and compute ALL the things -->
			</label>
		</fieldset>

		<character character="{ sheet }" strict="{ sheet.processing }" onedit="{ onCharacterEdit }"></character>
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

			if (this.sheet.processing === 'processed') {
				processor.process(character, this.sheet);
			} else if (this.sheet.strict === 'propagated') {
				processor.propagate(this.sheet);
			}
		};

		// DOM handlers

		/**
		 * Update the processing mode of the sheet and reprocess it.
		 *
		 * @param {CustomEvent} event
		 */
		this.onProcessingChange = function (event) {
			state.sheet.processing = event.currentTarget.value;
			this.sheet.processing = event.currentTarget.value;

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

			let { name, value } = event.detail;

			// TODO: Cast on dispatch, include rawValue property

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
