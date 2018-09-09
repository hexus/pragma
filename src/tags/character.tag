<character>
	<h2>Character</h2>

	<character-general general="{ character.general }"></character-general>

	<script>
		import './character-general.tag';

		console.log(this);

		this.character = this.opts.character;
	</script>
</character>
