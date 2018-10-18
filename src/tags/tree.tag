<tree>
	<virtual each="{ child in children }">
		<property property="{ child }">

			{ JSON.stringify(children) }

			<tree children="{ children }"></tree>
		</property>
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
