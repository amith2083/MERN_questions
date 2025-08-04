function sumArray(arr) {
    // Base case: if array is empty, return 0
    if (arr.length === 0) return 0;
  
    // Recursive case: add first element and call sumArray on the rest
    return arr[0] + sumArray(arr.slice(1));
  }
  