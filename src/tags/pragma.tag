<pragma>
	<h1>Pragma</h1>

	<virtual if="{ !state.currentCharacter }">
		<!-- Character List -->
	</virtual>

	<virtual if="{ state.currentCharacter }">
		<h2>Character Sheet</h2>
		<character character="{ state.currentCharacter }"></character>
	</virtual>

	<script>
		import './character.tag';

		this.state = this.opts.app.state;
		this.store = this.state.store;

		this.on('mount', function () {

		});

		this.on('unmount', function () {

		});
	</script>
</pragma>
