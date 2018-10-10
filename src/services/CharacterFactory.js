import Character from "../model/Character";
import General from "../model/General";
import Size from '../model/Size';
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
	 * @param {string} [name] - The character's name.
	 * @returns {Character}
	 */
	create(name)
	{
		let size, abilities;
		
		return new Character(
			new General(name || 'Character'),
			size = new Size(),
			abilities = new Abilities(10, 10, 10, 10, 10, 10),
			new Defense(
				new HitPoints(),
				new ArmorClass(
					abilities.dex, size, 0, 0, 0, 0, 0, 0
				),
				new SavingThrows(abilities, 0, 0, 0),
				null,
				new CombatManeuverDefense(0, abilities.str, abilities.dex, size, 0, 0)
			),
			null,
			null
		);
	}
}
