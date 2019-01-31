import fields from './data/fields.js';
import store  from './store.js';
import abilityModifier from './model/functions/abilityModifier';

let pragma = document.getElementById('characterSheet');

pragma.fields = fields;
pragma.state  = store.characters[1];
pragma.functions = {
	abilityModifier
};
pragma.defaultFieldProperties = {
	'number': {
		input: 'mdc-number'
	},
	'string': {
		input: 'mdc-string'
	},
	'selection': {
		input: 'mdc-selection'
	}
};

pragma.sync();

// TODO: Set up MDC webpack config and implement tag-level imports and instantiation
// TODO: Separate MDC pragma tags into their own repo?
let textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function (textField) {
	return new mdc.textField.MDCTextField(textField);
});

let selectFields = [].map.call(document.querySelectorAll('.mdc-select'), function (selectField) {
	return new mdc.select.MDCSelect(selectField);
});
