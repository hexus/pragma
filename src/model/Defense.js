/**
 * A character's defense statistics.
 */
export default class Defense
{
	/**
	 * Create a new set of character defense statistics.
	 *
	 * @param {HitPoints}             hitPoints
	 * @param {ArmorClass}            armorClass
	 * @param {SavingThrows}          saves
	 * @param {Resistances}           resistances
	 * @param {CombatManeuverDefense} combatManeuverDefense
	 * @param {int}                   [damageReduction]
	 * @param {int}                   [spellResistance]
	 */
	constructor(hitPoints, armorClass, damageReduction, spellResistance, saves, resistances, combatManeuverDefense)
	{
		this.hitPoints = hitPoints;
		this.armorClass = armorClass;
		this.saves = saves;
		this.resistances = resistances;
		this.combatManeuverDefense = combatManeuverDefense;
		this.damageReduction = damageReduction || 0;
		this.spellResistance = spellResistance || 0;
	}
}
