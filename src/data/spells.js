import raw from './spells-raw.json';
// @see {@link https://api.sheety.co/07f58b33-42c4-475f-b6a0-bc4ce72adba3}

//const raw = [];
const emptyValues = [null, 'NULL', 0];
const spells = {};

for (let i = 0; i < raw.length; i++) {
	let spell = raw[i];
	
	for (let j in spell) {
		let value = spell[j];
		
		if (emptyValues.indexOf(value) >= 0) {
			delete spell[j];
		}
	}
	
	spells[spell.name] = spell;
}

export default spells;
