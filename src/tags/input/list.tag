<list>
	<div>{ opts.property.name }</div>

	<tree children="{ opts.property.children }" data="{ data }">
		<yield to="afterChild">
			<button type="button" onclick="{ remove }">Remove</button>
		</yield>
	</tree>

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

		this.remove = function (event) {
			//

			this.triggerDom('remove', {

			});
		};
	</script>
</list>
