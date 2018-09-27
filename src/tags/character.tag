<character>
	<general general="{ character.general }"></general>
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }" onchange="{ change }"></abilities>
	<defense defense="{ character.defense }"  strict="{ opts.strict }" onchange="{ change }"></defense>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';
		import './character/defense.tag';

		this.character = this.opts.character;

		this.change = function () {
			this.triggerDom('change');
		};

		this.on('update', function () {
			this.character = this.opts.character;
		});
	</script>
</character>
