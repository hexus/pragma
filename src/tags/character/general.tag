<general>
	<fieldset>
		<legend>General</legend>

		<p each="{ value, name in general }">
			<label>
				{ util.titleCase(name) }
				<input type="text" name="{ name }" value="{ value }" onkeyup="{ edit }"/>
			</label>
		</p>
	</fieldset>

	<script>
		import set from 'lodash/set';
		import util from '../../mixins/util';

		this.mixin(util);

		this.prefix = this.opts.prefix || 'general.';
		this.general = this.opts.general;

		this.edit = function (event) {
			// Grab the input
			let input = event.target;

			// Update the current state
			set(this.general, input.name, input.value);

			// Dispatch an edit event
			this.triggerDom('edit', {
				input: input,
				name: this.prefix + input.name,
				value: input.value
			})
		};
	</script>
</general>
