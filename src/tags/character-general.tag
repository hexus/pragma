<character-general>
	<p><strong>Name:</strong> <input type="text" name="name" value="{ general.name }" onkeyup="{ edit }"/></p>

	<p>{ general.name }</p>

	<script>
		console.log('character-general', this);

		this.general = this.opts.general;

		this.edit = function (event) {
			console.log(event);

			// Update the value
			this.general[event.target.name] = event.target.value;

			// Trigger an update
			// this.trigger('update', {
			// 	name: 'general.' + event.target.name,
			// 	value: event.target.value
			// });

			riot.update();
		}

		this.on('mount', function () {
			console.log('character-general mount args', arguments);
		})
	</script>
</character-general>
