<pragma>
	<h1>Pragma</h1>

	<character character="{ opts.store.characters[opts.currentCharacter] }"></character>

	<p>Test name: { opts.store.characters[opts.currentCharacter].general.name }</p>

	<script>
		import './character.tag';

		console.log(this);

		//setInterval(this.update, 1000);

		this.on('mount', function () {

		});

		this.on('unmount', function () {

		});
	</script>
</pragma>
