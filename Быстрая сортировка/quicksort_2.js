'use strict';

var arr = [2,5,1,12,6];
function quickSort(arr){
  if(arr.length < 2){
    return arr;
  }else{
    var pivot = arr[0];
    var less = arr.filter(function(elem){ if(elem < pivot) return elem  });
    var greater = arr.filter(function(elem){ if(elem > pivot) return elem  });
    
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}
console.log(quickSort(arr));