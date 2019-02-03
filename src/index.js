import riot from 'riot';
import './tags/character-sheet.tag';
import store from './store';

document.addEventListener('DOMContentLoaded', function () {
	riot.mount('*');
	
	let characterSheet = document.getElementById('characterSheet');
	characterSheet.state = store.characters[1];
	characterSheet.update();
	
	let textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function (textField) {
		return new mdc.textField.MDCTextField(textField);
	});
	
	let selectFields = [].map.call(document.querySelectorAll('.mdc-select'), function (selectField) {
		return new mdc.select.MDCSelect(selectField);
	});
});
