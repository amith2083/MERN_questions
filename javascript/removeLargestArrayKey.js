const data = {
    a: [1, 2, 3],
    b: [10, 20, 30],
    c: [5, 15, 25]
};


function removeLargestArrayKey(obj) {
    let maxNum = -Infinity;
    let keyToRemove = null;

    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            const maxInArray = Math.max(...obj[key]);
            if (maxInArray > maxNum) {
                maxNum = maxInArray;
                keyToRemove = key;
            }
        }
    }

    if (keyToRemove) {
        delete obj[keyToRemove];
    }

    return obj;
}

console.log(removeLargestArrayKey(data))