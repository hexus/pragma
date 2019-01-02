<list>
	<div if="{ !!get(opts.property, 'options.showLabel') }">{ opts.property.name }</div>

	<virtual each="{ child in opts.property.children }" key="path">
		<list-item property="{ child }"></list-item>
	</virtual>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		import get from 'lodash/get';
		this.get = get;

		import './list-item.tag';

		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};
	</script>
</list>
