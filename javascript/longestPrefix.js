function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0]; // take first string as reference

  for (let i = 1; i < strs.length; i++) {
    // shrink prefix until it matches
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   // ""
