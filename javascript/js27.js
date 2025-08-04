var x = 21;

var girl = function () {
  console.log(x);
  var x = 20;
};

girl();//undefined


var girl = function () {
  var x;             // declaration hoisted
  console.log(x);    // logs undefined
  x = 20;            // assignment happens after log
};
