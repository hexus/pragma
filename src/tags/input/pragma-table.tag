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
			<!-- TODO: Split up rows into their own tag? -->
			<tr each="{ row in opts.property.children }">
				<th if="{ get(opts.property, 'options.showRowLabel') }">
					{ row.name }
				</th>
				<td each="{ child in row.children }">
					<tree-child data-is="{ child.type }" property="{ child }">
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

		// TODO: Can the <tree> duplication be avoided?
		//       Yielding rows would be great, but seems very tricky given HTML's strictness with tables.
	</script>
</pragma-table>
