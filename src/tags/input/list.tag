<list>
	<div if="{ !!get(opts.property, 'options.showLabel') }">{ opts.property.name }</div>

	<virtual each="{ child in opts.property.children }" key="path">
		<list-item property="{ child }" editable="{ editable() }"></list-item>
	</virtual>

	<button type="button" if="{ editable() }" onclick="{ add }">Add</button>

	<script>
		import get from 'lodash/get';
		this.get = get;

		import './list-item.tag';

		this.add = function () {
			if (!this.editable()) {
				return;
			}

			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};

		this.editable = function () {
			return !!get(this.opts.property, 'options.editable');
		};
	</script>
</list>
