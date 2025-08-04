function largestNumber(arr){
    let num =arr[0]
    for (let i=1;i<arr.length;i++){
        if(arr[i]>num){
            num=arr[i]
        }
    }
    return num
}
const arr =[2,3,6,7,8]
console.log(largestNumber(arr))