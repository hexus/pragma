import { sizes } from '../data';

/**
 * A character size.
 */
export default class Size
{
	/**
	 * Create a new character size.
	 *
	 * Valid types:
	 *  - 'fine'
	 *  - 'diminutive'
	 *  - 'tiny'
	 *  - 'small'
	 *  - 'medium'
	 *  - 'large'
	 *  - 'huge'
	 *  - 'gargantuan'
	 *  - 'colossal'
	 *
	 * @param {string} [type='medium'] - Size type.
	 */
	constructor(type)
	{
		this._type = null;
		this.type = type;
	}
	
	/**
	 * Get the type of this character size.
	 *
	 * @returns {string}
	 */
	get type()
	{
		return sizes[this._type] ? type : 'medium';
	}
	
	/**
	 * Set the type of this character size.
	 *
	 * @param {string} type
	 */
	set type(type)
	{
		this._type = sizes[type] ? type : 'medium';
	}
	
	/**
	 * Get the size data for this character size.
	 *
	 * Its properties are aliased by helper methods on this class.
	 *
	 * @returns {number}
	 */
	get size()
	{
		return sizes[this.type];
	}
	
	/**
	 * Get the modifier of this character size.
	 *
	 * @returns {number}
	 */
	get modifier()
	{
		return this.size.modifier;
	}
	
	/**
	 * Get the special modifier of this character size.
	 *
	 * @returns {number}
	 */
	get specialModifier()
	{
		return this.size.specialModifier;
	}
	
	/**
	 * Get the fly modifier of this character size.
	 *
	 * @returns {number}
	 */
	get flyModifier()
	{
		return this.size.flyModifier;
	}
	
	/**
	 * Get the stealth modifier of this character size.
	 *
	 * @returns {number}
	 */
	get stealthModifier()
	{
		return this.size.stealthModifier;
	}
	
	/**
	 * Get the space this character size occupies in feet.
	 *
	 * @returns {number}
	 */
	get space()
	{
		return this.size.space;
	}
	
	/**
	 * Get the reach of this character size in feet.
	 *
	 * @returns {number}
	 */
	get reach()
	{
		return this.size.reach;
	}
}
