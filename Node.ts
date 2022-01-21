import INode  from './INode'
 
export default class Node implements INode {
	value : number;
	next : Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue = () : void => {
    console.log('Node Value:',this.value)
  }

  getNext = () : void => {
    console.log('Next Node:', this.next.value)
  }
}