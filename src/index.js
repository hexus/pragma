import riot from 'riot';
import domEvent from 'mixins/domEvent';
import './tags/pragma.tag';

import CharacterFactory from './services/CharacterFactory';
import CharacterSheetProcessor from "./services/CharacterSheetProcessor";

import data from './data';
import store from './store';

let state = {
	character: null,
	sheet: null
};

let app = {
	events: riot.observable(),
	data: data,
	state: state,
	store: store,
	services: {
		factory: new CharacterFactory(),
		processor: new CharacterSheetProcessor()
	}
};

app.state.sheet = app.store.characters[1];

riot.mixin(domEvent);

app.tags = riot.mount('pragma', {
	app: app
});

export default app;
