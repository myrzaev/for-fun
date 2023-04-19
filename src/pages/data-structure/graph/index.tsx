const graph: any = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// Поиск в ширину
const breadthSearch = (graph, start, end) => {
	let queue = [];
	queue.push(start);
	while (queue.length > 0) {
		const current = queue.shift();
		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
	}
	return false;
};

// Алгоритм dijkstra (дейкстры)
const graph2: any = {};
graph2.a = { b: 2, c: 1 };
graph2.b = { f: 7 };
graph2.c = { d: 5, e: 2 };
graph2.d = { f: 2 };
graph2.e = { f: 1 };
graph2.f = { g: 1 };
graph2.g = {};

const shortPath = (graph, start, end) => {
	const costs = {};
	const processed = [];
	let neighbors = {};
	Object.keys(graph).forEach(node => {
		if (node !== start) {
			let value = graph[start][node];
			costs[node] = value || 10000000;
		}
	});
	let node = findNodeLowestCost(costs, processed);
	console.log(costs);
	while (node) {
		const cost = costs[node];
		neighbors = graph[node];
		Object.keys(neighbors).forEach(neighbor => {
			let newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});
		processed.push(node);
		node = findNodeLowestCost(costs, processed);
	}
	return costs;
};

const findNodeLowestCost = (costs, processed) => {
	let lowestCost = 10000000;
	let lowestNode;
	Object.keys(costs).forEach(node => {
		let cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});

	return lowestNode;
};

console.log(shortPath(graph2, 'a', 'g'));

function GraphImplementation() {
	return (
		<div className="container">
			<h1>Graph Implementation</h1>
			<div>{breadthSearch(graph, 'a', 'g')}</div>
		</div>
	);
}

export default GraphImplementation;
