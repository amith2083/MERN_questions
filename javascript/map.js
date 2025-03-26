//Can be any data type (strings, numbers, objects, arrays, functions, etc.)

const map = new Map();
map.set("name", "Alice");
map.set(1, "Number key");  // Number as a key
map.set(true, "Boolean key");

console.log(map.get("name"));  // Alice
console.log(map.get(1));  // "Number key"
console.log([...map.keys()]);  // ["name", 1, true] (insertion order is preserved)
console.log(map.size);  // 3
