// This is the basic class for all linkedList related problems
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  contains(val) { // Returns a boolean indicating whether the input value is present
  }

  indexOf(val) { // Returns the numerical order or "index" of the node with value. Returns -1 if not present
  }

  addToHead(val) { // Adds a node to head
    let node = new Node(val)
    node.next = this.head
    this.head = node
    if (this.tail === null) {
      this.tail = node
    }
  }

  addToTail(val) { // Adds a node to tail
    let node = new Node(val)
    if (this.head === null) {
      this.head = node
    }
    if(this.tail !== null) {
      this.tail.next = node
    }
    this.tail = node
  }

  insertAfter(node, val) { 
    // Given a node and value, it acts similar to addToTail, except it creates a node after the input node
  }
}
