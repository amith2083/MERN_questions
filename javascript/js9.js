
const numbers =[1,2,3,]
numbers[3]= numbers
console.log(numbers) 
//It shows [ 1, 2, 3, [Circular] ] in Node.js.

//In browsers, it may show: [ 1, 2, 3, Array(4) ]