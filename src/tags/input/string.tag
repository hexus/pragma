<string>
	<input type="text"
		   name="{ opts.property.path }"
		   title="{ opts.property.name }"
		   value="{ opts.property.value }"
		   disabled="{ !!opts.property.derivation }"
		   oninput="{ edit }"
	/>
	<script>
		import edit from '../../mixins/edit';

		this.mixin(edit);
	</script>
</string>
