/**
 * A character's hit points (HP).
 */
export default class HitPoints
{
	/**
	 * Create a new character hit points score.
	 *
	 * @param {int} [base]
	 * @param {int} [tempModifier]
	 * @param {int} [current]
	 * @param {int} [nonLethalDamage
	 */
	constructor(base, tempModifier, current, nonLethalDamage)
	{
		this.base = base || 6;
		this.tempModifier = tempModifier || 0;
		this._current = 0;
		this.current = current || (base + tempModifier);
		this.nonLethalDamage = nonLethalDamage || 0;
	}
	
	get total()
	{
		return this.base + this.tempModifier;
	}
	
	get current()
	{
		return this._current;
	}
	
	set current(value)
	{
		this._current = Math.min(value, this.total);
	}
}
