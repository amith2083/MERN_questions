//find least occurence
const arr =[2,3,3,4,5,5,4,1]

const findLeast = (arr)=>{
    let obj={}
    for(let num of arr){
        obj[num]=(obj[num]||0)+1
    }
    console.log(obj)
    let min= Infinity
    let value =null
    for(let ele in obj){
       if( obj[ele]<min){
        min=obj[ele]
        value=ele
       }
     
    }
    return value

}
console.log(findLeast(arr))