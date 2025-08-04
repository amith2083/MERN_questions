function findUniqueWithSet(str) {
    let seen = new Set();
    let repeated = new Set();
    
    for (let char of str) {
        if (seen.has(char)) {
            repeated.add(char);
        }
        seen.add(char);
    }
    console.log(seen)
    console.log(repeated)

    return [...seen].filter(char => !repeated.has(char));
}

// Example
console.log(findUniqueWithSet("programming")); // Output: ['p', 'o', 'a', 'i']
