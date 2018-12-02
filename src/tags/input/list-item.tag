<list-item>
	<div>
		<div style="display:inline-block;">
			<tree children="{ [opts.property] }"></tree>
		</div>

		<div style="display:inline-block;">
			<button type="button" onclick="{ remove }">Remove</button>
		</div>
	</div>

	<script>
		this.remove = function () {
			this.triggerDom('remove', {
				name: this.opts.property.path
			});
		};
	</script>
</list-item>
