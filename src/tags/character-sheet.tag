<character-sheet>
	<pragma debug
			functions="{ functions }"
			defaults="{ defaults }"
			fields="{ fields }"
			state="{ state }">
	</pragma>

	<script>
		import './pragma.tag';
		import './input/mdc/mdc-number.tag';
		import './input/mdc/mdc-string.tag';
		import './input/mdc/mdc-selection.tag';

		import fields from '../data/fields';
		import abilityModifier from '../model/functions/abilityModifier';

		this.fields = fields;

		this.functions = {
			abilityModifier
		};

		this.defaults = {
			'number': {
				input: 'mdc-number'
			},
			'string': {
				input: 'mdc-string'
			},
			'selection': {
				input: 'mdc-selection'
			}
		};

		this.sync = function () {
			this.state = this.opts.state || this.root.state || {};
		};

		this.on('mount', this.sync);
		this.on('update', this.sync);

		this.root.update = () => {
			this.update();
		};
	</script>
</character-sheet>
