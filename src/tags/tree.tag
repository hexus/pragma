<tree>
	<virtual each="{ child in children }">
		<span data-is="{ child.type }" property="{ child }" value="{ get(data, child.path, child.default) }" data="{ data }">
			<tree children="{ opts.property.children }" data="{ parent.data }"></tree>
		</span>
	</virtual>

	<script>
		import './property.tag';

		import get from 'lodash/get';

		this.get = get;
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;
		this.data = this.opts.data || {};
	</script>
</tree>
