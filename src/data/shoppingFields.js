export default [
	{
		path: 'templates',
		virtual: true,
		omit: true
	},
	{
		path: 'templates.item',
		type: 'group',
		name: 'Item'
	},
	{
		path: 'templates.item.price'
	},
	{
		path: 'total',
		name: 'Total cost',
		options: {
			showLabel: true
		}
	},
	{
		path: 'bethany',
		type: 'section'
	},
	{
		path: 'bethany.pays',
		expression: '(total - chris.pays)',
		options: {
			showLabel: true
		}
	},
	{
		path: 'chris',
		type: 'section'
	},
	{
		path: 'chris.pays',
		expression: '(total - chris.total) / 2 + chris.total',
		options: {
			showLabel: true
		}
	},
	{
		path: 'chris.total',
		expression: "sumBy(chris.items, 'price')",
		options: {
			showLabel: true
		}
	},
	{
		path: 'chris.items',
		type: 'list',
		template: 'templates.item',
		options: {
			editable: true
		}
	}
];
