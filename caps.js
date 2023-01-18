//convert all the strings to title caps in a string array

// anonymous function

var a = "javascript";
var caps = function (a) {
  a = a.toLowerCase().split(" ");
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  return a.join(" ");
};
console.log(caps(a));
  
//--------------------------------------------------------------------------

// arrow function

var titleCaps = (a) => {
  a = a.toLowerCase().split(" ");
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  return a.join(" ");
};
console.log(titleCaps("javascript"));

//--------------------------------------------------------------------------------

// IIFE function

(function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(" "));
  }
)("javascript");
