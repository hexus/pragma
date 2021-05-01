// Stencil
import { defineCustomElements, applyPolyfills } from "../pragma/loader";
import fields from "../src/data/fields";
import store from "../src/store";

applyPolyfills().then(() => {
	return defineCustomElements(window);
});

document.addEventListener('DOMContentLoaded', function () {
	let form = document.getElementById('form');

	if (!form) {
		console.error('No form found!');
		return;
	}

	console.log(fields, store);

	form.fields = fields;
	// form.state = store;
});