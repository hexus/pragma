import riot from 'riot';
import domEvent from 'mixins/domEvent';
import './tags/pragma.tag';
import './tags/playground.tag';

import CharacterFactory from './services/CharacterFactory';
import CharacterSheetProcessor from "./services/CharacterSheetProcessor";
import PropertyProcessor from './services/PropertyProcessor';
import abilityModifier from './model/functions/abilityModifier';

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
		processor: new CharacterSheetProcessor(),
		propertyProcessor: new PropertyProcessor({
			abilityModifier: abilityModifier
		})
	}
};

app.state.sheet = app.store.characters[1];

riot.mixin(domEvent);

app.tags = riot.mount('*', {
	app: app
});

export default app;
