<character>
	<general general="{ character.general }"></general>
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }"></abilities>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';

		this.character = this.opts.character;

		this.on('mount', function () {

		});
	</script>
</character>