<pragma>
	<h1>Pragma</h1>

	<character character="{ store.characters[state.currentCharacter] }"></character>

	<p>Test name: { store.characters[state.currentCharacter].general.name }</p>

	<script>
		import './character.tag';

		console.log(this);

		this.state = this.opts.app.state;
		this.store = this.state.store;

		//setInterval(this.update, 1000);

		this.on('mount', function () {
			console.log('pragma mount args', arguments);
		});

		this.on('unmount', function () {

		});
	</script>
</pragma>
