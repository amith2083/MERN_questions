// Define the memoize function first
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Fetching from cache:", key);
            return cache.get(key);
        }
        console.log("Computing result:", key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}








function sum(a, b) {
    return a + b;
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(5, 3)); // ✅ Computes and caches result (5 + 3 = 8)
console.log(memoizedSum(5, 3)); // ✅ Fetches from cache (No computation)
console.log(memoizedSum(7, 2)); // ✅ Computes and caches result (7 + 2 = 9)
console.log(memoizedSum(7, 2)); // ✅ Fetches from cache (No computation)
