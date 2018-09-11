<general>
	<fieldset>
		<legend>General</legend>

		<p each="{ value, name in general }">
			<label>
				{ titleCase(name) }
				<input type="text" name="{ name }" value="{ value }" onkeyup="{ edit }"/>
			</label>
		</p>
	</fieldset>

	<script>
		import startCase from 'lodash/startCase';
		import toLower from 'lodash/toLower';

		this.general = this.opts.general;

		this.titleCase = function (string) {
			return startCase(toLower(string));
		};

		this.edit = function (event) {
			console.log(event);

			// Update the value
			this.general[event.target.name] = event.target.value;

			// Global update
			//riot.update();
		};
	</script>
</general>
