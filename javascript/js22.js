function getArgs(one, two, three){
	console.log(one,two,three);
}

const str1 = "Hello";
const str2 = "World"

getArgs`${str1} is ${str2}`; //['','is',''] Hello world
//JavaScript does not pass the whole string directly. Instead, it passes:

//An array of string literals → Static parts of the template.
//Remaining arguments → The interpolated values (variables inside ${}).