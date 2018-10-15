<abilities>
	<fieldset>
		<legend>Abilities</legend>

		<table>
			<tr each="{ ability, name in abilities }">
				<th>
					<span>{ util.upperCase(name) }</span>
				</th>
				<td>
					<input type="number" name="{ name + '.score' }" min="0" max="60" step="1" value="{ ability.score }" onkeyup="{ edit }" onchange="{ edit }" />
				</td>
				<td>
					<input type="number" name="{ name + '.modifier' }" min="-5" max="25" step="1" value="{ ability.modifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }" />
				</td>
				<td>
					<input type="number" name="{ name + '.temp' }" min="0" max="60" step="1" value="{ ability.temp }" onkeyup="{ edit }" onchange="{ edit }" />
				</td>
				<td>
					<input type="number" name="{ name + '.tempModifier' }" min="-5" max="25" step="1" value="{ ability.tempModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }" />
				</td>
			</tr>
		</table>
	</fieldset>

	<script>
		// <input type="number" value="{ expression }"/> fails to compile in a webpack production bundle;
		// can't use one with an expression value attribute while using default minification

		import util from '../../mixins/util';
		import get from 'lodash/get';
		import set from 'lodash/set';

		this.mixin(util);

		this.prefix = this.opts.prefix || 'abilities.';
		this.abilities = this.opts.abilities;

		this.edit = function (event) {
			// Grab the input element
			let input = event.target;

			// Skip unchanged values
			if (get(this.abilities, input.name) === input.value)
				return;

			// Sanitize the new value
			input.value = this.util.clamp(input.value, input.min, input.max);

			// Update the current state
			set(this.abilities, input.name, input.value);

			// Dispatch an edit event
			this.triggerDom('edit', {
				input: input,
				name: this.prefix + input.name,
				value: input.value
			});
		};

		this.on('update', function () {
			this.opts.prefix || 'abilities.';
			this.abilities = this.opts.abilities;
		});
	</script>
</abilities>
