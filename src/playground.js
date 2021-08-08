import {
	applyPolyfills,
	defineCustomElements
} from "../loader";

import abilityModifier from "./model/functions/abilityModifier";

// Import Ace Editor and its modules
import ace from 'ace-builds/src-noconflict/ace';

// Approach from 'ace-builds/webpack-resolver'
ace.config.setModuleUrl('ace/mode/html', require('file-loader?esModule=false!ace-builds/src-noconflict/mode-html.js'));
ace.config.setModuleUrl('ace/mode/json', require('file-loader?esModule=false!ace-builds/src-noconflict/mode-json.js'));
ace.config.setModuleUrl('ace/mode/json_worker', require('file-loader?esModule=false!ace-builds/src-noconflict/worker-json.js'));
ace.config.setModuleUrl('ace/mode/yaml', require('file-loader?esModule=false!ace-builds/src-noconflict/mode-yaml.js'));
ace.config.setModuleUrl('ace/theme/tomorrow_night_eighties', require('file-loader?esModule=false!ace-builds/src-noconflict/theme-tomorrow_night_eighties.js'));

import yaml from 'js-yaml';

applyPolyfills().then(() => {
	return defineCustomElements(window);
});

document.addEventListener('DOMContentLoaded', function () {
	let form = document.getElementById('form');

	if (!form) {
		console.error('No form element found!');
		return;
	}

	form.functions = {
		abilityModifier
	};

	if (!ace) {
		console.error('AceEditor library not found!');
		return;
	}

	// noinspection JSVoidFunctionReturnValueUsed
	let fieldsEditor = ace.edit('fields-editor', {
		mode: 'ace/mode/yaml',
		theme: 'ace/theme/tomorrow_night_eighties'
	});

	// noinspection JSVoidFunctionReturnValueUsed
	let dataEditor = ace.edit('data-editor', {
		mode: 'ace/mode/json',
		theme: 'ace/theme/tomorrow_night_eighties'
	});

	// TODO: Layout editor?

	// Fetch and plop some form fields JSON into the editor
	fetch('src/data/pathfinder.yml').catch(function() {
		console.error('Failed to fetch form data', arguments);
	}).then(function (response) {
		console.debug('Loaded fields file', response.url);

		return response.text();
	}).then(function (text) {
		console.debug('Read fields file', text);
		fieldsEditor.setValue(text);
	});


	// Sync editor content with form fields
	fieldsEditor.session.on('change', function () {
		let fields;

		try {
			fields = yaml.load(fieldsEditor.session.getValue());
		} catch (error) {
			// console.error('Cannot parse YAML', error);
			return;
		}

		console.log('Parsed fields YAML', fields);

		form.fields = fields;
	});

	// TODO: Load from examples list
});
