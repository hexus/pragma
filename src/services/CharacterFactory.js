import Character from "../model/Character";
import General from "../model/General";
import Abilities from "../model/Abilities";
import Defense from '../model/Defense';
import HitPoints from '../model/HitPoints';
import ArmorClass from '../model/ArmorClass';
import SavingThrows from '../model/SavingThrows';
import CombatManeuverDefense from "../model/CombatManeuverDefense";

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
		let abilities;
		
		return new Character(
			new General('Character'),
			abilities = new Abilities(10, 10, 10, 10, 10, 10),
			new Defense(
				new HitPoints(),
				new ArmorClass(
					0, 0, abilities.dex, 0, 0, 0, 0, 0
				),
				new SavingThrows(abilities, 0, 0, 0),
				null,
				new CombatManeuverDefense(0, abilities.str, abilities.dex, 0, 0, 0)
			)
		);
	}
}
