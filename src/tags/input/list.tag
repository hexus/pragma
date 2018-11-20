<list>
	<div>{ opts.property.name }</div>

	<!-- TODO: Split up list items into their own tag, fire remove events from them -->
	<yield/>

	<button type="button" onclick="{ add }">Add</button>

	<script>
		this.add = function () {
			this.triggerDom('add', {
				name: this.opts.property.path
			});
		};
	</script>
</list>
