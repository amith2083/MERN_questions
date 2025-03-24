console.log(typeof NaN)//number
console.log(typeof null)//object=> it is error in js
console.log(typeof function(){})//function
console.log(typeof function(){}())//undefined
console.log(...'hello')//h e l l o
console.log(...[1,2,3])//1 2 3 
console.log([...new Set([1,2,3,3])])//[1,2,3]



//type coercion

//Examples of Implicit Type Conversion
//String Coercion (Number/Boolean to String)

console.log("5" + 2);       // "52" (Number converted to String)
console.log("Hello" + true); // "Hellotrue" (Boolean converted to String)

// Number Coercion (String/Boolean to Number)

console.log("5" - 2);   // 3 (String converted to Number)
console.log("10" * 2);  // 20 (String converted to Number)
console.log(true + 1);  // 2 (Boolean true -> 1)
console.log(false + 5); // 5 (Boolean false -> 0)
//Boolean Coercion (Number/String to Boolean)

console.log(Boolean(10));     // true (Non-zero number -> true)
console.log(Boolean(0));      // false (Zero -> false)
console.log(Boolean("Hello")); // true (Non-empty string -> true)
console.log(Boolean(""));     // false (Empty string -> false)
//Undefined & Null Coercion

console.log(null + 5);      // 5 (null converted to 0)
console.log(undefined + 5); // NaN (undefined cannot be converted to a number)
//--------------------------------------------------------------------------------------------------------------------------------

//Explicit Type Conversion (Manual Conversion)
//Explicit conversion is done using JavaScript's built-in methods.


//1. String to Number



console.log(Number("123"));     // 123
console.log(parseInt("123px")); // 123 (Extracts integer)
console.log(parseFloat("3.14"));// 3.14
console.log(Number("Hello"));   // NaN (Not a valid number)
//2. Boolean to Number

console.log(Number(true));  // 1
console.log(Number(false)); // 0
//3. Undefined to Number

console.log(Number(undefined)); // NaN
