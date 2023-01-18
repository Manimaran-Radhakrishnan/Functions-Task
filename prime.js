//return all the prime numbers in an array

// anonymous function

var a = [11, 12, 13, 14, 15, 16, 17, 18, 19];
var prime = function (a) {
  num = a.filter((ele) => {
    for (var i = 2; i <= Math.sqrt(ele); i++) {
      if (ele % i == 0) return false;
    }
    return true;
  });
  return num;
};
console.log(prime(a));


//-------------------------------------------------------------------------------------


//IIFE function

  (function (a) {
    b = a.filter((ele) => {
      for (var i = 2; i <= Math.sqrt(ele); i++) {
        if (ele % i == 0) return false;
      }
      return true;
    });
    console.log(b);
  }
)([2, 3, 4, 5, 6, 7, 8, 9, 11]);


//-------------------------------------------------------------------------------

// arrow function

var prime = (a) => {
  var b = a.filter((ele) => {
    for (var i = 2; i < Math.sqrt(ele); i++) {
      if (ele % i == 0) return false;
    }
    return true;
  });
  return b;
};
console.log(prime([11, 12, 13, 14, 15, 16, 17, 18, 19]));
