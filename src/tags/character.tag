<character>
	<general general="{ character.general }"></general>
	<abilities abilities="{ character.abilities }"></abilities>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';

		this.character = this.opts.character;

		this.on('mount', function () {

		});
	</script>
</character>
