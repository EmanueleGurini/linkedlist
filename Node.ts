export default class Node {
	value : number;
	next : Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  
  getValue = () => {
    console.log('Node Value: ' + this.value)
  }

  getNext = () => {
    console.log('Next Node: ' + this.next.value)
  }
}