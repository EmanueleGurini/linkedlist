import ILinkedList from "./ILinkedList";
import Node from "./Node";

export default class LinkedList<T> implements ILinkedList {
	private head : Node<T> | null = null;
	private len = 0;

	constructor(head: Node<T>) {
		this.head = head || null; 
	}

	getHead = () : Node<T> => {
		return this.head
	}

	addNode = (nodeValue : T) : void => {
		let newNode : Node<T> = new Node(nodeValue);
		let current : Node<T> | null;

		if (this.head === null) {
			this.head = newNode;
	
		} else {
			current = this.head;
			while (current.getNext()) {
				current = current.getNext();
			}
			current.setNext(newNode);
		}
		this.len++
	}
	
}