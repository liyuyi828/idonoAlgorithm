/* Source: mock interview:

Given an array of words, group all anagrams without duplicate. For example:

Input: ['xxy', 'abc', 'cba', 'bac', 'cab', 'bac', 'shad', 'dash']
Output: [['xzy'], ['abc', 'cba', 'bac', 'cab'], ['shad', 'dash']

*/

function groupAnagram (arr) {
  var map = {}
  var dict = {}
  var result = []
  arr.forEach(e => {
    if (dict[e] === undefined) {  
      var key = e.split('').sort().join('')
      if (map[key]) {
        map[key].push(e)
      } else {
        map[key] = [e]
      }
      dict[e] = true
    }
  })
  for (var key in map) {
    result.push(map[key])
  }
  return result
}
// Time complexity: O(N * MLogM), N is numbers of word, M is length of words
// Space complexity: O(N)

// console.log(groupAnagram(['xxy', 'abc', 'cba', 'bac', 'cab', 'bac', 'shad', 'dash']))