<picker>
	<input list="picker-{_riot_id}-list" oninput="{ input }">
	<datalist id="picker-{_riot_id}-list">
		<option each="{ item, key in data }" value="{ key }"></option>
	</datalist>
	<button type="button" onclick="{ add }">
		Add
	</button>

	<script>
		import edit from '../../mixins/edit';
		import domEvent from '../../mixins/domEvent';

		this.mixin(edit);
		this.mixin(domEvent);

		console.log(this);

		// TODO: Read these from opts.property.options
		// TODO: Implement sourcing data via ajax
		this.target = 'spells.list';

		this.data = {
			'One': {
				id: 1,
				name: 'One'
			},
			'Two': {
				id: 2,
				name: 'Two'
			},
			'Three': {
				id: 3,
				name: 'Three'
			}
		};

		this.value = null;

		this.input = function (event) {
			if (!this.data[event.target.value]) {
				this.value = null;
				return;
			}

			this.value = this.data[event.target.value];
		};

		this.add = function (event) {
			console.log(event);

			// Only fire an event for a valid selection
			if (!this.value)
				return;

			this.triggerDom('add', {
				name: this.target,
				value: this.value
			})
		};
	</script>
</picker>
