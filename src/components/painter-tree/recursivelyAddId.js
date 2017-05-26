import { v4 } from 'uuid';

export default function recursivelyAddId(nodes) {
	const queue = [...nodes];
	let node;
	while (node = queue.shift()) { // eslint-disable-line
		node.id = v4();
		if (node.children) {
			queue.push(...node.children || []);
		}
	}
}
