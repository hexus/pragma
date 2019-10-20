import riot  from 'riot';
import './tags/character-sheet.tag';
import store from './store';

import { defineCustomElements, applyPolyfills } from "../pragma/loader";

defineCustomElements(window).then(() => {
	applyPolyfills();
});

document.addEventListener('DOMContentLoaded', function () {
	riot.mount('*');
	
	let characterSheet   = document.getElementById('characterSheet');
	characterSheet.state = store.characters[1];
	characterSheet.update();
});
