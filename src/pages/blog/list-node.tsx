import React from 'react';

class ListNode<T> {
	data: T;
	next: ListNode<T> | null;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList<T> {
	head: ListNode<T> | null;

	constructor(head = null) {
		this.head = head;
	}

	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	clear() {
		this.head = null;
	}

	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}

	getFirst() {
		return this.head;
	}
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list);

function ListPage() {
	return <div>list</div>;
}

export default ListPage;
