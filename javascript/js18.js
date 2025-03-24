var arr1 ='john'.split('');
var arr2 = arr1.reverse();
var arr3= 'jones'.split('')
arr2.push(arr3);
console.log(arr1.length)//5 since arr1===arr2 Since arr1 and arr2 point to the same array, arr1 also gets updated.
