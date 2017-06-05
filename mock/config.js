export default [
	{
		component: 'section',
		model: 'SearchTableModel.js',
		lifecycle: {
			mounted: 'getUserData(\'kuitos\')'
		},
		attrs: {
			'@click.native.stop': '__onFocus(\'564ef7d6-fabb-4fa5-a75d-8a93785f463c\')'
		},
		children: [{
			component: 'ElForm',
			attrs: {
				':inline': 'true',
				'@click.native.stop': '__onFocus(\'0bda22ca-6998-4127-bf61-63d80e555a76\')'
			},
			children: [{
				component: 'ElFormItem',
				attrs: {
					label: '审批人名称',
					'@click.native.stop': '__onFocus(\'179a6f91-44b9-4b02-b6d0-c34c75e4ad5c\')'
				},
				children: [{
					component: 'ElInput',
					attrs: {
						placeholder: '审批人',
						vModel: 'query.name',
						'@click.native.stop': '__onFocus(\'76a61daf-b204-4569-93d9-31d32df277f5\')'
					},
					cid: '76a61daf-b204-4569-93d9-31d32df277f5'
				}],
				cid: '179a6f91-44b9-4b02-b6d0-c34c75e4ad5c'
			}, {
				component: 'ElFormItem',
				attrs: {
					label: '详细地址',
					'@click.native.stop': '__onFocus(\'9a8ff065-4a34-4e4b-a148-1c324067f2f4\')'
				},
				children: [{
					component: 'ElInput',
					attrs: {
						placeholder: '地址',
						vModel: 'query.address',
						'@click.native.stop': '__onFocus(\'663c8c8f-319f-4157-9521-abb1ab83fe34\')'
					},
					cid: '663c8c8f-319f-4157-9521-abb1ab83fe34'
				}],
				cid: '9a8ff065-4a34-4e4b-a148-1c324067f2f4'
			}, {
				component: 'ElFormItem',
				attrs: {
					label: '起始日期',
					'@click.native.stop': '__onFocus(\'74259b94-dff3-4ae0-a8b6-9b94c18d3f09\')'
				},
				children: [{
					component: 'ElDatePicker',
					attrs: {
						placeholder: '日期',
						vModel: 'query.startDate',
						'@click.native.stop': '__onFocus(\'31338066-7083-44eb-a734-3189a87c0e7f\')'
					},
					cid: '31338066-7083-44eb-a734-3189a87c0e7f'
				}],
				cid: '74259b94-dff3-4ae0-a8b6-9b94c18d3f09'
			}, {
				component: 'ElFormItem',
				attrs: {
					label: '结束日期',
					'@click.native.stop': '__onFocus(\'f425d943-5a7e-42d5-aac5-277d19ff8eb3\')'
				},
				children: [{
					component: 'ElDatePicker',
					attrs: {
						placeholder: '日期',
						vModel: 'query.endDate',
						'@click.native.stop': '__onFocus(\'82d401ad-27fc-467b-964d-4f82caf6ae93\')'
					},
					cid: '82d401ad-27fc-467b-964d-4f82caf6ae93'
				}],
				cid: 'f425d943-5a7e-42d5-aac5-277d19ff8eb3'
			}, {
				component: 'ElFormItem',
				attrs: {
					label: '搜索',
					'@click.native.stop': '__onFocus(\'284fcbfc-78c1-499d-a285-c6822a00663b\')'
				},
				children: [{
					component: 'ElButton',
					attrs: {
						type: 'primary',
						'@click': 'search(query)',
						'@click.native.stop': '__onFocus(\'9bc697ae-3d44-4f9c-b8f1-24c17aa56ca2\')'
					},
					text: '查询',
					cid: '9bc697ae-3d44-4f9c-b8f1-24c17aa56ca2'
				}],
				cid: '284fcbfc-78c1-499d-a285-c6822a00663b'
			}],
			cid: '0bda22ca-6998-4127-bf61-63d80e555a76'
		}, {
			component: 'ElTable',
			attrs: {
				':data': 'tableData',
				style: 'width: 100%',
				'@click.native.stop': '__onFocus(\'c5600c46-5bae-40ff-85b8-22b18e26e10a\')'
			},
			children: [{
				component: 'ElTableColumn',
				attrs: {
					prop: 'date',
					label: '日期',
					'@click.native.stop': '__onFocus(\'471d93b8-08e4-4531-8bc9-8c32e369725a\')'
				},
				cid: '471d93b8-08e4-4531-8bc9-8c32e369725a'
			}, {
				component: 'ElTableColumn',
				attrs: {
					prop: 'name',
					label: '姓名',
					'@click.native.stop': '__onFocus(\'6df713f3-8f18-4d7b-801e-03949c2addc6\')'
				},
				cid: '6df713f3-8f18-4d7b-801e-03949c2addc6'
			}, {
				component: 'ElTableColumn',
				attrs: {
					prop: 'address',
					label: '地址',
					'@click.native.stop': '__onFocus(\'285991d0-7f2d-4146-a30a-b3e2faf5a401\')'
				},
				cid: '285991d0-7f2d-4146-a30a-b3e2faf5a401'
			}],
			cid: 'c5600c46-5bae-40ff-85b8-22b18e26e10a'
		}],
		cid: '564ef7d6-fabb-4fa5-a75d-8a93785f463c'
	}
];
