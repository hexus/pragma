<character>
	<h2>Character</h2>

	<character-general general="{ character.general }"></character-general>

	<script>
		import './character-general.tag';

		console.log('character', this);

		this.character = this.opts.character;

		this.on('mount', function () {
			console.log('character mount args', arguments);
		})
	</script>
</character>
