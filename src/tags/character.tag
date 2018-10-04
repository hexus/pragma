<character>
	<general general="{ character.general }"></general>
	<!-- TODO: Classes -->
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }" onedit="{ edit }"></abilities>
	<defense defense="{ character.defense }"  strict="{ opts.strict }" onedit="{ edit }"></defense>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';
		import './character/defense.tag';

		this.prefix = 'character.';
		this.character = this.opts.character;

		this.edit = function (event) {
			// Prefix the character sheet property name for parent listeners
			event.detail.name = this.prefix + event.detail.name;
		};

		this.on('update', function () {
			this.character = this.opts.character;
		});
	</script>
</character>
