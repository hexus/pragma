<character>
	<general general="{ character.general }"></general>
	<!-- TODO: Classes -->
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }"></abilities>
	<defense defense="{ character.defense }"  strict="{ opts.strict }"></defense>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';
		import './character/defense.tag';

		this.character = this.opts.character;

		this.on('update', function () {
			this.character = this.opts.character;
		});
	</script>
</character>
