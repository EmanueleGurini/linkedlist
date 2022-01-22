import Node from './Node' 
import LinkedList from './LinkedList';

function main () {
  let node1 = new Node('Nodo1')
  let node2 = new Node('Nodo2');
  node1.next = node2
	// node1.getNext();
  let llist = new LinkedList(node1);
  console.log(llist.getHead().getElement())
}

main();