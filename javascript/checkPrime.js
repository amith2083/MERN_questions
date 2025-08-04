function checkPrime(num){
   
    for (let i=2;i<num/2;i++){
        if(num%i===0){
            return false
        }
    }
    return num
}
const arr =[2,3,6,7,8]
console.log(checkPrime(arr))