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
    let current = this.head
    while (current) {
      if (current.value === val) {
        return true
      }
      current = current.next
    }
    return false
  }

  indexOf(val) { // Returns the numerical order or "index" of the node with value. Returns -1 if not present
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === val) {
        return index
      }
      current = current.next
      index++
    }
    return -1
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
    let newNode = new Node(val)
    let nextNode = node.next
    node.next = newNode
    if (node === this.tail) {
      this.tail = newNode
    } 
  }
}

function LinkedListForEach(list, callback) {
  let current = list.head
  while (current) {
    callback(current)
    current = current.next
  }  
}

let list = new LinkedList()
list.addToTail(1)
list.addToTail(2)
list.addToTail(3)
LinkedListForEach(list, (node) => console.log(node.value)) // 1, 2, 3
console.log(list.contains(1)) // true
console.log(list.contains(4)) // false
console.log(list.indexOf(2)) // 1
console.log(list.indexOf(4)) // -1
list.addToHead(100)
LinkedListForEach(list, (node) => console.log(node.value)) // 100, 1, 2, 3
console.log(list.contains(100)) // true
console.log(list.contains(2)) // true
console.log(list.contains(4)) // false
console.log(list.indexOf(100)) // 0
console.log(list.indexOf(2)) // 2
console.log(list.indexOf(4)) // -1

module.exports = {
  LinkedList,
  LinkedListForEach,
  Node,
}