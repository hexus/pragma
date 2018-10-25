<list>
	<div>
		{ opts.property.name }
	</div>

	<!-- TODO: Render children from opts.data using opts.property.template... somehow -->

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
