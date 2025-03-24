let obj1 = {
  name: "Alice",
  details: { age: 25, city: "New York" }
};

let obj2 = Object.assign({}, obj1);  // Shallow copy ,only copies the first level but not nested property it will refer

obj2.details.city = "Los Angeles";  
// Changing nested object

console.log(obj1.details.city);  // ❗ "Los Angeles" (Modified in both objects)
console.log(obj2.details.city);  // "Los Angeles"
