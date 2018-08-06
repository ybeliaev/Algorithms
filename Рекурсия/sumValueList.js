// получение суммы всех свойств списка
function getCount(list) {
  if (list.next == null) {
    return Object.keys(list).length;
  } else {
    return Object.keys(list).length + getCount(list.next);
  }
}



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

console.log(getCount(list)); // 10
