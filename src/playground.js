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
	// Get a reference to the <pragma-form>
	let form = document.getElementById('form');

	if (!form) {
		console.error('No form element found!');
		return;
	}

	form.functions = {
		abilityModifier
	};

	// Build Ace editors
	if (!ace) {
		console.error('AceEditor library not found!');
		return;
	}

	// noinspection JSVoidFunctionReturnValueUsed
	let fieldsEditor = ace.edit('fields-editor', {
		mode: 'ace/mode/yaml',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2
	});

	// noinspection JSVoidFunctionReturnValueUsed
	let dataEditor = ace.edit('data-editor', {
		mode: 'ace/mode/yaml',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2
	});

	// Switch editors
	let playgroundForm = document.getElementById('playground-form');
	playgroundForm.addEventListener('change', function (event) {
		if (event.target instanceof HTMLInputElement && event.target.name === 'editor') {
			let editors = document.getElementsByClassName('editor-panel');

			for (let i = 0; i < editors.length; i++) {
				editors[i].classList.add('hidden');
			}

			document.getElementById(event.target.value + '-editor').parentElement.classList.remove('hidden');
		}
	});

	// TODO: Layout editor?

	// Fetch and plop some form fields and data JSON into the editors
	fetch('src/data/examples/pathfinder.fields.yml').catch(function() {
		console.error('Failed to fetch form fields file', arguments);
	}).then(function (response) {
		console.debug('Fetched form fields file', response.url);
		return response.text();
	}).then(function (text) {
		console.debug('Writing form fields file to editor', text);
		fieldsEditor.session.setValue(text);
	});

	fetch('src/data/examples/pathfinder.data.yml').catch(function () {
		console.error('Failed to fetch form data file', arguments);
	}).then(function (response) {
		console.debug('Fetched form data file', response.url);
		return response.text();
	}).then(function (text) {
		console.debug('Writing form data to editor', arguments);
		dataEditor.session.setValue(text);
	});


	// Sync editor content with form fields
	fieldsEditor.session.on('change', function () {
		let fields;

		try {
			fields = yaml.load(fieldsEditor.session.getValue());
		} catch (error) {
			// console.error('Cannot parse form fields YAML', error);
			return;
		}

		console.debug('Parsed fields YAML', fields);

		form.fields = fields;
	});

	dataEditor.session.on('change', function () {
		let data;

		try {
			data = yaml.load(dataEditor.session.getValue());
		} catch (error) {
			// console.error('Cannot parse form data YAML', error);
			return;
		}

		console.debug('Parsed data YAML', data);

		form.state = data;
	});

	// Sync form data with editor content
	form.addEventListener('change', function (event) {
		console.debug(arguments);

		let text;

		try {
			text = yaml.dump(event.detail);
		} catch (error) {
			// console.error('Cannot encode form data to YAML', event);
			return;
		}

		console.debug('Form data dumped to YAML', event.detail, text);

		dataEditor.session.setValue(text);
	});

	// TODO: Load from examples list
});
