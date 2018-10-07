<offense>
	<fieldset>
		<legend>Offense</legend>
		<p>
			<label>
				<span>Initiative</span>
				<input type="number" name="initiative.total" min="-100" max="100" step="1" value="{ offense.initiative.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="initiative.abilityModifier" min="-60" max="60" step="1" value="{ offense.initiative.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			<input type="number" name="initiative.miscModifier" min="-100" max="100" value="{ offense.initiative.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>

		<p>
			<label>
				<span>BAB</span>
				<input type="number" name="baseAttackBonus" min="-100" max="100" step="1" value="{ offense.baseAttackBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
		</p>

		<p>
			<label>
				CMB
				<input type="number" name="combatManeuverBonus.total" min="0" max="100" step="1" value="{ offense.combatManeuverBonus.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			=
			<input type="number" name="combatManeuverBonus.baseAttackBonus" min="-100" max="100" step="1" value="{ offense.combatManeuverBonus.baseAttackBonus }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverBonus.abilityModifier" min="-60" max="60" step="1" value="{ offense.combatManeuverBonus.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverBonus.sizeModifier" min="0" max="100" step="1" value="{ offense.combatManeuverBonus.sizeModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverBonus.miscModifier" min="0" max="100" step="1" value="{ offense.combatManeuverBonus.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="combatManeuverBonus.tempModifier" min="0" max="100" step="1" value="{ offense.combatManeuverBonus.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>
	</fieldset>

	<script>
		import get from 'lodash/get';
		import set from 'lodash/set';
		import util from '../../mixins/util';

		this.mixin(util);

		this.prefix = this.opts.prefix || 'offense.';
		this.offense = this.opts.offense;

		this.edit = function (event) {
			// Grab the input element
			let input = event.target;

			// Skip unchanged values
			if (get(this.abilities, input.name) === input.value)
				return;

			// Sanitize the value
			input.value = this.util.clamp(input.value, input.min, input.max);

			// Update the current state
			set(this.offense, input.name, input.value);

			// Dispatch an edit event
			this.triggerDom('edit', {
				input: input,
				name: this.prefix + input.name,
				value: input.value
			});
		};

		this.on('update', function () {
			this.prefix = this.opts.prefix || 'offense.';
			this.offense = this.opts.offense;
		});
	</script>
</offense>
