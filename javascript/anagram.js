function anagram (str1,str2){
    const sortedStr1 = str1.split('')
    const sortedStr2 = str2.split('')
    return sortedStr1 === sortedStr2
}
console.log(anagram(str1,str2))