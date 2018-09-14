<abilities>
	<fieldset>
		<legend>Abilities</legend>

		<p each="{ ability, name in abilities }">
			<label>
				<span>{ upperCase(name) }</span>

				<input type="number" name="{ name + '.score' }" min="1" max="45" step="1" value="{ ability.score }" onkeyup="{ edit }" onchange="{ edit }" />
			</label>
			<input type="number" name="{ name + '.modifier' }" min="-5" max="17" step="1" value="{ ability.modifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ strict }" />
			<input type="number" name="{ name + '.temp' }" min="1" max="45" step="1" value="{ ability.temp }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ strict }" />
			<input type="number" name="{ name + '.tempModifier' }" min="-5" max="17" step="1" value="{ ability.tempModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ strict }" />
		</p>

		{ abilities.cha.score } { abilities.cha.modifier } { abilities.cha.temp } { abilities.cha.tempModifier }
	</fieldset>

	<script>
		// input type=number fails to compile in a webpack production bundle;
		// can't use one with an expression value
		//this.inputType = 'number';

		import toUpper from 'lodash/toUpper';
		import set from 'lodash/set';

		this.upperCase = toUpper;

		this.abilities = this.opts.abilities;
		this.strict = this.opts.strict !== undefined;

		this.edit = function (event) {
			let ability = event.target;
			event.target.value = Math.min(ability.max);

			set(this.abilities, event.target.name, event.target.value);
		};
	</script>
</abilities>
