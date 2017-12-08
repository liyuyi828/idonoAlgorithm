/* Source: LeetCode (https://leetcode.com/problems/3sum/description/)
Given an array of integers, are there three elements a, b, c in the array that a + b + c = 0? Find all unique triplets in the array that adds to zero

Note: the solution set must not contains duplicates

Note by Yuyi: depends on how you implement this, the order of how you return the triples should not matter
*/

function threeSum (nums) {
  var arr = nums.slice().sort((a, b) => a - b)
  var result = []
  var target, start, end, sum
  for (var i = arr.length - 1; i >= 2; i--) {
    target = i
    start = 0
    end = target - 1
    if (arr[i] !== arr[i+1]){
      while (start < end) {
        sum = arr[start] + arr[end] + arr[target]
        if (sum === 0) {
          if (result.length === 0 || arr[target] !== result[result.length-1][2] || arr[start] !== result[result.length-1][0]) {
            result.push([arr[start], arr[end], arr[target]])
          }
          start++
        } else if (sum > 0) {
          end--
        } else {
          start++
        }
      }
    }
  }
  return result
}

// console.log(threeSum([-1, -1, 0])) // []
// console.log(threeSum([-1, -1, 1])) // []
// console.log(threeSum([-1, 0, 1])) // [[-1, 0, 1]]
// console.log(threeSum([-1, -1, 0, 2, 2])) // [-1, -1, 2]
// console.log(threeSum([-1, -1, 0, 1, 2, 2])) // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 0, 0, 0, 0])) // [[0, 0, 0]]
// console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, 0, 1], [-1, -1, 2]]
// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])) //[[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
