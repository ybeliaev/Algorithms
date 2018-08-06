// посчитать колличество элементов в списке

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          age: 5,
          next: {}
        }
      }
    }
  }
};

var max = 0;
function getCount(list) {

  if (!list.value) {
    return 0;
  } else {
    if (list.value > max) {
      max = list.value;
      getCount(list.next);

    }

  }
  return max;
}

console.log(getCount(list));