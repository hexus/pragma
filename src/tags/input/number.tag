<number>
	<input type="number"
		   name="{ opts.property.path }"
		   title="{ opts.property.name }"
		   min="{ opts.property.min }"
		   max="{ opts.property.max }"
		   step="{ opts.property.step }"
		   value="{ opts.riotValue }"
		   disabled="{ !!opts.property.derivation }"
		   onchange="{ edit }"
		   onkeyup="{ edit }"
	/>

	<script>
		import edit from '../../mixins/edit';

		this.mixin(edit);
	</script>
</number>
