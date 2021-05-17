// Stencil
import { defineCustomElements, applyPolyfills } from "../loader";
import abilityModifier                          from "./model/functions/abilityModifier";
import fields                                   from "../src/data/fields";
import store                                    from "../src/store";

applyPolyfills().then(() => {
	return defineCustomElements(window);
});

document.addEventListener('DOMContentLoaded', function () {
	let form = document.getElementById('form');

	if (!form) {
		console.error('No form found!');
		return;
	}

	form.functions = {
		abilityModifier
	};

	form.fields = fields;
	form.state = store.characters[1];
});
