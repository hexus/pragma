<list-item>
	<p>
		<tree children="{ [opts.property] }"></tree>

		<button type="button" onclick="{ remove }">Remove</button>
	</p>

	<script>
		this.remove = function () {
			console.log('hihi');
			this.triggerDom('remove', {
				name: this.opts.property.path
			});
		};
	</script>
</list-item>
