console.log(isNaN('123')); // false (because '123' can be converted to a number)
console.log(isNaN(123));   // false (because 123 is already a number)
console.log(isNaN('hello'));// true (because 'hello' is not a number)
console.log(isNaN(undefined)); // true (because undefined is not a number)
console.log(isNaN(' ')); // false (because an empty string is converted to 0)
console.log(isNaN(NaN));// true

// Number.isNaN() is stricter and only returns true for actual NaN values:


console.log(Number.isNaN('hello')); // false (because 'hello' is not explicitly NaN)
console.log(Number.isNaN(NaN));     // true (because NaN is NaN)