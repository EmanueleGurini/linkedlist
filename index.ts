import Node from './Node' 
import LinkedList from './LinkedList';

function main () {

  let llist = new LinkedList(new Node('Nodo1'));

  console.log('head', llist.getHead().getElement())

  llist.addNode('Node2')

  console.log('next', llist.getHead().getNext().getElement())
}

main();