<number>
	<input type="number"
		   name="{ opts.property.path }"
		   title="{ opts.property.name }"
		   min="{ opts.property.min }"
		   max="{ opts.property.max }"
		   step="{ opts.property.step }"
		   value="{ opts.property.value }"
		   disabled="{ opts.property.disabled }"
		   oninput="{ edit }"
	/>

	<script>
		import edit from '../../mixins/edit';

		this.mixin(edit);
	</script>
</number>
