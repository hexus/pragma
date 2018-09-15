export default {
	characters: {
		1: {
			strict: true,
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
			strict: true,
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
				str: {
					score: 14
				},
				dex: {
					score: 12
				},
				con: {
					score: 13
				},
				int: {
					score: 16
				},
				wis: {
					score: 10
				},
				cha: {
					score: 10
				}
			}
		}
	}
};
