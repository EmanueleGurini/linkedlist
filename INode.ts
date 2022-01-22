interface INode {


  /* 
  * Return the node value
  */
  getElement : () => void

  /* 
  * get next node value in the linkedlist
  */
  getNext : () => void

  /* 
  * Set next node value in the linkedlist
  *
  * @param node 
  */
  setNext : (node : any) => void

}

export default INode