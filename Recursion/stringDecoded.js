/* 
Write a function to decoded a string:
decoded('a2[bc]') // => 'abcbc', repeat twice
decoded('a10[b]') // => 'abbbbbbbbb', repeat twice
decoded('a2[b3[c]]') // => 'abcccbccc'

You can assume that all input is valid:
    - all brackets are close properly
    - all number follow by a bracket
    - all numberic are valid, ie greater > 1
    - the input string only contain alphabet, number and bracket
*/

function decoded(str) {
  var pre = ''
  var tracker = 0
  var start, end, repeat
  for(var i = 0; i < str.length; i++) {
    var char = str[i]
    if (char === '[') {
      if (start === undefined) {
        start = i
      }
      tracker++
    } else if(char === ']') {
      tracker--
      if (tracker === 0) {
        end = i
      }
    } else if (parseInt(char) || parseInt(char) === 0){
      if (start === undefined) {
        repeat = repeat ? repeat * 10 + parseInt(char) : parseInt(char)
      }
    } else {
      if (start === undefined) {
        pre = pre + char
      }
    }
  }
  if(start){
    return pre + decoded(str.slice(start+1, end)).repeat(repeat) + decoded(str.slice(end+1))
  }
  return pre
}

// console.log(decoded('a2[bc]')) // => 'abcbc', repeat twice
// console.log(decoded('acm10[bc]')) // => 'abbbbbbbbb', repeat twice
// console.log(decoded('b3[c]'))
// console.log(decoded('a2[b3[c]]')) // => 'abcccbccc'
// console.log(decoded('2[a3[b4[c]]]'))