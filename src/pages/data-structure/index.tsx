class Stack<T> {
	items: T[];
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	print() {
		console.log(this.items.toString());
	}
}

function DataStructure() {
	const stack = new Stack();
	stack.push(21);
	stack.push('21');
	stack.push('twenty one');
	console.log(stack.print());
	return (
		<div className="container">
			<h1>DataStructure</h1>
		</div>
	);
}

export default DataStructure;
