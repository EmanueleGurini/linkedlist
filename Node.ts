import INode  from './INode'
 
export default class Node<T> implements INode {
	private element : T;
	private next : Node<T> | null;

  constructor(element : T) {
    this.element = element;
    this.next = null;
  }

  getElement = () : T => {
    return this.element
  }

  getNext = () : Node<T> => {
    return this.next
  }

  setNext = (node : Node<T>) : void => {
    this.next = node;
  }

}