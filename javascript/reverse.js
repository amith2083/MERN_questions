function reverseString(str) {
    // Base case: if string is empty or has one character
    if (str.length <= 1) return str;
  
    // Recursive case: reverse rest of the string and add first char at the end
    return reverseString(str.slice(1)) + str[0];
  }
  