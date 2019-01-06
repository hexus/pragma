export default {
	characters: {
		1: {
			general: {
				name: 'Shade',
				alignment: 'Chaotic Neutral',
				age: 27,
				gender: 'Male',
				height: "5'9\"",
				weight: '10st',
				hair: 'Black',
				eyes: 'Black',
				home: 'Enaevia'
			},
			race: {
				name: 'Tiefling'
			},
			buffs: [],
			classes: [
				{
					name: 'Sorcerer',
					levels: 10
				},
				{
					name: 'Test second class',
					levels: 1
				}
			],
			abilities: {
				str: {
					base: 8,
					miscBonus: 0,
					tempBonus: 0
				},
				dex: {
					base: 12,
					miscBonus: 0,
					tempBonus: 0
				},
				con: {
					score: 12,
					modifier: +1
				},
				int: {
					score: 12,
					modifier: +1
				},
				wis: {
					score: 14,
					modifier: +2
				},
				cha: {
					score: 17,
					modifier: +3,
					base: 17,
					miscBonus: +4,
					tempBonus: +0 // +2 for spellcasting...
				}
			},
			defense: {
				hitPoints: {
					total: 52,
					base: 52,
					tempModifier: 0,
					current: 52,
					nonLethalDamage: 0
				},
				armorClass: {
					total: 20,
					touch: 11,
					flatFooted: 15,
					// TODO: Move the below into defense.bonuses?
					armorBonus: 3,
					shieldBonus: 2,
					abilityModifier: +1, // Dex
					sizeModifier: 0,
					naturalArmor: 0,
					deflectionModifier: 0,
					miscModifier: 0,
					tempModifier: 4,
				},
				damageReduction: 0,
				spellResistance: 0,
				saves: {
					fortitude: {
						total: 4,
						base: 3,
						abilityModifier: +1, // Con
						magicModifier: 0,
						miscModifier: 0,
						tempModifier: 0
					},
					reflex: {
						total: 6,
						base: 3,
						abilityModifier: +1, // Dex
						magicModifier: 0,
						miscModifier: +2,
						tempModifier: 0
					},
					will: {
						total: 7,
						base: 5,
						abilityModifier: +2, // Wis
						magicModifier: 0,
						miscModifier: 0,
						tempModifier: 0
					}
				},
				resistances: {
					cold: {
						total: 5,
						base: 5,
						miscModifier: 0,
						tempModifier: 0
					},
					fire: {
						total: 5,
						base: 5,
						miscModifier: 5,
						tempModifier: 5
					},
					electricity: {
						total: 25,
						base: 5,
						miscModifier: 20,
						tempModifier: 0
					},
					acid: {
						total: 0,
						base: 0,
						miscModifier: 0,
						tempModifier: 0
					}
				},
				combatManeuverDefense: {
					total: 14,
					baseAttackBonus: 4,
					strModifier: -1,
					dexModifier: +1,
					sizeModifier: 0,
					miscModifier: 0,
					tempModifier: 0
				}
			},
			offense: {
				initiative: {
					total: 5,
					abilityModifier: +1, // Dex
					miscModifier: +4
				},
				baseAttackBonus: 4,
				speed: {
					land: '5ft',
					withArmor: 'N/A',
					fly: '',
					swim: '',
					climb: '',
					burrow: ''
				},
				combatManeuverBonus: {
					total: 3,
					baseAttackBonus: 4,
					abilityModifier: -1, // Str
					sizeModifier: 0,
					miscModifier: 0,
					tempModifier: 0
				}
			},
			skills: {
				list: {
					bluff: {
						classSkill: true,
						ranks: 3,
						racialBonus: 2
					}
				}
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
