function findVowels(str) {
    const vowels = [];
    const vowelSet = "aeiouAEIOU";
  
    for (let char of str) {
      if (vowelSet.includes(char)) {
        vowels.push(char);
      }
    }
  
    return vowels;
  }

  
  function findVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels || []; // return empty array if no vowels
  }
  