import assign from 'lodash/assign';
import get from 'lodash/get';
import set from 'lodash/set';
import each from 'lodash/each';
import merge from 'lodash/merge';

const propagationMap = {};

/**
 * A character sheet processor.
 *
 * Processes sheets through a character model.
 *
 * TODO: Propagate > Summate > Interpolate
 */
export default class CharacterSheetProcessor
{
	/**
	 * Create a new character sheet processor.
	 */
	constructor()
	{
	
	}
	
	/**
	 * Build a propagation map from any bonuses that affect propagations.
	 *
	 * @param {CharacterSheet} sheet
	 * @returns {Object}
	 */
	buildBonusPropagationMap(sheet)
	{
		// TODO: Build dynamic propagations from bonuses, when bonuses are a thing
		
		return {};
	}
	
	/**
	 * Get the propagation map for character sheet values.
	 *
	 * Keyed by target property path, where values are a single or multiple
	 * source property paths.
	 *
	 * Defines how values are propagated through a character sheet.
	 *
	 * Propagations can be overridden by the sheet's propagationMap property.
	 *
	 * @param {CharacterSheet} sheet
	 * @return {Object} TODO: Simple typedef?
	 */
	getPropagationMap(sheet)
	{
		// Merge the base map, character sheet map and bonuses map
		return merge(propagationMap, sheet.propagationMap, this.buildBonusPropagationMap(sheet));
	}
	
	/**
	 * Propagate values through a character sheet.
	 *
	 * @param {CharacterSheet} sheet - The character sheet data
	 */
	propagate(sheet)
	{
		let target, source;
		let propagationMap = this.getPropagationMap(sheet);
		
		// TODO: Clean up
		for (target in propagationMap) {
			source = propagationMap[target];
			
			// String values are a simple copy
			if (typeof source === 'string') {
				set(sheet, target, get(sheet, source));
				continue;
			}
			
			// With arrays, we load each value consecutively, checking whether
			// they actually are values and using the last that we find
			if (Array.isArray(source) && source.length > 0) {
				let i;
				let value = null;
				let nextValue = null;
				
				for (i = 0; i < source.length; i++) {
					nextValue = get(sheet, source[i]);
					
					// Use the next value found if it's actually a value (if it's not ugly)
					if (nextValue !== undefined && nextValue !== null && !isNaN(nextValue)) {
						value = nextValue;
					}
				}
				
				set(sheet, target, value);
			}
		}
	}
	
	/**
	 * Process the given character sheet data through a character model.
	 *
	 * @param {Character}      character - The character model
	 * @param {CharacterSheet} sheet     - The character sheet data
	 * @return {CharacterSheet}
	 */
	process(character, sheet)
	{
		// Propagate the sheet data
		this.propagate(sheet);
		
		// Update the character
		this.update(character, sheet);
		
		// Apply new sheet data
		merge(sheet, this.extract(character));
		
		// Propagate the sheet data again for convenience while developing;
		// allows us to see propagated values without them being modelled
		// TODO: Remove this when modelling is complete
		this.propagate(sheet);
		
		return sheet;
	}
	
	/**
	 * Update a character model from the given sheet data.
	 *
	 * TODO: It would be AWESOME if these could become a straight up list for get/set.
	 *
	 * @param {Character}      character - The character model to update.
	 * @param {CharacterSheet} sheet     - The sheet data to update from.
	 */
	update(character, sheet)
	{
		sheet = this.prepareSheet(sheet);
		
		// General
		assign(character.general, sheet.general);
		
		// Size
		character.size.type = sheet.size.type;
		
		// Abilities
		each(character.abilities, (ability, name) => {
			ability.score = get(sheet, `abilities.${name}.score`);
			ability.temp  = get(sheet, `abilities.${name}.temp`);
		});
		
		// Defense
		character.defense.hitPoints.base         = sheet.defense.hitPoints.base;
		character.defense.hitPoints.tempModifier = sheet.defense.hitPoints.tempModifier;
		character.defense.hitPoints.current      = sheet.defense.hitPoints.current;
		
		character.defense.armorClass.armorBonus         = sheet.defense.armorClass.armorBonus;
		character.defense.armorClass.shieldBonus        = sheet.defense.armorClass.shieldBonus;
		character.defense.armorClass.naturalArmor       = sheet.defense.armorClass.naturalArmor;
		character.defense.armorClass.deflectionModifier = sheet.defense.armorClass.deflectionModifier;
		character.defense.armorClass.miscModifier       = sheet.defense.armorClass.miscModifier;
		character.defense.armorClass.tempModifier       = sheet.defense.armorClass.tempModifier;
		
		each(character.defense.saves, (save, name) => {
			save.base          = get(sheet, `defense.saves.${name}.base`);
			save.magicModifier = get(sheet, `defense.saves.${name}.magicModifier`);
			save.miscModifier  = get(sheet, `defense.saves.${name}.miscModifier`);
			save.tempModifier  = get(sheet, `defense.saves.${name}.tempModifier`);
		});
		
		character.defense.combatManeuverDefense.baseAttackBonus = sheet.offense.baseAttackBonus;
		character.defense.combatManeuverDefense.miscModifier    = sheet.defense.combatManeuverDefense.miscModifier;
		character.defense.combatManeuverDefense.tempModifier    = sheet.defense.combatManeuverDefense.tempModifier;
	}
	
	/**
	 * Extract sheet data from a character model.
	 *
	 * TODO: It would be AWESOME if these could become a straight up list for get/set.
	 *
	 * @param {Character}      character - The character model to extract from.
	 * @param {CharacterSheet} [sheet]   - Optional sheet data to extract to.
	 */
	extract(character, sheet)
	{
		sheet = this.prepareSheet(sheet);
		
		/**
		 * @type {CharacterSheet} sheet
		 */
		
		// Size
		sheet.size.type            = character.size.type;
		sheet.size.modifier        = character.size.modifier;
		sheet.size.specialModifier = character.size.specialModifier;
		sheet.size.flyModifier     = character.size.flyModifier;
		sheet.size.stealthModifier = character.size.stealthModifier;
		sheet.size.space           = character.size.space;
		sheet.size.reach           = character.size.reach;
		
		// Abilities
		each(character.abilities, (ability, name) => {
			sheet.abilities[name]              = sheet.abilities[name] || {};
			sheet.abilities[name].score        = ability.score;
			sheet.abilities[name].modifier     = ability.modifier;
			sheet.abilities[name].temp         = ability.temp;
			sheet.abilities[name].tempModifier = ability.tempModifier;
		});
		
		// Defense
		sheet.defense.hitPoints.total        = character.defense.hitPoints.total;
		sheet.defense.hitPoints.base         = character.defense.hitPoints.base;
		sheet.defense.hitPoints.tempModifier = character.defense.hitPoints.tempModifier;
		sheet.defense.hitPoints.current      = character.defense.hitPoints.current;
		
		sheet.defense.armorClass.total              = character.defense.armorClass.total;
		sheet.defense.armorClass.touch              = character.defense.armorClass.touch;
		sheet.defense.armorClass.flatFooted         = character.defense.armorClass.flatFooted;
		sheet.defense.armorClass.armorBonus         = character.defense.armorClass.armorBonus;
		sheet.defense.armorClass.shieldBonus        = character.defense.armorClass.shieldBonus;
		sheet.defense.armorClass.abilityModifier    = character.defense.armorClass.abilityModifier;
		sheet.defense.armorClass.sizeModifier       = character.defense.armorClass.sizeModifier;
		sheet.defense.armorClass.naturalArmor       = character.defense.armorClass.naturalArmor;
		sheet.defense.armorClass.deflectionModifier = character.defense.armorClass.deflectionModifier;
		sheet.defense.armorClass.miscModifier       = character.defense.armorClass.miscModifier;
		sheet.defense.armorClass.tempModifier       = character.defense.armorClass.tempModifier;
		
		each(character.defense.saves, (save, name) => {
			sheet.defense.saves[name]                 = sheet.defense.saves[name] || {};
			sheet.defense.saves[name].total           = save.total;
			sheet.defense.saves[name].base            = save.base;
			sheet.defense.saves[name].abilityModifier = save.abilityModifier;
			sheet.defense.saves[name].miscModifier    = save.miscModifier;
			sheet.defense.saves[name].tempModifier    = save.tempModifier;
		});
		
		sheet.defense.combatManeuverDefense.total           = character.defense.combatManeuverDefense.total;
		sheet.defense.combatManeuverDefense.baseAttackBonus = character.defense.combatManeuverDefense.baseAttackBonus;
		sheet.defense.combatManeuverDefense.strModifier     = character.defense.combatManeuverDefense.strModifier;
		sheet.defense.combatManeuverDefense.dexModifier     = character.defense.combatManeuverDefense.dexModifier;
		sheet.defense.combatManeuverDefense.sizeModifier    = character.defense.combatManeuverDefense.sizeModifier;
		sheet.defense.combatManeuverDefense.miscModifier    = character.defense.combatManeuverDefense.miscModifier;
		sheet.defense.combatManeuverDefense.tempModifier    = character.defense.combatManeuverDefense.tempModifier;
		
		return sheet;
	}
	
	/**
	 * Populate a sheet object with any missing properties and data.
	 *
	 * Generates a new character sheet structure if no sheet is provided.
	 *
	 * Ensures that the appropriate properties are set up for conveniently
	 * extracting sheet data from a character model.
	 *
	 * In effect, a character sheet without any leaf nodes.
	 *
	 * @param {CharacterSheet} [sheet] - The sheet to populate.
	 * @return {CharacterSheet}
	 */
	prepareSheet(sheet)
	{
		// Tasty merge sandwich
		return merge(sheet, {
			general: {},
			size: {},
			abilities: {},
			defense: {
				hitPoints: {},
				armorClass: {},
				saves: {},
				combatManeuverDefense: {}
			}
		}, sheet);
	}
}

/**
 * Character sheet data structure.
 *
 * // TODO: Rename general to background, profile or basics?
 *
 * @typedef {Object} CharacterSheet
 *
 * @property {Object} general              - General character statistics
 * @property {string} general.name         - Character name
 * @property {string} [general.alignment]  - Character alignment
 * @property {number} [general.age]        - Character age, in years
 * @property {string} [general.gender]     - Character gender
 * @property {string} [general.height]     - Character standing height
 * @property {string} [general.weight]     - Character weight
 * @property {string} [general.hair]       - Character hair color
 * @property {string} [general.eyes]       - Character eye color
 * @property {string} [general.home]       - Character homeland
 *
 * @property {Object} size                 - Character size
 * @property {string} size.type            - Size type
 * @property {number} size.modifier        - Size modifier
 * @property {number} size.specialModifier - Special size modifier
 * @property {number} size.flyModifier     - Fly skill modifier
 * @property {number} size.stealthModifier - Stealth skill modifier
 * @property {number} size.space           - Space occupied in feet
 * @property {number} size.reach           - Natural reach distance in feet
 *
 * @property {string} race                 - Character race
 * @property {string} class                - Character class
 *
 * @property {CharacterSheet.AbilityScore[]} abilities      - Character ability scores
 * @property {CharacterSheet.AbilityScore}   abilities.str  - Strength ability score
 * @property {CharacterSheet.AbilityScore}   abilities.dex  - Dexterity ability score
 * @property {CharacterSheet.AbilityScore}   abilities.con  - Constitution ability score
 * @property {CharacterSheet.AbilityScore}   abilities.int  - Intelligence ability score
 * @property {CharacterSheet.AbilityScore}   abilities.wis  - Wisdom ability score
 * @property {CharacterSheet.AbilityScore}   abilities.cha  - Charisma ability score
 *
 * @property {Object} defense                               - Defense statistics
 * @property {Object} defense.hitPoints                     - Hit points
 * @property {number} defense.hitPoints.total               - Total available hit points
 * @property {number} defense.hitPoints.base                - Base available hit points
 * @property {number} [defense.hitPoints.tempModifier]      - Temporary total hit points modifier
 * @property {number} defense.hitPoints.current             - Current hit points
 * @property {number} defense.hitPoints.nonLethalDamage     - Non-lethal damage points
 * @property {Object} defense.armorClass                    - Armor class
 * @property {number} defense.armorClass.total              - Total armor class
 * @property {number} defense.armorClass.touch              - Touch armor class
 * @property {number} defense.armorClass.flatFooted         - Flat-footed armor class
 * @property {number} defense.armorClass.armorBonus         - Armor bonus to armor class
 * @property {number} defense.armorClass.shieldBonus        - Shield bonus to armor class
 * @property {number} defense.armorClass.abilityModifier    - Ability modifier added to armor class (dexterity)
 * @property {number} defense.armorClass.sizeModifier       - Size modifier added to armor class
 * @property {number} defense.armorClass.naturalArmor       - Natural armor added to armor class
 * @property {number} defense.armorClass.deflectionModifier - Deflection armor class
 * @property {number} defense.armorClass.miscModifier       - Miscellaneous armor class modifier
 * @property {number} defense.armorClass.tempModifier       - Temporary armor class modifier
 * @property {number} defense.damageReduction               - Damage reduction
 * @property {number} defense.spellResistance               - Spell resistance
 * @property {SavingThrow[]} defense.saves                  - Saving throws
 * @property {SavingThrow}   defense.saves.fortitude        - Fortitude saving throw
 * @property {SavingThrow}   defense.saves.reflex           - Reflex saving throw
 * @property {SavingThrow}   defense.saves.will             - Will saving throw
 * @property {Object} defense.resistances                   - Damage resistances
 * @property {number} [defense.resistances.cold]            - Cold resistance
 * @property {number} [defense.resistances.fire]            - Fire resistance
 * @property {number} [defense.resistances.electricity]     - Electricity resistance
 * @property {number} [defense.resistances.sonic]           - Sonic resistance
 * @property {number} [defense.resistances.acid]            - Acid resistance
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
 *
 * @property {Object} propagationMap                              - Propagation overrides
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
