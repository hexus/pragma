<boolean>
	<input type="checkbox"
		   name="{ opts.property.path }"
		   title="{ opts.property.name }"
		   checked="{ !!opts.property.value }"
		   disabled="{ !!opts.property.derivation }"
		   oninput="{ edit }"
	/>

	<script>
		import edit from '../../mixins/edit';

		this.mixin(edit);
	</script>
</boolean>
