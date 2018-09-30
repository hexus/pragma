import assign from 'lodash/assign';
import get from 'lodash/get';
import set from 'lodash/set';
import each from 'lodash/each';
import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import { propagationMap } from '../data';

/**
 * A character sheet processor.
 *
 * Processes sheets through a character model.
 */
export default class CharacterSheetProcessor
{
	/**
	 * Create a new character sheet processor.
	 */
	constructor()
	{
	
	}
	
	getPropagationMap(sheet)
	{
		// Merge the base propagation map with the character sheet's map
		let map = merge(propagationMap, sheet.propagationMap || {});
		
		// TODO: Build dynamic propagations from bonuses
		
		return map;
	}
	
	/**
	 * Propagate values through a character sheet.
	 *
	 * @param {CharacterSheet} sheet - The character sheet data
	 */
	propagate(sheet)
	{
		let propagationMap = this.getPropagationMap(sheet);
		
		// TODO: Implement fully, using a map
		set(sheet, 'defense.ac.abilityModifier', get(sheet, 'abilities.dex.modifier'));
		set(sheet, 'defense.saves.fortitude.abilityModifier', get(sheet, 'abilities.con.modifier'));
		set(sheet, 'defense.saves.reflex.abilityModifier', get(sheet, 'abilities.dex.modifier'));
		set(sheet, 'defense.saves.will.abilityModifier', get(sheet, 'abilities.wis.modifier'));
	}
	
	/**
	 * Process the given character sheet data through a character model.
	 *
	 * @param {Character}      character - The character model
	 * @param {CharacterSheet} sheet     - The character sheet data
	 */
	process(character, sheet)
	{
		// Propagate the sheet data
		this.propagate(sheet);
		
		// Update the character
		this.update(character, sheet);
		
		// Apply new sheet data
		merge(sheet, this.extract(character));
	}
	
	/**
	 * Update a character model from the given sheet data.
	 *
	 * @param {Character} character - The character model
	 * @param {Object}    sheet     - The sheet data
	 */
	update(character, sheet)
	{
		// General
		assign(character.general, sheet.general);
		
		// Abilities
		each(character.abilities, (ability, name) => {
			ability.score = get(sheet, `abilities.${name}.score`);
			ability.temp = get(sheet, `abilities.${name}.temp`);
		});
	}
	
	/**
	 * Extract sheet data from a character model.
	 *
	 * @param {Character} character
	 */
	extract(character)
	{
		let sheet = {
			abilities: {},
		};
		
		// Abilities
		each(character.abilities, (ability, name) => {
			sheet.abilities[name] = {};
			sheet.abilities[name].score = ability.score;
			sheet.abilities[name].modifier = ability.modifier;
			sheet.abilities[name].temp = ability.temp;
			sheet.abilities[name].tempModifier = ability.tempModifier;
		});
		
		return sheet;
	}
}

/**
 * Character sheet data structure.
 *
 * @typedef {Object} CharacterSheet
 *
 * // TODO: Rename general to background?
 * @property {Object} general                  - General character statistics
 * @property {string} general.name             - Character name
 * @property {string} [general.alignment]      - Character alignment
 * @property {number} [general.age]            - Character age, in years
 * @property {string} [general.gender]         - Character gender
 * @property {string} [general.height]         - Character standing height
 * @property {string} [general.weight]         - Character weight
 * @property {string} [general.hair]           - Character hair color
 * @property {string} [general.eyes]           - Character eye color
 * @property {string} [general.home]           - Character homeland
 *
 * @property {string} race                     - Character race
 * @property {string} class                    - Character class
 *
 * @property {CharacterSheet.AbilityScore[]} abilities - Character ability scores
 * @property {CharacterSheet.AbilityScore}   str       - Strength ability score
 * @property {CharacterSheet.AbilityScore}   dex       - Dexterity ability score
 * @property {CharacterSheet.AbilityScore}   con       - Constitution ability score
 * @property {CharacterSheet.AbilityScore}   int       - Intelligence ability score
 * @property {CharacterSheet.AbilityScore}   wis       - Wisdom ability score
 * @property {CharacterSheet.AbilityScore}   cha       - Charisma ability score
 *
 * @property {Object} defense                            - Defense statistics
 * @property {Object} defense.hitPoints                  - Hit points
 * @property {number} defense.hitPoints.total            - Total available hit points
 * @property {number} defense.hitPoints.current          - Current hit points
 * @property {number} defense.hitPoints.nonLethalDamage  - Non-lethal damage points
 * @property {Object} defense.armorClass                 - Armor class
 * @property {number} defense.armorClass.total           - Total armor class
 * @property {number} defense.armorClass.touch           - Touch armor class
 * @property {number} defense.armorClass.flatFooted      - Flat-footed armor class
 * @property {number} defense.armorClass.armorBonus      - Armor bonus to armor class
 * @property {number} defense.armorClass.shieldBonus     - Shield bonus to armor class
 * @property {number} defense.armorClass.abilityModifier - Ability modifier added to armor class (dexterity)
 * @property {number} defense.armorClass.sizeModifier    - Size modifier added to armor class
 * @property {number} defense.armorClass.naturalArmor    - Natural armor added to armor class
 * @property {number} defense.armorClass.deflection      - Deflection armor class
 * @property {number} defense.armorClass.miscModifier    - Miscellaneous armor class modifier
 * @property {number} defense.armorClass.tempModifier    - Temporary armor class modifier
 * @property {number} defense.damageReduction            - Damage reduction
 * @property {number} defense.spellResistance            - Spell resistance
 * @property {SavingThrow[]} defense.saves               - Saving throws
 * @property {SavingThrow}   defense.saves.fortitude     - Fortitude saving throw
 * @property {SavingThrow}   defense.saves.reflex        - Reflex saving throw
 * @property {SavingThrow}   defense.saves.will          - Will saving throw
 * @property {Object} defense.resistances                - Damage resistances
 * @property {number} [defense.resistances.cold]         - Cold resistance
 * @property {number} [defense.resistances.fire]         - Fire resistance
 * @property {number} [defense.resistances.electricity]  - Electricity resistance
 * @property {number} [defense.resistances.sonic]        - Sonic resistance
 * @property {number} [defense.resistances.acid]         - Acid resistance
 * @property {Object} defense.combatManeuverDefense                 - Combat maneuver defense
 * @property {number} defense.combatManeuverDefense.total           - Total combat maneuver defense
 * @property {number} defense.combatManeuverDefense.baseAttackBonus - Combat maneuver defense base attack bonus
 * @property {number} defense.combatManeuverDefense.strModifier     - Combat maneuver defense strength modifier
 * @property {number} defense.combatManeuverDefense.dexModifier     - Combat maneuver defense dexterity modifier
 * @property {number} defense.combatManeuverDefense.sizeModifier    - Combat maneuver defense size modifier
 * @property {number} defense.combatManeuverDefense.miscModifier    - Miscellaneous combat maneuver defense modifier
 * @property {number} defense.combatManeuverDefense.tempModifier    - Temporary combat maneuver defense modifier
 *
 * @property {Object} offense                                     - Offense statistics
 * @property {Object} offense.initiative                          - Initiative score
 * @property {number} offense.initiative.abilityModifier          - Initiative ability modifier (dexterity)
 * @property {number} offense.initiative.miscModifier             - Miscellaneous initiative modifier
 * @property {number} offense.baseAttackBonus                     - Base attack bonus
 * @property {Object} offense.speed                               - Movement speeds
 * @property {string} offense.speed.land                          - Speed on foot
 * @property {string} offense.speed.withArmor                     - Speed with armor
 * @property {string} offense.speed.fly                           - Airborne speed
 * @property {string} offense.speed.swim                          - Swimming speed
 * @property {string} offense.speed.climb                         - Climbing speed
 * @property {string} offense.speed.burrow                        - Burrowing speed
 * @property {Object} offense.combatManeuverBonus                 - Combat maneuver bonus
 * @property {number} offense.combatManeuverBonus.total           - Total combat maneuver bonus
 * @property {number} offense.combatManeuverBonus.baseAttackBonus - Base attack bonus applied to combat maneuver bonus
 * @property {number} offense.combatManeuverBonus.abilityModifier - Combat maneuver bonus ability modifier (strength)
 * @property {number} offense.combatManeuverBonus.sizeModifier    - Combat maneuver bonus size modifier
 * @property {number} offense.combatManeuverBonus.miscModifier    - Miscellaneous combat maneuver bonus modifier
 * @property {number} offense.combatManeuverBonus.tempModifier    - Temporary combat maneuver bonus modifier
 */

/**
 * Character sheet ability score data structure
 *
 * @typedef {Object} CharacterSheet.AbilityScore
 *
 * @property {number} score          - Ability score
 * @property {number} modifier       - Ability modifier
 * @property {number} [temp]         - Temporary ability score
 * @property {number} [tempModifier] - Temporary ability score modifier
 */

/**
 * Character sheet saving throw data structure.
 *
 * @typedef {Object} CharacterSheet.SavingThrow
 *
 * @property {number} total           - Total saving throw
 * @property {number} base            - Base save
 * @property {number} abilityModifier - Ability modifier added to saving throw
 * @property {number} [magicModifier] - Magic saving throw modifier
 * @property {number} [miscModifier]  - Miscellaneous saving throw modifier
 * @property {number} [tempModifier]  - Temporary saving throw modifier
 */
