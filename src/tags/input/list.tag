<list>
	<div>{ opts.property.name }</div>

	<!-- TODO: Split up list items into their own tag, fire remove events from them -->
	<tree children="{ opts.property.children }" data="{ opts.data }"></tree>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		import get from 'lodash/get';

		this.get = get;

		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};
	</script>
</list>
