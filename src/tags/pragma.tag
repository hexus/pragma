<pragma>
	<h1>Pragma</h1>

	<input type="button" value="Force Update" onmouseup="{ () => {} }"/>

	<virtual if="{ !sheet }">
		<!-- Character List -->
	</virtual>

	<virtual if="{ sheet }">
		<h2>Character Sheet</h2>
		<label>
			<input type="checkbox" name="strict" onchange="{ onStrictChange }"/> Strict
		</label>

		<character character="{ sheet }" strict="{ strict }" onchange="{ () => {} }"></character>

		{ sheet.abilities.cha.score }
	</virtual>

	<script>
		import './character.tag';

		// Variables and properties
		let app = this.opts.app;

		let state = app.state;
		let store = app.store;

		let factory = app.services.factory;
		let processor = app.services.processor;

		let character = state.character || factory.create();

		this.sheet = state.sheet;
		this.strict = false;

		// Methods
		this.process = function () {
			if (this.strict) {
				processor.process(character, this.sheet);
			}
		};

		// DOM handlers
		this.onStrictChange = function (event) {
			this.strict = event.currentTarget.checked;
			this.process();
		};

		// Event handlers
		this.on('update', function () {
			this.process();
		});

		this.on('mount', function () {
			this.process();
		});

		this.on('unmount', function () {
			this.state = null;
			this.store = null;
			this.character = null;
			this.sheet = null;
			this.strict = null;
			this.change = null;
		});
	</script>
</pragma>
