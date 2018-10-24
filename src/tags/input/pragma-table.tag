<pragma-table>
	<table name="{ opts.property.path }">
		<thead><!-- TODO: Heading data --></thead>
		<tbody>
			<tr each="{ row in opts.property.children }">
				<th>
					{ row.name }
				</th>
				<td each="{ child in row.children }">
					<tree-child data-is="{ child.type }" property="{ child }" value="{ get(data, child.path, child.default) }" data="{ data }">
						<virtual if="{ opts.property.children }">
							<tree children="{ opts.property.children }" data="{ parent.data }"></tree>
						</virtual>
					</tree-child>
				</td>
			</tr>
		</tbody>
	</table>
	<script>
		import get from 'lodash/get';
		this.get = get;
		this.data = this.opts.data || {};

		// TODO: Can the <tree> duplication be avoided? Yielding rows would be great, but seems very tricky given browser strictness.
	</script>
</pragma-table>
