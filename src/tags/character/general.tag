<general>
	<fieldset>
		<legend>General</legend>

		<p each="{ value, name in general }">
			<label>
				{ util.titleCase(name) }
				<input type="text" name="{ name }" value="{ value }" onkeyup="{ edit }"/>
			</label>
		</p>
	</fieldset>

	<script>
		import util from '../../mixins/util';

		this.mixin(util);

		this.general = this.opts.general;

		this.titleCase = function (string) {
			return startCase(toLower(string));
		};

		this.edit = function (event) {
			// Update the value
			this.general[event.target.name] = event.target.value;
		};
	</script>
</general>
