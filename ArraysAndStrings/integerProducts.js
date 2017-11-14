/* Source: unknown
Given an array(N) of integer, return an array (M) that at position i, the element is equals to the product of all other element,
except the element at i from input array (N[i]).

Constrains: You can not use division on your solution

Sample Input: [2, 8, 10]
Sample Output: [80, 20, 16]
*/



// Assume all elements are valid in the input array
function integerProducts(arr) {
  // return empty array or whatever is specify, if array of empty or contains only one element (as nothing except self)
  if (arr.length <= 1) {return []}
  var result = []
  var runningProduct = 1
  for (var i = 0; i < arr.length; i++) {
    result.push(runningProduct)
    runningProduct *= arr[i]
  }
  runningProduct = 1
  for (var j = arr.length - 1; j >= 0; j--) {
    result[j] = result[j] * runningProduct
    runningProduct *= arr[j]
  }
  return result
}

// console.log(integerProducts([]))
// console.log(integerProducts([123]))
// console.log(integerProducts([2, 8, 10])) // [80, 20, 16]
// console.log(integerProducts([1, 2, 3, 4, 5, 6])) // [720, 360, 240, 180, 144, 120]