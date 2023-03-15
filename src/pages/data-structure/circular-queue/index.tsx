import Image from 'next/image';
import cq from './cq.png';

class CircularQueue<T> {
	items: T[];
	rear: number;
	front: number;
	capacity: number;
	currentLength: number;

	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.currentLength = 0;
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return this.currentLength === this.capacity;
	}

	isEmpty() {
		return this.currentLength === 0;
	}

	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.currentLength += 1;
			if (this.front === -1) {
				this.front = this.rear;
			}
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		const item = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front + 1) % this.capacity;
		this.currentLength -= 1;
		if (this.isEmpty()) {
			this.front = -1;
			this.rear = -1;
		}
		return item;
	}

	peek() {
		return !this.isEmpty() ? this.items[this.front] : null;
	}

	print() {
		if (this.isEmpty()) {
			console.log('Queue is empty');
		} else {
			let i;
			let str = '';
			for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
				str += this.items[i] + ' ';
			}
			str += this.items[i];
			console.log(str);
		}
	}
}

function CircularQueueImplementation() {
	const queue = new CircularQueue(5);
	queue.enqueue(21);
	queue.enqueue(23);
	queue.enqueue(24);
	queue.enqueue(20);
	queue.enqueue(19);
	console.log(queue.print());
	return (
		<div className="container">
			<p>
				The size of the queue is fixed and a single block of memory is used as
				if the first element is connected to the last element
			</p>
			<p>
				Also referred to as circular buffer or ring buffer and follows the FIFO
				principle
			</p>
			<p>
				A circular queue will reuse the empty block created during the dequeue
				operation
			</p>
			<p>
				When working with queues of fixed maximum size, a circular queue is a
				great implementation choice
			</p>
			<p>
				The circular queue data stracture supports two maing operations:
				Enqueue, Dequeue
			</p>
			<p>USAGE: Clock, Streaming data, Traffic lights</p>
			<Image src={cq} alt="cq" width={400} height={150} />
		</div>
	);
}

export default CircularQueueImplementation;
