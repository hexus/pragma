import assign from 'lodash/assign';
import get from 'lodash/get';
import each from 'lodash/each';
import merge from 'lodash/merge';

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
		this.abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
	}
	
	/**
	 * Process the given sheet data through a character model.
	 *
	 * TODO: Typedef for sheet.
	 *
	 * @param {Character} character - The character model
	 * @param {Object}    sheet     - The sheet data
	 */
	process(character, sheet)
	{
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
