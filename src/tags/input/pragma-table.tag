<pragma-table>
	<table name="{ opts.property.path }">
		<thead if="{ get(opts.property, 'options.headings') }">
			<tr>
				<th each="{ heading in get(opts.property, 'options.headings', []) }">
					{ heading }
				</th>
			</tr>
		</thead>
		<tbody>
			<tr each="{ row in opts.property.children }" key="path">
				<th if="{ get(opts.property, 'options.showLabel') }">
					{ row.name }
				</th>
				<td each="{ child in row.children }" key="path">
					<tree-child data-is="{ child.type }" property="{ child }">
						<tree if="{ opts.property.children }" children="{ opts.property.children }"></tree>
					</tree-child>
				</td>
			</tr>
		</tbody>
	</table>
	<script>
		import get from 'lodash/get';
		this.get = get;

		// TODO: Can the <tree> duplication be avoided?
		//       Yielding rows would be great, but seems very tricky given HTML's strictness with tables.
	</script>
</pragma-table>
