// Shadowing happens when a variable inside a function or block has the same name as a variable outside it. 
// The inner variable "shadows" the outer one inside its scope.
let name = "Alice"; // Global variable

function greet() {
    let name = "Bob"; // This 'name' shadows the global 'name'
    console.log(name); // Output: Bob (Uses the inner 'name')
}

greet();
console.log(name); // Output: Alice (Outer variable is unchanged)
  
//with const
const age = 25; // Outer scope

function checkAge() {
    const age = 30; // ✅ Allowed (Shadows the outer 'age' inside the function)
    console.log(age); // Output: 30
}

checkAge();
console.log(age); // Output: 25 (Outer 'age' remains unchanged)


//same with block also but shadowing happen with var when it is declared with function not with block scope.