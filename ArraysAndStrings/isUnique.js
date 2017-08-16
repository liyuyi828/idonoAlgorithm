/* 
Source: Cracking the Coding Interview

Is Unique: Implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?

*/

function isUnique(str) {
  var map = {}
  for(var i = 0; i < str.length; i++){
    if (str[i] in map) {
      return false
    }
    map[str[i]] = true
  }
  return true
}
/* 
analysis of solution: 
Time Complexity: O(n)
Space Compexity: O(1)
Possible Edge or Corner Case: space, special character
*/

console.log(isUnique('abcedfg')) //true
console.log(isUnique('abc@123')) //true
console.log(isUnique('abc def')) // true
console.log(isUnique('abc def ')) //false, but please ask if space counts
console.log(isUnique('abcdefa')) // false

//Just for fun, using ES6 map
function isUniqueMap(str) {
  let map = new Map()
  for(let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      return false
    }
    map.set(str[i], true)
  }
  return true
}
// console.log(isUniqueMap('abcedfg')) //true
// console.log(isUniqueMap('abc@123')) //true
// console.log(isUniqueMap('abc def')) // true
// console.log(isUniqueMap('abc def ')) //false, but please ask if space counts
// console.log(isUniqueMap('abcdefa')) // false
