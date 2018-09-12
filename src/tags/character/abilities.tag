<abilities>
	<fieldset>
		<legend>Abilities</legend>

		<p each="{ score, name in abilities }">
			<label>
				<span>{ upperCase(name) }</span>
				<input type="number" name="{ name }" min="1" max="45" step="1" value="{ score }" onchange="{ edit }" />
			</label>
		</p>
	</fieldset>

	<script>
		// input type=number fails to compile in a webpack production bundle;
		// can't use one with an expression value
		//this.inputType = 'number';

		import toUpper from 'lodash/toUpper';

		this.upperCase = toUpper;

		this.abilities = this.opts.abilities;

		this.edit = function (event) {
			this.abilities[event.target.name] = event.target.value;
		};
	</script>
</abilities>
