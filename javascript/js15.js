const animals={

}
let dog={
    sound:'bark'
}
let cat={
    sound:'meow'
}
animals[dog]={...dog,name:'ruby'}
animals[cat]={...cat,name:'sara'}
console.log(animals[dog])
//{ sound: "meow", name: "sara" }
//✅explanation
//Objects cannot be used as keys in JavaScript objects!
//Instead of treating dog and cat as objects, JavaScript converts them to strings.
//When objects are used as keys, JavaScript calls toString() on them, which results in => console.log({}.toString()); // "[object Object]"
//Both dog and cat become the same key ("[object Object]"), causing the second assignment (animals[cat]) to overwrite the first one (animals[dog])
// {
//     "[object Object]": { sound: "meow", name: "sara" }
// }

const a ={};
const b ={key:4};
const c = {key:5};
a[b]=123;
a[c]=456
console.log(a[b])//456 

//solution is use map


