const user = {
  name: "Amith",
  age: 25
};

Object.freeze(user);

user.age = 30;        // ❌ Doesn't change
user.email = "a@x.com"; // ❌ Can't add
delete user.name;     // ❌ Can't delete

console.log(user); // { name: "Amith", age: 25 }




const user = {
  name: "Amith",
  age: 25
};

Object.seal(user);

user.age = 30;         // ✅ Allowed
user.email = "a@x.com";  // ❌ Not added
delete user.name;      // ❌ Not deleted

console.log(user); // { name: "Amith", age: 30 }



const user = {
  name: "Amith",
  age: 25,
  role: "Developer"
};

const keys = Object.keys(user);
console.log(keys); // ["name", "age", "role"]


const user = {
  name: "Amith",
  age: 25,
  role: "Developer"
};

const values = Object.values(user);
console.log(values); // ["Amith", 25, "Developer"]



const user = {
  name: "Amith",
  age: 25,
  role: "Developer"
};

const entries = Object.entries(user);
console.log(entries);
// [["name", "Amith"], ["age", 25], ["role", "Developer"]]
