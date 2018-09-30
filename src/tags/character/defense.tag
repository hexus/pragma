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

			<label>
				<span>Damage reduction</span>
				<input type="number" name="damageReduction" min="0" max="100" step="1" value="{ defense.damageReduction }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>

			<label>
				<span>Spell resistance</span>
				<input type="number" name="spellResistance" min="0" max="100" step="1" value="{ defense.spellResistance }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
		</p>

		<p>
			<label>
				<span>AC</span>
				<input type="number" name="armorClass.total" min="0" max="100" step="1" value="{ defense.armorClass.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="armorClass.armorBonus" min="0" max="100" step="1" value="{ defense.armorClass.armorBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.shieldBonus" min="0" max="100" step="1" value="{ defense.armorClass.shieldBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.abilityModifier" min="0" max="100" step="1" value="{ defense.armorClass.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			<input type="number" name="armorClass.sizeModifier" min="0" max="100" step="1" value="{ defense.armorClass.sizeModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.naturalArmor" min="0" max="100" step="1" value="{ defense.armorClass.naturalArmor }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.deflection" min="0" max="100" step="1" value="{ defense.armorClass.deflection }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.miscModifier" min="0" max="100" step="1" value="{ defense.armorClass.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="armorClass.tempModifier" min="0" max="100" step="1" value="{ defense.armorClass.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>

		<p>
			<label>
				<span>Touch</span>
				<input type="number" name="armorClass.touch" min="0" max="100" step="1" value="{ defense.armorClass.touch }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>

			<label>
				<span>Flat-footed</span>
				<input type="number" name="armorClass.flatFooted" min="0" max="100" step="1" value="{ defense.armorClass.flatFooted }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
		</p>

		<p each="{ save, name in defense.saves }">
			<label>
				<span>{ util.titleCase(name) }</span>
				<input type="number" name="{ 'defense.saves.' + name + '.total' }" min="0" max="100" value="{ save.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			<input type="number" name="{ 'defense.saves.' + name + '.base' }" min="0" max="100" step="1" value="{ save.base }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.abilityModifier' }" min="0" max="100" step="1" value="{ save.abilityModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.magicModifier' }" min="0" max="100" step="1" value="{ save.magicModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.miscModifier' }" min="0" max="100" step="1" value="{ save.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			<input type="number" name="{ 'defense.saves.' + name + '.tempModifier' }" min="0" max="100" step="1" value="{ save.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>

		<!-- TODO: Resistances, immunities -->

		<p>
			<label>
				CMD
				<input type="number" name="combatManeuverDefense.total" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.total }" onkeyup="{ edit }" onchange="{ edit }"/>
			</label>
			+ 10 +
			<input type="number" name="combatManeuverDefense.baseAttackBonus" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.baseAttackBonus }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="combatManeuverDefense.strModifier" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.strModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.dexModifier" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.dexModifier }" onkeyup="{ edit }" onchange="{ edit }" disabled="{ opts.strict }"/>
			+
			<input type="number" name="combatManeuverDefense.miscModifier" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.miscModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
			+
			<input type="number" name="combatManeuverDefense.tempModifier" min="0" max="100" step="1" value="{ defense.combatManeuverDefense.tempModifier }" onkeyup="{ edit }" onchange="{ edit }"/>
		</p>
	</fieldset>

	<script>
		import clamp from 'lodash/clamp';
		import set from 'lodash/set';
		import util from '../../mixins/util';

		this.mixin(util);

		this.min = Math.min;
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
