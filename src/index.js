import fields from './data/fields.js';
import store  from './store.js';
import abilityModifier from './model/functions/abilityModifier';

let pragma = document.getElementById('characterSheet');

pragma.fields = fields;
pragma.state  = store.characters[1];
pragma.functions = {
	abilityModifier
};

pragma.sync();
