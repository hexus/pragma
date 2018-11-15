<tree>
	<virtual each="{ child in opts.children }">
		<tree-child if="{ isVisible(child) }" data-is="{ child.type }" property="{ child }" value="{ getValue(child) }" data="{ opts.data }">
			<virtual if="{ opts.property.children }">
				<tree children="{ opts.property.children }" data="{ parent.opts.data }"></tree>
			</virtual>
		</tree-child>
	</virtual>

	<script>
		import get from 'lodash/get';
		import defaultTo from 'lodash/defaultTo';

		this.get = get;

		/**
		 * Determine whether a field should be drawn.
		 *
		 * @param {Field} field
		 * @returns {boolean}
		 */
		this.isVisible = function (field) {
			return field && field.type !== 'hidden';
		};

		/**
		 * Get a field's value.
		 *
		 * @param {Field} field
		 * @returns {boolean}
		 */
		this.getValue = function (field) {
			return defaultTo(field.value, field.default);
			// get(this.opts.data, field.path, field.default);
		};

		// TODO: Would be amazing to retain and mount custom element tags without data-is
	</script>
</tree>
