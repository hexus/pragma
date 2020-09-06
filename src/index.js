// Stencil
import { defineCustomElements, applyPolyfills } from "../pragma/loader";

applyPolyfills().then(() => {
	return defineCustomElements(window);
});

document.addEventListener('DOMContentLoaded', function () {
	// Baby demo tree
	let form = document.getElementById('form');

	form.fields = [
		{
			tag: 'pragma-number',
			type: 'number',
			path: 'number',
			options: {
				max: 1000000
			}
		},
		{
			tag: 'pragma-section',
			type: 'section',
			path: 'test',
			label: 'Test section'
		},
		{
			tag: 'pragma-number',
			type: 'number',
			path: 'test.number'
		},
		{
			tag: 'pragma-string',
			type: 'string',
			path: 'test.string'
		},
		{
			tag: 'pragma-select',
			type: 'select',
			path: 'test.select',
			label: 'Selecty boi',
			options: {
				options: {
					one: 'One',
					two: 'Two',
					three: 'Three'
				}
			}
		},
		{
			tag: 'pragma-select',
			type: 'select',
			path: 'test.select2',
			label: 'Selecty boi',
			options: {
				options: {
					1: 'One',
					2: 'Two',
					3: 'Three'
				}
			}
		},
		{
			tag: 'pragma-section',
			type: 'section',
			path: 'lists',
			label: 'Test lists',
			description: 'This is a test section for lists'
		},
		{
			tag: 'pragma-list',
			path: 'lists.list',
			label: 'List',
			description: 'First test list',
			options: {
				showLabel: true
			},
		},
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
		},
		{
			tag: 'pragma-table',
			path: 'lists.table',
			label: 'Table',
			description: 'First table test',
			options: {
				showLabel: true,
				headings: [
					'Label',
					'First column',
					'Second column'
				]
			}
		},
		{
			tag: 'pragma-group',
			path: 'lists.table.0',
			label: 'First row'
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.0.0',
			value: 'One'
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.0.1',
			value: 'Two'
		},
		{
			tag: 'pragma-group',
			path: 'lists.table.1',
			label: 'Second row'
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.1.0',
			value: 'Three'
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.1.1',
			value: 'Four'
		},
		{
			tag: 'pragma-group',
			path: 'lists.table.2',
			label: 'Third row',
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.2.0',
			value: 'Five'
		},
		{
			tag: 'pragma-string',
			path: 'lists.table.2.1',
			value: 'Six'
		},
		{
			tag: 'pragma-section',
			path: 'other',
			label: 'Test other components',
		},
		{
			tag: 'pragma-picker',
			path: 'other.picker',
			label: 'Picker',
			visible: true,
			options: {
				placeholder: 'Select an option',
				source: null,
				target: null,
				listPath: null,
				labelKey: null,
				valueKey: null
			}
		}
	];

	// Baby demo data
	form.state = {
		test: {
			number: 1,
			string: 'Hello there',
			select: 'two',
			select2: '2' // TODO: Literal 2 doesn't work here - JavaScript object indexes cannot be integers
		}
	};
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
