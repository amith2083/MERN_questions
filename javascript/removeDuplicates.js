function removeDuplicates (arr){
    let unique =[]
    for(let ele of arr){
        if(unique.indexOf(ele)===-1){
            unique.push(ele)
        }
    }
    return unique
}
const num =[1,4,5,5,6,4,7,8]

console.log(removeDuplicates(num))