/* 
Write a function that takes up to four digits of a phone number,
and returns a list of all of the words that can be written on the phone with that number. 
(You should return all permutations, not only English words)

telephoneToWords(‘2745’) // => [‘APGJ’, ‘APGK’,‘ APGL’ …. // MANY MORE OF THESE, ‘CSIL’]

TIPS
- Phone numbers are strings! ( phone number can start with a zero)
- The digits 0 and 1 do not have letters associated with them, so they should be left as numbers
- Don’t return every combination of those digits in any order, just the order given.

var phoneDigitsToLetters = {
        0: ‘0’, 
        1: ‘1’, 
        2: ‘ABC’, 
        3: ‘DEF’, 
        4: ‘GHI’
        5: ‘JKL’
        6: ‘MNO’
        7: ‘PQRS’
        8: ‘TUV’
        9: ‘WYZ’
};
*/

var phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF', 
    4: 'GHI',
    5: 'JKL', 
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

function fourDigitsPhoneToWords(numStr){
    // error message if invalid input 
    if (numStr.length !== 4 || isNaN(Number(numStr))) {
        console.log('please enter 4 digits number')
        return null
    }
    // since we know know that input is 4 digits numeric string, we can directly use a loop
    // some people would use recursion, which is slower than a loop
    var result
    for(var i = 0; i < 4; i++) {
        if (i > 0) {
            // for the second letter on, we can build add all letter of current digits to existing result, save in temp variable
            // then reset it to result 
            var temp = []
            var current = phoneDigitsToLetters[numStr[i]].split('')
            result.forEach(e => {
                current.forEach(letter => {
                    temp.push(e+letter)
                })
            })
            result = temp        
        } else {
            // for the first digit, ie i = 0, we can directly return the letter araay associate with the letter
            result = phoneDigitsToLetters[numStr[i]].split('')
        }
    }    
    return result
}
// console.log(fourDigitsPhoneToWords('2745').length) // equals 3 * 4 * 3 * 3 = 108
// console.log(fourDigitsPhoneToWords('0123').length) // equals 1 * 1 * 3 * 3 = 9
// console.log(fourDigitsPhoneToWords('a123')) // warning, null
// console.log(fourDigitsPhoneToWords('12345')) // warning, null
