function num(){
   
    age =21;
    console.log(age)
}
num()//21 If a variable is assigned without var, let, or const, it automatically becomes a global variable.
function num1(){
   'use strict'
    age =21;
    console.log(age)
}
// num1() //If you enable strict mode, JavaScript will throw an error because age is not declared.