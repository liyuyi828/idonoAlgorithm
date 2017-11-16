/* Source: Leetcode [https://leetcode.com/problems/zigzag-conversion/description/]

Zig Zag Conversion: 

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of 3 rows like this:
  
  P A H N
  APLSIIG
  Y I R

And then read line by line: "PAHNAPLSIIGYIR". 

Write the code that will take a string and make this conversion given a number of rows:
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

//Assume that we always get valid string and interger, if not, simply add a check before running anything
// Time complexity O(n)
// Space complexity O(n)
function convert(str, int) {
  var result = ['', str[0]]
  var i = 1
  var increase = true
  var row = 2
  while (i < str.length) {
    var currentStr = result[row] || ''
    result[row] = currentStr + str[i]
    if (row === 1 || row === int) {
      increase = !increase
    }
    if (increase) {
      row++
    } else {
      row--
    }
    i++
  }
  return result.join('')
}

// Question: can you think of a way to optimizded this?

// console.log(convert('PAYPALISHIRING', 3)) // 'PAHNAPLSIIGYIR'
// console.log(convert('123456789', 1)) // 123456789
// console.log(convert('123456789', 2)) // 135792468
// console.log(convert('1234567890', 4)) // 126835940