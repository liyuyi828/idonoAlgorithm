/*
Write a function call "sayIt", that store all string, until no argument is pass in, then return all string

For example: 
sayIt('Hello') // function
sayIt('I') // function
sayIt('am') // function
sayIt('Batman') // function
sayIt() // 'Hello I am Batman'
*/

function sayIt(arg) {
  if (arg) {
    if (!this.storage) { this.storage = []}
    this.storage.push(arg)
    return function(newArg){
      return sayIt.call(this, newArg)
    }
  } else {
    let temp = this.storage.slice()
    this.storage = []
    return temp.join(' ')
  }  
}

console.log(sayIt('I'))
console.log(sayIt('am'))
console.log(sayIt('King'))
console.log(sayIt('of'))
console.log(sayIt('King'))
console.log(sayIt())
// console.log(sayIt('I')('am')('Spiderman')())
console.log(sayIt('United')('States')('of')('America')())

