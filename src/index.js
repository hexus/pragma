import riot from 'riot';
import './tags/pragma.tag';

import data from './data';

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
					str: {
						score: 8,
						modifier: -1
					},
					dex: {
						score: 12,
						modifier: 1
					},
					con: {
						score: 12,
						modifier: 1
					},
					int: {
						score: 12,
						modifier: 1
					},
					wis: {
						score: 14,
						modifier: 2
					},
					cha: {
						score: 17,
						modifier: 3,
						temp: 21,
						tempModifier: 5
					}
				},
				bonuses: {
					abilities: [
					
					]
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
	data: data,
	state: state
};

app.tags = riot.mount('pragma', {
	app: app
});

export default app;
