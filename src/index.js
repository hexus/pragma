// Stencil
import { defineCustomElements, applyPolyfills } from "../pragma/loader";

applyPolyfills().then(() => {
	return defineCustomElements(window);
});

document.addEventListener('DOMContentLoaded', function () {
	let tree = document.getElementById('tree');

	// Baby demo tree
	tree.fields = [
		{
			tag: 'pragma-section',
			path: 'test',
			label: 'Test section',
			description: 'This is a test section',
			visible: true,
			children: [
				{
					tag: 'pragma-number',
					path: 'test.number',
					label: 'Test number',
					value: 72,
					visible: true
				}
			]
		}
	];
});

// Riot
import riot  from 'riot';
import './tags/character-sheet.tag';
import store from './store';

document.addEventListener('DOMContentLoaded', function () {
	riot.mount('*');
	
	let characterSheet   = document.getElementById('characterSheet');
	characterSheet.state = store.characters[1];
	characterSheet.update();
});
