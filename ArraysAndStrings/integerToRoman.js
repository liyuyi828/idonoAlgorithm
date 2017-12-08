/* =========== Integer to Roman ===========================
Source: LeetCode (https://leetcode.com/problems/integer-to-roman/description/)

Given a integer, convert it to roman numerial
- Input gurantee to between 1 to 3999
*/

function intToRoman(int) {
  const romanChar = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ]

  var digit = 0
  var roman = ''
  while (int > 0) {
    var curr = int % 10
    roman = appendRomanNum(curr, digit) + roman
    int = Math.floor(int / 10)
    digit++
  }
  return roman

  function appendRomanNum(num, digit) {
    var temp = ''
    if (num === 4) {
      temp = romanChar[digit][0] + romanChar[digit][1]
    } else if (num === 9) {
      temp = romanChar[digit][0] + romanChar[digit+1][0]
    } else {
      for(var i = 0; i < num % 5; i++) {
        temp = temp + romanChar[digit][0]
      }
      if(num >= 5) {
        temp = romanChar[digit][1] + temp
      }
    }
    return temp
  }
}

// console.log(intToRoman(4))
// console.log(intToRoman(5))
// console.log(intToRoman(444))

/* ================= Roman to Integer =========================
Souce: Leetcode (https://leetcode.com/problems/roman-to-integer/description/)

Given a roman numerail, convert it to an integer.
- Input is guranteed to be within the range from 1 to 3999

*/
function romanToInt (roman) {
  var value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  var sum = 0
  var max = 0
  for (var i = roman.length - 1; i >= 0; i--) {
    var curr = value[roman[i]]
    if (curr >= max) {
      sum += curr
      max = curr
    } else {
      sum -= curr
    }
  }
  return sum
}