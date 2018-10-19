<tree>
	<virtual each="{ child in children }">
		<child data-is="{ child.type }" property="{ child }" value="{ get(data, child.path, child.default) }">
			<tree class="" children="{ opts.property.children }" data="{ parent.data }"></tree>
		</child>
	</virtual>

	<script>
		import get from 'lodash/get';

		this.get = get;
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;
		this.data = this.opts.data || {};
	</script>
</tree>
