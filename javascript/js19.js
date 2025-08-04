let a ={
    name:'amith',
    age:25,
    address:{
        city:'thrissur'
    }

}

Object.keys(a).forEach((key)=>
    delete a[key]
)


console.log('val',a)//val{}

let b = a.address; // storing reference before deletion
//Then b would still contain { city: 'thrissur' }. so
function deepClear(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepClear(obj[key]);
    }
    delete obj[key];
  }
}