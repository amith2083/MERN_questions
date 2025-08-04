var abc = 25;

if (function f() {}) {
  abc = abc + typeof f;
}

console.log(abc);//25undefined
//This is a function expression, not a declaration.

//In this context:

//The function f is NOT accessible outside the parentheses block.

//But inside the condition, JavaScript does create the function (it's a function expression).

//Also, the function expression returns a function object, which is truthy, so the if block executes.
