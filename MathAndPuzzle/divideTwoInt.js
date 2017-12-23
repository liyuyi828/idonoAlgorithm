/* Source: Leetode(https://leetcode.com/problems/divide-two-integers/description/)

Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// Note Integer can be negative interger, so both dividend and divisor can be negative interger
 
// Solution need bitwise opearation 
var divide = function(dividend, divisor) {
  var result = 0
  var remain = dividend
  while (remain >= divisor) {
    remain -= divisor
    result++
  }
  return result
};