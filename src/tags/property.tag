<property>
	<script>
		import './input/string.tag';
		import './input/number.tag';
		import './input/section.tag';
		import './input/group.tag';

		let property = opts.property;


		// Determine the tag
		let tag = property ? property.type : null;

		// Set a default tag
		if (!tag && property && property.children)
			tag = 'section';

		// Determine whether the tag is available
		let tagAvailable = tag ? riot.util.tags.selectTags().search('"' + tag + '"') >= 0 : false;

		this.childTag = tag;

		if (tagAvailable) {
			riot.mount(this.root, tag, opts.property);
		} else {
			this.children = opts.property ? opts.property.children : [];
		}
	</script>
</property>
