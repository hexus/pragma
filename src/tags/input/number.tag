<number>
	<label>
		<span if="{ opts.property.options && opts.property.options.showLabel }">
			{ opts.property.name }
		</span>
		<input type="number"
			   name="{ opts.property.path }"
			   title="{ opts.property.name }"
			   min="{ opts.property.options.min }"
			   max="{ opts.property.options.max }"
			   step="{ opts.property.options.step }"
			   value="{ opts.property.value }"
			   disabled="{ opts.property.disabled }"
			   oninput="{ edit }"
		/>
	</label>

	<script>
		import edit from '../../mixins/edit';

		this.mixin(edit);
	</script>
</number>
