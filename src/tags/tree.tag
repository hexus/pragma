<tree>
	<virtual each="{ child in children }">
		<tree-child if="{ isVisible(child) }" data-is="{ child.type }" property="{ child }" value="{ get(data, child.path, child.default) }" data="{ data }">
			<yield from="beforeChild"/>
			<virtual if="{ opts.property.children }">
				<tree children="{ opts.property.children }" data="{ parent.data }"></tree>
			</virtual>
			<yield from="afterChild"/>
		</tree-child>
	</virtual>

	<script>
		import get from 'lodash/get';

		this.get = get;
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;
		this.data = this.opts.data || {};

		/**
		 * Determine whether a field should be drawn.
		 *
		 * @param {Field} field
		 * @returns {boolean}
		 */
		this.isVisible = function (field) {
			return field && field.type !== 'hidden';
		}

		// TODO: Would be amazing to retain and mount custom element tags without data-is
	</script>
</tree>
