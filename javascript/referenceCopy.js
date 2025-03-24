

//reference copy

let a = { value: 10 };
let b = a;

b.value = 20;

console.log(a.value); // 🔴 Output: 20
console.log(b.value); // 🔴 Output: 20
//Changing top-level property affects original and Changing nested object will also affects original


let person ={
    name:'john'
}
const members=[person]
person=null;
console.log(person) //null

console.log(members)//[ { name: 'john' } ]