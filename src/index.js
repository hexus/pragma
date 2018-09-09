import riot from 'riot';

import './tags/pragma.tag';

let state = {
	currentCharacter: 1,
	store: {
		characters: {
			1: {
				name: 'Shade',
				race: 'Tiefling',
				class: 'Sorcerer'
			},
			2: {
				name: 'Zyra',
				race: 'Catfolk',
				class: 'Mindblade'
			}
		}
	}
};

let tags = riot.mount('pragma', state);
