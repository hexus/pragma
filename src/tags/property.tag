<property>
	<script>
		import './inputs/string.tag';
		import './inputs/number.tag';
		import './inputs/section.tag';

		console.log(this.opts);

		riot.mount(this.root, this.opts.property.type, this.opts.property);
	</script>
</property>
