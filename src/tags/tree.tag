<tree>
	<virtual each="{ child, index in children }">
		<virtual if="{ depth === 0 }">
			<fieldset>
				<legend>{ child.name }</legend>

				<virtual if="{ child.children }">
					<tree children="{ child.children }" depth="{ depth + 1 }"></tree>
				</virtual>

				<virtual if="{ !child.children }">
					<div>
						<input name="{ child.path }" />
					</div>
				</virtual>
			</fieldset>
		</virtual>

		<virtual if="{ depth > 0 }">
			<p>
				<label>
					<span>{ '>'.repeat(depth) } { child.name || child.path }</span>
					<virtual if="{ !child.children }">
						<input name="{ child.path }">
					</virtual>
				</label>
			</p>

			<virtual if="{ child.children }">
				<tree children="{ child.children }" depth="{ depth + 1 }"></tree>
			</virtual>
		</virtual>
	</virtual>

	<script>
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;

		console.log(this.children);
	</script>
</tree>
