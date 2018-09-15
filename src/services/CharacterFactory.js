import Character from "../model/Character";
import General from "../model/General";
import Abilities from "../model/Abilities";

/**
 * A Character factory.
 */
export default class CharacterFactory
{
	/**
	 * Create a new Character.
	 *
	 * @returns {Character}
	 */
	create()
	{
		return new Character(
			new General(),
			new Abilities()
		);
	}
}
