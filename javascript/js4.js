function fruit(){
    console.log('hello');
    console.log('My name is:', fruit.name);
}

fruit.name = 'apple';
fruit(); //hello &My name is: fruit

//In JavaScript, functions are first-class objects, meaning they can have properties just like objects.
//Here, we add a custom property name to the function fruit, setting it to 'apple'.

//Why does fruit.name return 'fruit' instead of 'apple'?
//Every function in JavaScript has a read-only name property, which returns the function's declared name ('fruit' in this case).

//Even though fruit.name = 'apple' tries to overwrite it, JavaScript does not allow modification of the function's name property.
// we can use fruit.customName ='apple' to get result as my Name is apple