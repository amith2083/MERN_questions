function findSecondLargestEven(arr) {
    let largestEven = -Infinity;
    let secondLargestEven = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Check if the number is even
            if (arr[i] > largestEven) {
                secondLargestEven = largestEven; // Update second largest
                largestEven = arr[i]; // Update largest
            } else if (arr[i] > secondLargestEven && arr[i] < largestEven) {
                secondLargestEven = arr[i]; // Update second largest
            }
        }
    }

    return secondLargestEven === -Infinity ? "No second largest even number" : secondLargestEven;
}

// Example usage
const arr = [10, 15, 7, 12, 6, 8, 20];
console.log(findSecondLargestEven(arr)); // Output: 12
