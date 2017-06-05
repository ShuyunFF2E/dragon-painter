/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-26
 */

import http from 'axios';

export default class SearchTableModel {

	query = {};

	tableData = [];

	async query(query) {
		this.tableData = await http.get('/resources/', { params: { ...query }});
		return this.tableData;
	}

}
