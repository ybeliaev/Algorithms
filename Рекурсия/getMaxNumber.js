let arr = [1, 9, 3, 4, 5];

function getMaxRecur(arr) {
  if (arr.length == 1) {
    return arr[0];
  } 
  let res = getMAxRecur(arr.slice(1));
  if(res > arr[0]){
    return res;
  }
  return arr[0];
}
getMaxRecur(arr)