//print the sum of all elements in an array

//anonymous function

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = function (array) {
  var result = array.reduce((acc, cv) => acc + cv);
  console.log(result);
};
sum(array);

//---------------------------------------------------------------------------------

//IIFE function

(function (arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  console.log(total);
})
([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//-------------------------------------------------------------------------------------


//arrow function

var sumOf = (arr) => {
  var total = 0;
  for (var key in arr) {
    total = total + arr[key];
  }
  console.log(total);
};
sumOf([1, 2, 3, 4, 5, 6, 7, 8, 9]);
