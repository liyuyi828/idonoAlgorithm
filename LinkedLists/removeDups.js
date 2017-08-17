/*
Source: Cracking the Coding Interview

Remove Dups: write code to remove duplicates from an unsorted linked lists
  - Follow Up: How would you solved this problem if a temporary buffer is not allowed? 

*/

let {LinkedList, LinkedListForEach} = require('./linkedList')

function removeDups(linkedList) {
  // assuming that we only replace duplicate values
  // and the function return a new linkedList (ie, pure function, no side-effect)
  let map = new Map()
  let newList = new LinkedList()
  let current = linkedList.head
  while (current) {
    if (!map.has(current.value)) {
      newList.addToTail(current.value)
      map.set(current.value, true)
    }
    current = current.next
  }
  return newList
}

// let list = new LinkedList()
// list.addToTail(1)
// list.addToTail(2)
// list.addToTail(3)
// list.addToTail(4)
// let newList1 = removeDups(list)
// LinkedListForEach(newList1, (node) => console.log(node.value)) // 1, 2, 3, 4
// list.addToHead(4)
// list.addToTail(5)
// let newList2 = removeDups(list)
// LinkedListForEach(newList2, (node) => console.log(node.value)) // 4, 1, 2, 3, 5