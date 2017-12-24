/* Source: Leetcode (https://leetcode.com/problems/palindrome-number/description/)

Determine whether an integer is a palindrome. Do this without extra space.

*/ 

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if (num < 0) {
    return false
  } 
  var last, first, base, remain = num
  while (remain >= 10) {
    base = Math.floor(Math.log10(remain, 10))
    last = remain % 10
    first = Math.floor(remain / Math.pow(10, base))
    console.log(base, last, first)
    if (last !== first) {
      return false
    }
    remain = Math.floor((remain % Math.pow(10, base)) / 10)
  }
  return true
};
console.log(isPalindrome(-1))
console.log(isPalindrome(0))
console.log(isPalindrome(2))
console.log(isPalindrome(10))
console.log(isPalindrome(101))
console.log(isPalindrome(11))
console.log(isPalindrome(909))
console.log(isPalindrome(12320))