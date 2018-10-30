<list>
	<div>{ opts.property.name }</div>

	<div each="{ item, index in get(opts.data, opts.property.path, []) }">
		<tree-child data-is="{ opts.property.template.type }" property="{ templateField(opts.property, index) }" data="{ data }">
			<virtual if="{ opts.property.children }">
				<tree children="{ opts.property.children }" data="{ parent.data }"></tree>
			</virtual>
		</tree-child>
	</div>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		import get from 'lodash/get';
		import merge from 'lodash/merge';

		this.get = get;
		this.data = this.opts.data || {};

		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};

		/**
		 * Create a field from a template for its parent.
		 *
		 * TODO: Get rid of this entirely, use fields generate by FormProcessor
		 *
		 * @param {Field} parent   - Parent field with a template
		 * @param {number} [index] - Child index
		 * @return {Field}
 		 */
		this.templateField = function (parent, index) {
			let template = parent.template;
			let field = merge({}, template);
			let i;

			field.parent = parent.path;
			field.path = [parent.path, template.pathFragment || index].join('.');

			// We're done if there are no children
			if (!field.children)
				return field;

			// Otherwise we process the children too
			for (i = 0; i < field.children.length; i++) {
				field.children[i].path = [field.path, field.children[i].pathFragment].join('.');
			}

			return field;
		};
	</script>
</list>
