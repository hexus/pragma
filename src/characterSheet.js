import fields from './data/fields.js';
import store  from './store.js';
import abilityModifier from './model/functions/abilityModifier';

let pragma = document.getElementById('pragma');

pragma.fields = fields;
pragma.state  = store.characters[1];
pragma.functions = {
	abilityModifier
};

pragma._tag.update();
