/* Source: mock interview

Given an input of integer n, write a program to print start in the following patter:

printStars(1):
----- Input Below --
*
--------------------

printStars(2):
----- Input Below --
 *
***
 * 
--------------------


printStars(3):
----- Input Below --
  *
 *** 
*****
 ***
  * 
--------------------

*/

function printStars(n) {
  var temp
  for (var i = 1; i < n * 2; i++) {
    if (i === 1) {
      temp = buildInitialStr(n)
    } else if (i <= n) {
      removeSpace()
      addStars()
    } else {
      removeStars()
      addSpace()
    }
    console.log(temp)
  }

  function removeSpace() {
    temp = temp.slice(1)
  }

  function addStars() {
    temp = temp + '**'
  }

  function removeStars() {
    temp = temp.slice(0, temp.length - 2)
  }

  function addSpace() {
    temp = ' ' + temp
  }

  function buildInitialStr(n) {
    var str = '*'
    for (var i = n; i > 1; i--) {
      str = ' ' + str
    }
    return str       
  }
}
// printStars(3)
// printStars(10)