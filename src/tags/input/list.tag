<list>
	<div class="list-container">
		<div if="{ !!get(opts.property, 'options.showLabel') }">{ opts.property.name }</div>

		<virtual each="{ child in opts.property.children }" key="path">
			<list-item property="{ child }" removable="{ editable() && !fixed(child.pathFragment) }"></list-item>
		</virtual>

		<button type="button" if="{ editable() }" onclick="{ add }">Add</button>
	</div>

	<style>
		.list-container {
			margin: 8px auto;
		}
	</style>

	<script>
		import get from 'lodash/get';
		import findIndex from 'lodash/findIndex';
		this.get = get;
		this.findIndex = findIndex;

		import './list-item.tag';

		this.add = function () {
			if (!this.editable()) {
				return;
			}

			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};

		/**
		 * Determine whether the list is editable.
		 *
		 * @returns {boolean} Whether the list is editable.
		 */
		this.editable = function () {
			return !!get(this.opts.property, 'options.editable');
		};

		/**
		 * Determine whether a list item is fixed.
		 *
		 * @param {string} key The key of the field to check.
		 * @return {boolean} Whether the list item is fixed.
		 */
		this.fixed = function (key) {
			if (!this.opts.property.fixed || !Array.isArray(this.opts.property.fixed))
				return false;

			return findIndex(this.opts.property.fixed, key) >= 0;
		};
	</script>
</list>
