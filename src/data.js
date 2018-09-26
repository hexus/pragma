//import Class from './domain/Class';

const data = {
	classes: {
	
	},
	skills: {
	
	},
	spells: {
	
	},
	// Default ability modifiers for different properties
	abilityMaps: {
		defense: {
			armorClass: 'dex',
			cmd: ['str', 'dex'],
			saves: {
				fortitude: 'con',
				reflex: 'dex',
				will: 'wis'
			},
		},
		offense: {
			cmb: 'str',
			initiative: 'dex'
		}
	}
};

export default data;

export const classes = data.classes;
export const skills = data.skills;
export const spells = data.spells;
export const abilityMaps = data.abilityMaps;
