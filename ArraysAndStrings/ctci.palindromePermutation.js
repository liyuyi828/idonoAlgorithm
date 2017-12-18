/* Source: Cracking the coding interview

Given a string write a function to check if it is a permucation of a palindrom. 
A palindrome is a word or phrase that is the same forwards and backward. A permucation is rearrangement of letters.
The palindrome does not need to be limitted to just distionary workds.

Example: 
Input: Tact Coa
Output: True (permucations: 'taco cat', 'acto cta', etc)

*/

// Since the example is ignorring captical letter and space (or special character), we can assume this is the case
// However, it is always a good idea to ask during an interview
// In addition, there could be different approach, you we can ask any space and time complexities requirement for the solutions.


// Solution 1: Using map to store all characters count
// If more than two count is not odd number, then the string's permucation can't be palindrome
// Time Complexity: O(n)
// Space Complexity: O(1), because we only have limited character in English words (same if you count for character)
function palindromPermucation(str) {
  var letter = new Map(), char, oddCharCount = 0
  for (var i = 0; i < str.length; i++) {
    char = str[i].toLowerCase()
    if (char !== ' ') {
      if (letter.has(char)) {
        letter.set(char, letter.get(char) + 1)  
      } else {
        letter.set(char, 1)
      }
    }
  }
  letter.forEach((value) => {
    if (value % 2 !== 0) {
      oddCharCount++
    }
  })
  return oddCharCount <= 1
}
console.log(palindromPermucation('Tact Coa'))

// Solution 2: You can also sorted the string, then counting all characters, and return false if more than two character has odd counts
// Time Complexity: best at O(N * LogN).
// Space complexity: O(1)

// Can you implement this?