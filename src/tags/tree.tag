<tree>
	<virtual each="{ child, index in children }">
		<virtual if="{ depth === 0 }">
			<fieldset>
				<legend>{ child.name }</legend>

				<virtual if="{ child.children }">
					<tree children="{ child.children }" depth="{ depth + 1 }" data="{ data }"></tree>
				</virtual>

				<virtual if="{ !child.children }">
					<div>
						<input name="{ child.path }" value="{ get(data, child.path, child.default) }" />
					</div>
				</virtual>
			</fieldset>
		</virtual>

		<virtual if="{ depth > 0 }">
			<p>
				<label>
					<span>{ '&nbsp; '.repeat(depth - 1) } { child.name || child.path }</span>
					<virtual if="{ !child.children }">
						<input name="{ child.path }" value="{ get(data, child.path, child.default) }" disabled="{ !!child.derivation }">
					</virtual>
				</label>
			</p>

			<virtual if="{ child.children }">
				<tree children="{ child.children }" depth="{ depth + 1 }" data="{ data }"></tree>
			</virtual>
		</virtual>
	</virtual>

	<script>
		import get from 'lodash/get';

		this.get = get;
		this.children = this.opts.children || [];
		this.depth = parseInt(this.opts.depth) || 0;
		this.data = this.opts.data || {};
	</script>
</tree>
