// foo();
// var foo=20;
// function foo(){
//     console.log('calling foo')
// }
// foo()


// Function declarations are hoisted first
// function foo() {
//     console.log('calling foo');
// }

// // `var foo` is hoisted but initialized as `undefined`
// var foo;

// foo();  // ✅ Calls the function 'foo', which was hoisted

// foo = 20;  // Now `foo` is a number

// foo();  // ❌ TypeError: foo is not a function (because foo is now 20)

//--------------------------------------------------------------------------------------------
foo();
let  foo=20;
function foo(){
    console.log('calling foo')
}
foo()

//In modern JavaScript (ES6+), let and function declarations are not allowed to have the same name in the same scope.

//This is why Node.js throws a SyntaxError before execution.
