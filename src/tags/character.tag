<character>
	<general general="{ character.general }"></general>
	<abilities abilities="{ character.abilities }" strict="{ opts.strict }" onchange="{ change }"></abilities>

	<script>
		import './character/general.tag';
		import './character/abilities.tag';

		this.character = this.opts.character;

		this.change = function () {
			this.triggerDom('change');
		};

		this.on('mount', function () {

		});
	</script>
</character>
