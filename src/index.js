import riot from 'riot';

import './tags/pragma.tag';

let state = {
	currentCharacter: 1,
	store: {
		characters: {
			1: {
				general: {
					name: 'Shade',
					race: 'Tiefling',
					class: 'Sorcerer',
					gender: 'Male',
					age: 27,
					height: "5'9\"",
					hair: 'Black',
					eyes: 'Black'
				}
			},
			2: {
				general: {
					name: 'Zyra',
					race: 'Catfolk',
					class: 'Mindblade'
				}
			}
		}
	}
};

let tags = riot.mount('pragma', state);
