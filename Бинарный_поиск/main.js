function binarySearch(arr, item){
  var low = 0;
  var high = arr.length - 1;
  
  while(low <= high){
    var mid = Math.floor( (low + high) / 2 ); 
    var guess = arr[mid];
    if(guess == item){
      return mid;
    }
    if(item > guess){
      low = mid + 1;
    }else{
      high = mid - 1;
    }
    
  }

  return 'not a number'
}
arr = [1,2,3,4,5,6,7];
binarySearch(arr, 29);