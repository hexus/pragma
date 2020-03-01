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
				},
				{
					tag: 'pragma-string',
					path: 'test.string',
					label: 'Test string',
					value: 'Shade',
					visible: true
				},
				{
					tag: 'pragma-select',
					path: 'test.select',
					label: 'Test select',
					options: {
						options: {
							one: 'One',
							two: 'Two',
							three: 'Three'
						}
					},
					value: 'two',
					visible: true
				}
			]
		},
		{
			tag: 'pragma-section',
			path: 'lists',
			label: 'Test lists',
			description: 'This is a test section for lists',
			visible: true,
			children: [
				{
					tag: 'pragma-list',
					path: 'lists.list',
					label: 'List',
					description: 'First test list',
					options: {
						showLabel: true
					},
					visible: true,
					rendersChildren: true,
					children: [
						{
							tag: 'pragma-string',
							path: 'lists.list.0',
							value: 'One',
							visible: true
						},
						{
							tag: 'pragma-string',
							path: 'lists.list.1',
							value: 'Two',
							visible: true
						},
						{
							tag: 'pragma-string',
							path: 'lists.list.2',
							value: 'Three',
							visible: true
						}
					]
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
