
function counter(){
let count =0;
return function counter1(){
    count++
    console.log(count)


}
}
const result = counter()
result();
result();