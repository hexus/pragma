export default {
	edit: function (event) {
		// Grab the input element
		let input = event.target;
		
		// Dispatch an edit event
		this.triggerDom('edit', {
			input: input,
			name:  input.name,
			value: getInputValue(input)
		});
	}
};

function getInputValue(input) {
	if (input.type === 'checkbox') {
		return input.checked;
	}
	
	return input.value;
}
