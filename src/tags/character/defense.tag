<defense>
	<fieldset>
		<legend>Defense</legend>
		<p>
			<label>
				<span>HP</span>
				<input type="number" name="hitPoints.total" min="0" max="1000" step="1" value="{ defense.hitPoints.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="hitPoints.current" min="-15" max="{ defense.hitPoints.total }" step="1" value="{ defense.hitPoints.current }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="hitPoints.nonLethalDamage" min="0" max="100" value="{ defense.hitPoints.nonLethalDamage }"/>
		</p>

		<p>
			<label>
				<span>AC</span>
				<input type="number" name="armorClass.total" min="0" max="100" step="1" value="{ defense.armorClass.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="armorClass.armorBonus" min="0" max="100" step="1" value="{ defense.armorClass.armorBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.shieldBonus" min="0" max="100" step="1" value="{ defense.armorClass.shieldBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.dexModifier" min="0" max="100" step="1" value="{ abilities[abilityMaps.defense.armorClass].modifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			<input type="number" name="armorClass.sizeModifier" min="0" max="100" step="1" value="{ defense.armorClass.sizeModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.naturalArmor" min="0" max="100" step="1" value="{ defense.armorClass.naturalArmor }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.deflection" min="0" max="100" step="1" value="{ defense.armorClass.deflection }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.miscModifier" min="0" max="100" step="1" value="{ defense.armorClass.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.tempModifier" min="0" max="100" step="1" value="{ defense.armorClass.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>


		</p>

		<p each="{ save, name in defense.saves }">
			{ void(this.ability = abilities[abilityMaps.defense.saves[name]]) }

			<label>
				<span>{ name }</span>
				<input type="number" name="{ 'defense.saves.' + name + '.total' }" min="0" max="100" value="{ save.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="{ 'defense.saves.' + name + '.base' }" min="0" max="100" step="1" value="{ save.base }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.abilityModifier' }" min="0" max="100" step="1" value="{ ability.tempModifier || ability.modifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.magicModifier' }" min="0" max="100" step="1" value="{ save.magicModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.miscModifier' }" min="0" max="100" step="1" value="{ save.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.tempModifier' }" min="0" max="100" step="1" value="{ save.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>
	</fieldset>

	<script>
		import clamp from 'lodash/clamp';
		import set from 'lodash/set';
		import { abilityMaps } from '../../data';

		this.min = Math.min;

		this.abilityMaps = abilityMaps;
		this.abilities = this.opts.abilities;
		this.defense = this.opts.defense;

		this.edit = function (event) {
			let input = event.target;

			input.value = input.value !== '' ? clamp(input.value, input.min, input.max) : '';

			set(this.defense, input.name, input.value);

			this.triggerDom('change');
		};

		this.on('update', function () {
			this.defense = this.opts.defense;
		});
	</script>
</defense>
