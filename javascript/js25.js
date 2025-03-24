const person = {
    name: 'kirandeep',
    hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
    hobbies.push(hobby);
    return hobbies;
}

addHobby('running', []); // Call 1
addHobby('dancing'); // Call 2
addHobby('baking', person.hobbies); // Call 3

console.log(person.hobbies);  // ['coding', 'dancing', 'baking']
//✅ The first call did not modify person.hobbies because it used a separate empty array [].
//✅ The second and third calls modified person.hobbies because they either used the default value (person.hobbies) or explicitly passed it.