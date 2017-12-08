/* ===================== Three Sum =====================================
Source: LeetCode (https://leetcode.com/problems/3sum/description/)

Given an array of integers, are there three elements a, b, c in the array that a + b + c = 0? Find all unique triplets in the array that adds to zero
- Note: the solution set must not contains duplicates
- Note by Yuyi: depends on how you implement this, the order of how you return the triples should not matter
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


/* ===================== Three Sum Closest ==============================
Source: LeetCode (https://leetcode.com/problems/3sum-closest/description/)

Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
- For example, given array S = {-1 2 1 -4}, and target = 1.
- The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function threeSumClosest (arr, target) {
  // a brute force would be calculate all combination, a n^3 solution
  var a = arr.slice().sort((a, b) => a - b )
  var closest = a[0] + a[1] + a[2]
  var start, end, sum
  for (var i = 0; i < a.length - 2; i++) {
    start = i + 1
    end = a.length - 1
    while (start < end) {
      sum = a[start] + a[end] + a[i]
      if (sum === target) { return sum}
      closest = setClose(sum, closest, target)
      if (sum > target) {
        end--
      } else {
        start++
      }
    }
  }
  return closest

  function setClose(num1, num2, target) {
    if (Math.abs(num1 - target) < Math.abs(num2 - target)) {
      return num1
    } else {
      return num2
    }
  }
}
