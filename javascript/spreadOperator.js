const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4]

//✅ Passing Array in Function (Spread to Parameters)

function sum(a, b, c) {
    return a + b + c;
  }
  const nums = [10, 20, 30];
  console.log(sum(...nums));  // 60

  //✅ Shallow Copy Using Spread

  const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 };
console.log(obj2);  // { name: "Alice", age: 25 }
