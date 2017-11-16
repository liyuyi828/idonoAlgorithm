/*
Bubble Sort

This sorting algorithm repeatly compare the adjacent items, and swap them if their order is incorrect. 
In each pass, the largest unsorted item that will end up (bubble) to its correct position.

Average Time: O(n^2)
Worst Time: O(n^2)
Best Time: O(n)
Space: O(n)


*/

function bubbleSort(arr) {
  var swap = true
  while (swap) {
    swap = false
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapHelper(i - 1, i, arr)
        swap = true
      }
    }
  }
  return arr
}

function swapHelper(a, b, arr) {
  var temp = arr[a];
  arr[a] = arr[b]; 
  arr[b] = temp; 
}

// console.log(bubbleSort([7, 1, 10, 3, 2, 4, 5, 6, 8, 9]))