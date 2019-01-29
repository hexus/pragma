<selection>
	<select name="{ opts.property.path }"
			title="{ opts.property.name }"
			disabled="{ !!opts.property.disabled }"
			oninput="{ edit }">
		<option each="{ name, value in getSelectionOptions() }" value="{ value }" selected="{ opts.property.value === value }">{ name }</option>
	</select>

	<script>
		import get from 'lodash/get';
		import edit from '../../mixins/edit';

		this.mixin(edit);

		this.getSelectionOptions = function () {
			// TODO: Support arrays *and* objects, convert objects to arrays or
			//       vice versa (remember arrays are faster in riot)
			return get(this.opts.property, 'options.options', {});
		};
	</script>
</selection>
