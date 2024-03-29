<defense>
	<fieldset>
		<legend>Defense</legend>
		<p>
			<label>
				<span>HP</span>
				<input type="number" name="hitPoints.current" min="-15" max="{ defense.hitPoints.total }" step="1" value="{ defense.hitPoints.current }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			/
			<input type="number" name="hitPoints.total" min="1" max="1000" step="1" value="{ defense.hitPoints.total }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			=
			<input type="number" name="hitPoints.base" min="1" max="1000" step="1" value="{ defense.hitPoints.base }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="hitPoints.tempModifier" min="-100" max="100" step="1" value="{ defense.hitPoints.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>

			<input type="number" name="hitPoints.nonLethalDamage" min="0" max="100" value="{ defense.hitPoints.nonLethalDamage }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>

		<p>
			<label>
				<span>Damage reduction</span>
				<input type="number" name="damageReduction" min="-100" max="100" step="1" value="{ defense.damageReduction }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>

			<label>
				<span>Spell resistance</span>
				<input type="number" name="spellResistance" min="-100" max="100" step="1" value="{ defense.spellResistance }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
		</p>

		<p>
			<label>
				<span>AC</span>
				<input type="number" name="armorClass.total" min="-100" max="100" step="1" value="{ defense.armorClass.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			= 10 +
			<input type="number" name="armorClass.armorBonus" min="-100" max="100" step="1" value="{ defense.armorClass.armorBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="armorClass.shieldBonus" min="-100" max="100" step="1" value="{ defense.armorClass.shieldBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="armorClass.abilityModifier" min="-60" max="60" step="1" value="{ defense.armorClass.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="armorClass.sizeModifier" min="-100" max="100" step="1" value="{ defense.armorClass.sizeModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="armorClass.naturalArmor" min="-100" max="100" step="1" value="{ defense.armorClass.naturalArmor }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="armorClass.deflectionModifier" min="-100" max="100" step="1" value="{ defense.armorClass.deflectionModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="armorClass.miscModifier" min="-100" max="100" step="1" value="{ defense.armorClass.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="armorClass.tempModifier" min="-100" max="100" step="1" value="{ defense.armorClass.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>

		<p>
			<label>
				<span>Touch</span>
				<input type="number" name="armorClass.touch" min="-100" max="100" step="1" value="{ defense.armorClass.touch }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>

			<label>
				<span>Flat-footed</span>
				<input type="number" name="armorClass.flatFooted" min="-100" max="100" step="1" value="{ defense.armorClass.flatFooted }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
		</p>

		<fieldset>
			<legend>Saving throws</legend>

			<table>
				<tr each="{ save, name in defense.saves }">
					<th>
						<span>{ util.sentenceCase(name) }</span>
					</th>
					<td>
						<input type="number" name="{ 'saves.' + name + '.total' }" min="0" max="100" value="{ save.total }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						= <input type="number" name="{ 'saves.' + name + '.base' }" min="-100" max="100" step="1" value="{ save.base }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'saves.' + name + '.abilityModifier' }" min="-60" max="60" step="1" value="{ save.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'saves.' + name + '.magicModifier' }" min="-100" max="100" step="1" value="{ save.magicModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'saves.' + name + '.miscModifier' }" min="-100" max="100" step="1" value="{ save.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'saves.' + name + '.tempModifier' }" min="-100" max="100" step="1" value="{ save.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
				</tr>
			</table>
		</fieldset>

		<fieldset>
			<legend>Resistances</legend>
			<table if="{ defense.resistances }">
				<tr each="{ resistance, name in defense.resistances }">
					<th>
						<span>{ util.sentenceCase(name) }</span>
					</th>
					<td>
						<input type="number" name="{ 'resistances.' + name + '.total'}" min="0" max="100" step="1" value="{ resistance.total }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						= <input type="number" name="{ 'resistances.' + name + '.base'}" min="-100" max="100" step="1" value="{ resistance.base }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'resistances.' + name + '.miscModifier'}" min="-100" max="100" step="1" value="{ resistance.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
					<td>
						+ <input type="number" name="{ 'resistances.' + name + '.tempModifier'}" min="-100" max="100" step="1" value="{ resistance.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
					</td>
				</tr>
			</table>
		</fieldset>

		<!-- TODO: Immunities & vulnerabilities -->

		<p>
			<label>
				CMD
				<input type="number" name="combatManeuverDefense.total" min="-100" max="100" step="1" value="{ defense.combatManeuverDefense.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			= 10 +
			<input type="number" name="combatManeuverDefense.baseAttackBonus" min="-100" max="100" step="1" value="{ defense.combatManeuverDefense.baseAttackBonus }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.strModifier" min="-60" max="60" step="1" value="{ defense.combatManeuverDefense.strModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.dexModifier" min="-60" max="60" step="1" value="{ defense.combatManeuverDefense.dexModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.sizeModifier" min="-100" max="100" step="1" value="{ defense.combatManeuverDefense.sizeModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.miscModifier" min="-100" max="100" step="1" value="{ defense.combatManeuverDefense.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="combatManeuverDefense.tempModifier" min="-100" max="100" step="1" value="{ defense.combatManeuverDefense.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>
	</fieldset>

	<script>
		import get from 'lodash/get';
		import set from 'lodash/set';
		import util from '../../mixins/util';

		this.mixin(util);

		this.min = Math.min;

		this.prefix = this.opts.prefix || 'defense.';
		this.defense = this.opts.defense;

		this.edit = function (event) {
			// Grab the input element
			let input = event.target;

			// Skip unchanged values
			if (get(this.abilities, input.name) === input.value)
				return;

			// Sanitize the value
			input.value = this.util.clamp(input.value, input.min, input.max);

			// Update the current state
			set(this.defense, input.name, input.value);

			// Dispatch an edit event
			this.triggerDom('edit', {
				input: input,
				name: this.prefix + input.name,
				value: input.value
			});
		};

		this.on('update', function () {
			this.prefix = this.opts.prefix || 'defense.';
			this.defense = this.opts.defense;
		});
	</script>
</defense>
