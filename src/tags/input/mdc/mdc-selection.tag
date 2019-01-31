<mdc-selection>
	<label class="mdc-select">
		<i class="mdc-select__dropdown-icon"></i>
		<select name="{ opts.property.path }"
				title="{ opts.property.name }"
				disabled="{ !!opts.property.disabled }"
				oninput="{ edit }"
				class="mdc-select__native-control">
			<option each="{ name, value in getSelectionOptions() }" value="{ value }" selected="{ opts.property.value === value }">{ name }</option>
		</select>
		<span class="mdc-floating-label">{ opts.property.name }</span>
		<div class="mdc-line-ripple"></div>
	</label>

	<script>
		import get from 'lodash/get';
		import edit from '../../../mixins/edit';

		this.mixin(edit);

		this.getSelectionOptions = function () {
			// TODO: Support arrays *and* objects, convert objects to arrays or
			//       vice versa (remember arrays are faster in riot)
			return get(this.opts.property, 'options.options', {});
		};
	</script>
</mdc-selection>
