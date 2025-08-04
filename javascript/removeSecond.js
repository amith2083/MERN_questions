function removeSecondLast(arr) {
    if (arr.length < 2) return arr; // If the array has less than 2 elements, return as is.

    const index = arr.length - 2; // Second last index
    arr.splice(index, 1); // Remove 1 element at that index
    return arr;
}

// Example Usage
console.log(removeSecondLast([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 5]
console.log(removeSecondLast([10, 20, 30]));    // Output: [10, 30]
console.log(removeSecondLast([100]));           // Output: [100] (no change)
