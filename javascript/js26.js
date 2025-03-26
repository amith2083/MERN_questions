function outer(){
    function inner(){
        console.log(x)
    }
    const x =10;
    return inner
}
const inner = outer ()
inner() //10