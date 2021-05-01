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
			// Templates placeholder parent
			path: 'templates',
			type: 'virtual'
		},
		{
			tag: 'pragma-number',
			type: 'number',
			path: 'number',
			options: {
				max: 999
			}
		},
		{
			tag: 'pragma-number',
			type: 'number',
			path: 'number-double',
			expression: 'number * 2'
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
			tag: 'pragma-boolean',
			type: 'boolean',
			path: 'test.boolean',
			label: 'Boolean'
		},
		{
			tag: 'pragma-section',
			type: 'section',
			path: 'lists',
			label: 'Test lists',
			description: 'This is a test section for lists'
		},
		{
			// Simple list item template
			tag: 'pragma-string',
			type: 'string',
			path: 'templates.list-item',
			visible: true
		},
		{
			tag: 'pragma-list',
			type: 'list',
			path: 'lists.list',
			label: 'List',
			description: 'First test list',
			options: {
				editable: true,
				showLabel: true
			},
			template: 'templates.list-item'
		},
		{
			tag: 'pragma-group',
			type: 'group',
			path: 'templates.table-row',
			label: 'Row'
		},
		{
			tag: 'pragma-string',
			type: 'string',
			path: 'templates.table-row.first'
		},
		{
			tag: 'pragma-string',
			type: 'string',
			path: 'templates.table-row.second'
		},
		{
			tag: 'pragma-table',
			type: 'table',
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
			},
			template: 'templates.table-row'
		},
		{
			tag: 'pragma-group',
			type: 'group',
			path: 'lists.table.one',
			label: 'One'
		},
		{
			tag: 'pragma-group',
			type: 'group',
			path: 'lists.table.two',
			label: 'Two'
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
			select2: '2', // TODO: Literal 2 doesn't work here - JavaScript object indexes cannot be integers
			boolean: true
		},
		lists: {
			table: {
				one: {
					first:  'One',
					second: 'Two'
				},
				two: {
					first:  'Three',
					second: 'Four'
				}
			}
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
