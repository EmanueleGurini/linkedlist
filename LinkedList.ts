import ILinkedList from "./ILinkedList";
import Node from "./Node";

export default class LinkedList implements ILinkedList {
	head : Node;

	constructor(head: Node) {
		this.head = head; 
	}

	getHead = () : Node => {
		return this.head
	}
}