<mdc-number>
	<label class="mdc-text-field">
		<input type="number"
			   name="{ opts.property.path }"
			   title="{ opts.property.name }"
			   min="{ opts.property.options.min }"
			   max="{ opts.property.options.max }"
			   step="{ opts.property.options.step }"
			   value="{ opts.property.value }"
			   disabled="{ opts.property.disabled }"
			   oninput="{ edit }"
			   class="mdc-text-field__input { mdc-text-field--disabled: opts.property.disabled }"
		/>
		<span class="mdc-floating-label">{ opts.property.name }</span>
		<div class="mdc-line-ripple"></div>
	</label>

	<script>
		import edit from '../../../mixins/edit';

		this.mixin(edit);
	</script>
</mdc-number>
