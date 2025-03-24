function sayHi(){
    return (()=>0)() //it immmediately calling arrow function.
}
console.log(sayHi()) //0

//or
function sayHi(){
    return (()=>0)
}
console.log(sayHi()())//0