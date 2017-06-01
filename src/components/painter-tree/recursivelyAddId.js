import { v4 } from 'uuid';

export default function recursivelyAddId(nodes) {
	const queue = [...nodes];
	let node;
	while (node = queue.shift()) { // eslint-disable-line no-cond-assign
		node.cid = v4();
		node.attrs['@click.native.stop'] = `__onFocus('${node.cid}')`;
		if (node.children) {
			queue.push(...node.children || []);
		}
	}
}
