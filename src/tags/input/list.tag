<list>
	<div>{ opts.property.name }</div>

	<virtual each="{ child in opts.property.children }">
		<list-item property="{ child }"></list-item>
	</virtual>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		import './list-item.tag';

		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};
	</script>
</list>
