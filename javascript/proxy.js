const target = { name: "Alice", age: 25 };

const handler = {
  get: (obj, prop) => {
    console.log(`Property '${prop}' was accessed`);
    return obj[prop] ?? "Property does not exist";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Property 'name' was accessed → Output: Alice
console.log(proxy.age);  // Logs: Property 'age' was accessed → Output: 25
console.log(proxy.city); // Logs: Property 'city' was accessed → Output: Property does not exist



// 🔹 What is a Proxy Object in JavaScript?
// A Proxy in JavaScript is an object that wraps another object (called the "target") and intercepts operations like getting, setting, or deleting properties.

// 🔹 Think of it as a "middleware" for objects.
// 🔹 You can customize behavior when someone accesses or modifies properties.


const secret = { password: "1234", username: "user1" };

const securityProxy = new Proxy(secret, {
  has: (obj, prop) => {
    return prop !== "password"; // Hides 'password' from `in` operator
  }
});

console.log("username" in securityProxy); // true
console.log("password" in securityProxy); // false

//hide from password