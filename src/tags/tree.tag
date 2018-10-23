<tree>
	<virtual each="{ child in children }">
		<tree-child data-is="{ child.type }" property="{ child }" value="{ get(data, child.path, child.default) }" data="{ data }">
			<virtual if=" {opts.property.children }">
				<tree children="{ opts.property.children }" data="{ parent.data }"></tree>
			</virtual>
		</tree-child>
	</virtual>

	<script>
		import get from 'lodash/get';

		this.get = get;
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;
		this.data = this.opts.data || {};
	</script>
</tree>
