<old>
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

			<!--<label>-->
				<!--<input type="radio" name="processing" checked="{ sheet.processing === 'propagated' }" value="propagated" onchange="{ onProcessingChange }"/>-->
				<!--Propagated &lt;!&ndash; Value propagation &ndash;&gt;-->
			<!--</label>-->

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

		// Application
		let app = this.opts.app;

		// State
		let state = app.state;
		let store = app.store;

		// Services
		let factory = app.services.factory;
		let processor = app.services.processor;

		// Domain model
		let character = state.character || factory.create();

		// Methods
		this.process = function () {
			this.sheet = clone(state.sheet);

			if (this.sheet.processing === 'processed') {
				processor.process(character, this.sheet);
			} else if (this.sheet.processing === 'propagated') {
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

			// TODO: Cast on dispatch, include rawValue property, clean this up!
			if (input.type === 'number') {
				value = !isNaN(parseFloat(value)) ? parseFloat(value) : value;
			}

			set(state.sheet, name, value);
			set(this.sheet, name, value);

			// TODO: Timeout to update store.sheet with cloned state.sheet
		};

		// Observables
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
</old>
