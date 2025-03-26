//The Rest Parameter (...) collects multiple elements into an array.
const [x, y, ...z] = [10, 20, 30, 40, 50];
console.log(z);  // [30, 40, 50]


const user = { name: "John", age: 30, city: "NY" };
const { name, ...otherDetails } = user;
console.log(otherDetails);  // { age: 30, city: "NY" }


function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1, 2, 3, 4));  // 10
  