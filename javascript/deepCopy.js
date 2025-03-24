//To completely copy an object, including nested properties, use deep copy methods.
let obj1 = {
    name: "Alice",
    details: { age: 25, city: "New York" }
  };
  
  let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
  
  obj2.details.city = "Los Angeles"; // Modify copied object
  
  console.log(obj1.details.city); // ✅ "New York" (Original remains unchanged)
  console.log(obj2.details.city); // "Los Angeles"
  