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
		tabSize: 2,
		useSoftTabs: true
	});

	// noinspection JSVoidFunctionReturnValueUsed
	let dataEditor = ace.edit('data-editor', {
		mode: 'ace/mode/yaml',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		useSoftTabs: true
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


	// Fetch and update form fields and data into the editors, from examples
	let loadExample = function (example) {
		fetch(`src/data/examples/${example}.fields.yml`).catch(function () {
			console.error('Failed to fetch form fields file', arguments);
			fieldsEditor.session.setValue('');
		}).then(function (response) {
			if (!response.ok) {
				throw new Error(`Response code ${response.status} ${response.statusText} for ${response.url}`);
			}

			console.debug('Fetched form fields file', response.url);
			return response.text();
		}).then(function (text = '') {
			console.debug('Writing form fields file to editor', text);
			fieldsEditor.session.setValue(text);
		}).catch (function (error) {
			console.warn(error.message);
		});

		fetch(`src/data/examples/${example}.data.yml`).catch(function () {
			console.error('Failed to fetch form data file', arguments);
			dataEditor.session.setValue('');
		}).then(function (response) {
			console.debug('Fetched form data file', response.url);
			if (!response.ok) {
				throw new Error(`Response code ${response.status} ${response.statusText} for ${response.url}`);
			}

			return response.text();
		}).then(function (text = '') {
			console.debug('Writing form data to editor', arguments);
			dataEditor.session.setValue(text);
		}).catch (function (error) {
			console.warn(error.message);
		});
	};

	let exampleElement = document.getElementById('example');
	loadExample(exampleElement.value);

	exampleElement.addEventListener('change', function (event) {
		let example = exampleElement.value;
		loadExample(example);
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

		if (event.target !== form) {
			console.debug('Non-form change event ignored', event);
			return;
		}

		let text;

		try {
			text = yaml.dump(event.detail);
		} catch (error) {
			// console.error('Cannot encode form data to YAML', event);
			return;
		}

		console.debug('Form data dumped to YAML', event, text);

		dataEditor.session.setValue(text);
	});

	// TODO: Load from examples list
});
