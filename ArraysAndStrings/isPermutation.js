/*
Source: Cracking the Coding Interview

Check Permutation: Given two strings, write a method to decide if one is a permutation  of the other

Analysis:
- Input: two string
- Output: boolean
- Edge case: two string can be the same, which we return false in this case
*/

function isPermutation(s1, s2) {
  if (s1 === s2) {
    return false
  }
  // a super short method would be
  return s1.split('').sort().join('') === s2.split('').sort().join('')
  // However, this will not the be the more efficient solution, as sort() will take big-O of NLogN
  // Can you think of a more efficient way to do this? 
}