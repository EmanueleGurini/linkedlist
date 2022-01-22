import ILinkedList from "./ILinkedList";
import Node from "./Node";

export default class LinkedList<T> implements ILinkedList {
	head : Node<T>;
	let = 0;

	constructor(head: Node<T>) {
		this.head = head; 
	}

	getHead = () : Node<T> => {
		return this.head
	}
}