//print all odd numbers in an array

//arrow function

var oddNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//-----------------------------------------------------------------------------

//anonymous function
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var odd = function (array) {
  var result = array.filter((element) => element % 2 != 0);
  return result;
};
console.log(odd(array));


//--------------------------------------------------------------------------------

//IIFE function
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
