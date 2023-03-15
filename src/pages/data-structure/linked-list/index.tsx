class ListNode<T> {
	value: T;
	next: ListNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList<T> {
	head: ListNode<T> | null;
	size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	// O(1) - Constant
	prepend(value) {
		const node = new ListNode(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	// O(n) - Linear
	append(value) {
		const node = new ListNode(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let previous = this.head;
			while (previous.next) {
				previous = previous.next;
			}
			previous.next = node;
		}
		this.size++;
	}

	insert(value, index) {
		if (index < 0 || index > this.size) {
			return;
		}
	}

	print() {
		if (this.isEmpty()) {
			console.log('List is empty');
		} else {
			let current = this.head;
			let listValues = '';
			while (current) {
				listValues += `${current.value} `;
				current = current.next;
			}
			console.log(listValues);
		}
	}
}

const list = new LinkedList();
console.log('List is empty? ', list.isEmpty());
console.log('List size -  ', list.getSize());
list.print();
list.prepend(20);
list.print();
list.prepend(10);
list.print();
list.prepend(0);
list.print();
list.append(30);
list.print();
list.append(40);
list.print();
list.append(50);
list.print();

function LinkedListImplementation() {
	return (
		<div>
			<p>
				A LL is a linear data structure that includes a series of connected
				nodes
			</p>
			<p>
				Each node consists of a data value and a pointer that points to the next
				node
			</p>
			<p>
				The list elements can be easily inserted or removed without reallocation
				or reorganization of the entire structure
			</p>{' '}
			<p>
				Random access of elements is not feasible and accessing an element has
				linear time complexity
			</p>
			<p>The LL data structure supports three main operations:</p>
			<p>
				Insertion - to add an element at the beginning, end or at a given index
				in the list
			</p>
			<p>
				deletion - to remove an item given its index or value search - to find
				an element given its value
			</p>
		</div>
	);
}

export default LinkedListImplementation;
