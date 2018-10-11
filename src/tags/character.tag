<character>
	<general general="{ character.general }"></general>
	<size type="{ character.size.type }"></size>
	<!-- TODO: Classes -->
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }"></abilities>
	<defense defense="{ character.defense }" strict="{ opts.strict }"></defense>
	<offense offense="{ character.offense }" strict="{ opts.strict}"></offense>
	<!-- TODO: Skills -->

	<script>
		import './character/general.tag';
		import './character/size.tag';
		import './character/abilities.tag';
		import './character/defense.tag';
		import './character/offense.tag';

		this.character = this.opts.character;

		this.on('update', function () {
			this.character = this.opts.character;
		});
	</script>
</character>
