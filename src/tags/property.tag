<property>
	<yield/>
	<script>
		import './input/string.tag';
		import './input/number.tag';
		import './input/section.tag';

		this.children = opts.property ? opts.property.children : [];

		if (opts.property && opts.property.type) {
			let tagAvailable = riot.util.tags.selectTags().search('"' + opts.property.type + '"') >= 0;

			let tag = tagAvailable ? opts.property.type : 'section';

			console.log(opts.property.type, tag);

			riot.mount(this.root, tag, this.opts.property);
		}
	</script>
</property>
