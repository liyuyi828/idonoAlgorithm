/*
Source: Leetcodd [https://leetcode.com/problems/longest-substring-without-repeating-characters/description/]

Given a string, find the length of the longest substring without repeating characters.

Examples:
* Given "abcabcbb", the answer is "abc", which the length is 3.
* Given "bbbbb", the answer is "b", with the length of 1.
* Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var longestSubstring = function (str) {
  if (str.length === 0) {return 0}
  let head = 0, 
    tail = 1,
    dict = {},
    current, 
    len = str.length
    longest = 1
  dict[str[head]] = true
  while (tail < len) {
    current = str[tail]
    if (dict[current]) {
      var tempChar
      for (var i = head; i < tail; i++) {
        tempChar = str[i]
        if (tempChar === current) {
          head = i + 1
          break
        }
        dict[tempChar] = false
      }
    } else {
      longest = tail + 1 - head
    }
    dict[current] = true
    tail++
  }
  return longest
}

console.log(longestSubstring('')) // 0
console.log(longestSubstring('bbbbb')) // 1
console.log(longestSubstring('abcabcbb')) // 3
console.log(longestSubstring('pwwkew')) // 3