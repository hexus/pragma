import riot from 'riot';
import './tags/pragma.tag';

import database from './database';

let state = {
	currentCharacter: null,
	store: {
		characters: {
			1: {
				general: {
					name: 'Shade',
					age: 27,
					gender: 'Male',
					height: "5'9\"",
					weight: '10st',
					hair: 'Black',
					eyes: 'Black',
					home: 'Enaevia'
				},
				race: 'Tiefling',
				class: 'Sorcerer',
				abilities: {
					str: 8,
					dex: 12,
					con: 12,
					int: 12,
					wis: 14,
					cha: 17
				}
			},
			2: {
				general: {
					name: 'Zyra',
					age: 22,
					gender: 'Female',
					height: "5'6\"",
					weight: "9st7lb",
					hair: 'Black',
					eyes: 'Black',
					home: 'Ilun'
				},
				race: 'Catfolk',
				class: 'Mindblade',
				abilities: {
					str: 14,
					dex: 12,
					con: 13,
					int: 16,
					wis: 10,
					cha: 10
				}
			}
		}
	}
};

state.currentCharacter = state.store.characters[1];

let app = {
	events: riot.observable(),
	database: database,
	state: state
};

riot.mount('pragma', {
	app: app
});
