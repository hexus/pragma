<mdc-string>
	<label class="mdc-text-field">
		<input type="text"
			   name="{ opts.property.path }"
			   title="{ opts.property.name }"
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
</mdc-string>
