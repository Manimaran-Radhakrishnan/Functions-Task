//rotate an array by k times;

// anonymous function

var rotate = function (a, k) {
  for (var i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  return a;
};
console.log(rotate([1, 2, 3, 4, 5], 1));

//--------------------------------------------------------------------------------

//IIFE function

(function rotate(a, k) {
  for (var i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  console.log(a);
})([1, 2, 3, 4, 5], 1);
