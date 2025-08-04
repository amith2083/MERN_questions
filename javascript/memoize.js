// Define the memoize function first
function memoize(fn) {
  let cache = {};
  return function (a, b) {
    const key = `${a},${b}`; // or JSON.stringify([a, b])
    if (cache[key]) {
      console.log("cached result");
      return cache[key];
    } else {
      console.log("initial");
      const result = fn(a, b);
      cache[key] = result;
      return result;
    }
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
