import INode  from './INode'
 
export default class Node<T> implements INode {
	element : T;
	next : Node<T> | null

  constructor(element : T) {
    this.element = element;
    this.next = null;
  }

  getElement = () : T => {
    return this.element
  }

}