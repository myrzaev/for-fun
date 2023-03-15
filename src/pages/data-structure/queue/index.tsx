class Queue<T> {
	items: object;
	rear: number;
	front: number;

	// optimized way increased speed of Queue from O(n) - linear to O(1) - constant

	constructor() {
		// this.items = [];
		// optimized
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}

	enqueue(element) {
		// this.items.push(element);
		// optimized
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue() {
		// return this.items.shift();
		// optimized
		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}

	isEmpty() {
		// return this.items.length === 0;
		// optimized
		return this.rear - this.front === 0;
	}

	peek() {
		// return !this.isEmpty() ? this.items[0] : null;
		// optimized
		return this.items[this.front];
	}

	size() {
		// return this.items.length;
		// optimized
		return this.rear - this.front;
	}

	print() {
		// console.log(this.items.toString());
		// optimized
		console.log(this.items);
	}
}

function QueueImplementation() {
	const queue = new Queue();
	queue.enqueue(21);
	queue.enqueue('21');
	queue.enqueue('twenty one');
	console.log(queue.print());
	return (
		<div className="container">
			<h1>Queue</h1>
		</div>
	);
}

export default QueueImplementation;
