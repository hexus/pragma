<pragma>
	<h1>Pragma</h1>

	<input type="button" value="Force Update" onmouseup="{ () => {} }"/>

	<virtual if="{ !state.currentCharacter }">
		<!-- Character List -->
	</virtual>

	<virtual if="{ state.currentCharacter }">
		<h2>Character Sheet</h2>
		<label>
			<input type="checkbox" name="strict" onchange="{ change }"/> Strict
		</label>
		<character character="{ state.currentCharacter }" strict="{ strict }"></character>

		{ state.currentCharacter.abilities.cha.score }
	</virtual>

	<script>
		import './character.tag';

		this.state = this.opts.app.state;
		this.store = this.state.store;
		this.strict = false;

		this.change = function (event) {
			this.strict = event.currentTarget.checked;
		};

		this.on('mount', function () {

		});

		this.on('unmount', function () {
			this.state = null;
			this.store = null;
			this.strict = null;
			this.change = null;
		});
	</script>
</pragma>
