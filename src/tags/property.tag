<property>
	<script>
		import './input/string.tag';
		import './input/number.tag';
		import './input/section.tag';
		import './input/group.tag';

		// We need to access the parent from yield
		opts.parent = this.parent;

		let property = opts.property;

		// Determine the tag type
		let type = property ? property.type : null;

		// Set a default tag type
		if (!type && property && property.children)
			type = 'section';

		// Determine whether the tag is available
		let tagAvailable = type ? riot.util.tags.selectTags().search('"' + type + '"') >= 0 : false;

		console.log(this.parent);
		console.log(riot.mount);

		if (tagAvailable) {
			let tags = riot.mount(this.root, type, opts);

			console.log('property tags', tags);
		} else {
			this.children = opts.property ? opts.property.children : [];
		}
	</script>
</property>
