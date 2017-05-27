export default [
	{
		component: 'section',
		model: 'Model.js',
		lifecycle: {
			mounted: 'getUserData("kuitos")'
		},
		children: [
			{
				component: 'ElForm',
				attrs: {
					':inline': 'true'
				},
				children: [
					{
						component: 'ElFormItem',
						attrs: {
							label: '审批人名称'
						},
						children: [
							{
								component: 'ElInput',
								attrs: {
									placeholder: '审批人',
									vModel: 'query.name'
								}
							}
						]
					},
					{
						component: 'ElFormItem',
						attrs: {
							label: '详细地址'
						},
						children: [
							{
								component: 'ElInput',
								attrs: {
									placeholder: '地址',
									vModel: 'query.address'
								}
							}
						]
					},
					{
						component: 'ElFormItem',
						attrs: {
							label: '起始日期'
						},
						children: [
							{
								component: 'ElDatePicker',
								attrs: {
									placeholder: '日期',
									vModel: 'query.startDate'
								}
							}
						]
					},
					{
						component: 'ElFormItem',
						attrs: {
							label: '结束日期'
						},
						children: [
							{
								component: 'ElDatePicker',
								attrs: {
									placeholder: '日期',
									vModel: 'query.endDate'
								}
							}
						]
					},
					{
						component: 'ElFormItem',
						attrs: {
							label: '搜索'
						},
						children: [
							{
								component: 'ElButton',
								attrs: {
									type: 'primary',
									'@click': 'search(query)'
								},
								text: '查询'
							}
						]
					}
				]
			},
			{
				component: 'ElTable',
				attrs: {
					':data': 'tableData',
					style: 'width: 100%'
				},
				children: [
					{
						component: 'ElTableColumn',
						attrs: {
							prop: 'date',
							label: '日期'
						}
					},
					{
						component: 'ElTableColumn',
						attrs: {
							prop: 'name',
							label: '姓名'
						}
					},
					{
						component: 'ElTableColumn',
						attrs: {
							prop: 'address',
							label: '地址'
						}
					}
				]
			}
		]
	}
];
