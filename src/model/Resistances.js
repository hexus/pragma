import Score from "./Score";

/**
 * A character's resistances.
 */
export default class Resistances
{
	constructor(cold, fire, electricity, acid)
	{
		this.cold        = new Score(cold || 0);
		this.fire        = new Score(fire || 0);
		this.electricity = new Score(electricity || 0);
		this.acid        = new Score(acid || 0);
	}
}
