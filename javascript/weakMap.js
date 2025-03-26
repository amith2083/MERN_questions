let weakMap = new WeakMap();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakMap.set(obj1, "Engineer");
weakMap.set(obj2, "Designer");

console.log(weakMap.get(obj1)); // Output: "Engineer"
console.log(weakMap.get(obj2)); // Output: "Designer"

//A WeakMap is a special kind of Map in JavaScript that:
//✅ Only allows objects as keys (no primitive values).
//✅ Holds weak references to keys, meaning they can be garbage collected if there are no other references.
//✅ Does not have methods like .size, .keys(), .values(), or .forEach(), unlike Map.

