/* ===================== Three in One ==================
Source: Cracking the Coding Interview

Three in One: descript how you use a single array to implement three stacks? 
*/
  
class ThreeStacks {
  constructor(size){
    this.storage = new Array(size * 3)
    this.size = size
    this.stackSize1 = 0
    this.stackSize2 = 0
    this.stackSize3 = 0
  }

  push(stack, item){
    if (stack === undefined || typeof stack !== 'number' || stack > 3 || stack < 1) {
      throw new Error('Ooops! Please provide numeric stack and item to added')
    }
    this._addItemToStack(stack, item)
  }

  peek(stack) {
    // assuming user put in the correct number, or we could have something similar to push method
    let stackId = 'stackSize' + stack
    if (this[stackId] > 0) {
      return this.storage[this.size * (stack - 1) + this['stackSize' + stack] - 1]
    } else {
      return null
    }
  }

  pop(stack) {
    // please implement this on your own
  }

  _addItemToStack(stack, item){
    let stackId = 'stackSize'+stack
    if (this[stackId] < this.size) {
      this.storage[this.size * (stack - 1) + this[stackId]] = item
      this[stackId]++
      console.log(this.storage)
    } else {
      throw new Error('Stack is over the max size allowed')
    }
  }
}

// var s = new ThreeStacks(3)
// s.push(1, 'a')
// s.push(2, 'b')
// s.push(1, 'c')
// s.push(1, 'd')
// console.log(s.peek(1))
// console.log(s.peek(3))
// console.log(s.peek(2))


