'use strict';

function quickSort(array) {
  if (array.length < 2) {
    // base case
    return array;
  } else {
   // recursive case(опорный элемент)
   let pivot = array[0];
   // sub-array of all the elements less than the pivot
   let less = array.slice(1).filter(function(el) { return el <= pivot; });
   // sub-array of all the elements greater than the pivot
   let greater = array.slice(1).filter(function(el) { return el > pivot; });
   return quickSort(less).concat([pivot], quickSort(greater));
  }
}

console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]
