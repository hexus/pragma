import riot from 'riot';
import './tags/character-sheet.tag';
import store from './store';

document.addEventListener('DOMContentLoaded', function () {
	riot.mount('*');
	
	let characterSheet = document.getElementById('characterSheet');
	characterSheet.state = store.characters[1];
	characterSheet.update();
});
