function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    return arr1.every((value, index) => value === arr2[index]);
  }



  function arraysHaveSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
  
    return sorted1.every((val, i) => val === sorted2[i]);
  }
  