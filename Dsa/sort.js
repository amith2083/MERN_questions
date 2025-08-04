
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left=[];
    let right =[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]


    
}

//Best case: O(nlog⁡n)O(nlogn) — occurs when the pivot divides the array into two nearly equal parts.
//Worst case: O(n2) — occurs when the pivot is always the smallest or largest element, leading to highly unbalanced partitions.


function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
        const mid = Math.floor(arr.length/2)
        const leftarr = arr.slice(0,mid)
        const rightarr = arr.slice(mid)
       return merge( mergeSort(leftarr),mergeSort(rightarr))
}
       function merge(leftarr,rightarr) {
        const sortedArr =[]
        while(leftarr.length&&rightarr.length){
            if(leftarr[0]<=rightarr[0]){
                sortedArr.push(leftarr.shift())
        }else{
            sortedArr.push(rightarr.shift())
        }
}
return[...sortedArr,...leftarr,...rightarr]
       }


const arr =[-6,1,9,4,2]
console.log(bubbleSort(arr))

//Best case: O(nlog⁡n)
//Worst case: O(nlog⁡n)
//Space complexity: O(n)O(n) (due to the auxiliary array used during merging).

//stable sorting-bubble and merge sort,insertion
//unstable sorting-quick and selection sort