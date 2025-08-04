//using reduce
function largestOdd(arr) {
    return arr.reduce((max, num) => {
        return (num % 2 !== 0 && num > max) ? num : max;
    }, -Infinity); // Start with the smallest possible number
}

const numbers = [10, 15, 21, 8, 33, 42, 39];
console.log(largestOdd(numbers)); // Output: 39