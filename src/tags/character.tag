<character>
	<general general="{ character.general }"></general>
	<abilities abilities="{ character.abilities }" strict="{ strict }"></abilities>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';

		this.character = this.opts.character;
		this.strict = this.opts.strict;

		this.on('mount', function () {

		});
	</script>
</character>
