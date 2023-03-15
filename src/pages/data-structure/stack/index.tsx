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
		return !this.isEmpty() ? this.items[this.items.length - 1] : null;
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

function StackImplementation() {
	const stack = new Stack();
	stack.push(21);
	stack.push('21');
	stack.push('twenty one');
	console.log(stack.print());
	return (
		<div className="container">
			<h1>Stack</h1>
		</div>
	);
}

export default StackImplementation;
