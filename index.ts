import Node from './Node' 
import LinkedList from './LinkedList';

function main () {
  let node1 = new Node(4)
  let node2 = new Node(5);
  node1.next = node2
	// node1.getNext();
  let llist = new LinkedList(node1);
  llist.getHead().getValue()
}

main();