(() => { 
    let x = y = 10; 
})(); 

console.log(y);/*10 Since y is not declared with let, const, or var, 
JavaScript implicitly assigns it as a global variable (window.y in browsers).*/
 console.log(x) // x is no defined b.c it is block scoped