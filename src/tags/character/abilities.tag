<abilities>
	<fieldset>
		<legend>Abilities</legend>

		<p each="{ ability, name in abilities }">
			<label>
				<span>{ upperCase(name) }</span>
				<input type="number" name="{ name + '.score' }" min="0" max="60" step="1" value="{ ability.score }" onkeyup="{ edit }" onchange="{ edit }" />
			</label>
			<input type="number" name="{ name + '.modifier' }" min="-5" max="25" step="1" value="{ ability.modifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }" />
			<input type="number" name="{ name + '.temp' }" min="0" max="60" step="1" value="{ ability.temp }" onkeyup="{ edit }" onchange="{ edit }" />
			<input type="number" name="{ name + '.tempModifier' }" min="-5" max="25" step="1" value="{ ability.tempModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }" />
		</p>
	</fieldset>

	<script>
		// input type=number fails to compile in a webpack production bundle;
		// can't use one with an expression value attribute using default minification

		import toUpper from 'lodash/toUpper';
		import set from 'lodash/set';
		import clamp from 'lodash/clamp';

		this.upperCase = toUpper;

		this.abilities = this.opts.abilities;

		this.edit = function (event) {
			let input = event.target;

			input.value = input.value !== '' ? clamp(input.value, input.min, input.max) : '';

			set(this.abilities, input.name, input.value);

			this.triggerDom('change');
		};

		this.on('update', function () {
			this.abilities = this.opts.abilities;
		});
	</script>
</abilities>
