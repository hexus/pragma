<group>
	<div class="group-container">
		<span if="{ !get(opts.property, 'options.hideLabel') }">
			{ opts.property.name }
		</span>
		<span>
			<yield/>
		</span>
	</div>
	<style>
		.group-container {
			margin: 8px 0;
		}
	</style>
	<script>
		import get from 'lodash/get';

		this.get = get;
	</script>
</group>
