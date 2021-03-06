<tree>
	<virtual each="{ child in opts.children }" key="path">
		<tree-child if="{ visible(child) }" data-is="{ child.input }" property="{ child }">
			<tree if="{ opts.property.children }" children="{ opts.property.children }"></tree>
		</tree-child>
	</virtual>

	<script>
		/**
		 * Determine whether a field should be displayed.
		 *
		 * @param {Field} field
		 * @returns {boolean}
		 */
		this.visible = function (field) {
			return field && field.visible;
		};

		// TODO: Would be amazing to retain and mount custom element tags without data-is
	</script>
</tree>
