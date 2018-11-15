<list>
	<div>{ opts.property.name }</div>

	<!-- TODO: Split up list items into their own tag -->
	<tree children="{ opts.property.children }" data="{ data }"></tree>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		import get from 'lodash/get';

		this.get = get;
		this.data = this.opts.data || {};

		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};

		this.rem = function () {
			// TODO: Find path of removed item (new list item tag would help this)

			// this.triggerDom('remove', {
			//
			// });
		};

		this.on('update', function () {
			this.data = this.opts.data || {};
		});
	</script>
</list>
