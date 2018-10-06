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
			}
		};

		// DOM handlers
		this.onStrictChange = function (event) {
			this.sheet.strict = event.currentTarget.value;
			this.process();
		};

		this.onCharacterEdit = function (event) {
			console.log(event);
			set(state.sheet, event.detail.name, event.detail.value);
			set(this.sheet, event.detail.name, event.detail.value);

			// TODO: Timeout for updating store.sheet with state.sheet
		};

		// Event handlers
		this.on('mount', function () {
			this.process();
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
