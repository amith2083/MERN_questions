
//A WeakSet is a special type of Set in JavaScript that:
//✅ Only stores objects (no primitive values like numbers, strings).
//✅ Holds weak references, meaning objects inside can be garbage collected when no longer referenced elsewhere.
//✅ Does not have methods like .size, .values(), .keys(), or .forEach(), unlike Set.






let weakSet = new WeakSet();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true
