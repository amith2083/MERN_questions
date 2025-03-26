//1️⃣ Bitwise AND (&)
//This compares two numbers bit by bit.

//If both bits are 1, result is 1

//Otherwise, result is 0

console.log(5 & 3);
//Real-life use case: Check if a number is even or odd


function isEven(n) {
    return (n & 1) === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
//--------------------------------------------------------------------------------------------------------------------- 


//2️⃣ Bitwise OR (|)
//This compares two numbers bit by bit.

//If at least one bit is 1, result is 1

//Otherwise, result is 0
console.log(5 | 3);
