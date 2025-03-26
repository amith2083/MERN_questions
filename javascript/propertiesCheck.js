// 1️⃣ Using the in Operator (Best for Checking Inherited & Own Properties)
// The in operator returns true if the property exists in the object or its prototype chain.


let user = { name: "Alice", age: 25 };

console.log("name" in user); // true ✅
console.log("email" in user); // false ❌
console.log("toString" in user); // true ✅ (inherited from Object prototype)


//🔹 Pros: Works even if the value is undefined.



// 2️⃣ Using hasOwnProperty() (Best for Checking Only Own Properties)
// This method only checks properties that belong to the object itself (ignores prototype properties).


console.log(user.hasOwnProperty("name")); // true ✅
console.log(user.hasOwnProperty("email")); // false ❌
console.log(user.hasOwnProperty("toString")); // false ❌ (inherited)