function longestWord(sentence){
     let arrOfString =sentence.split(' ')
    let longest='';
    for(let word of arrOfString ){
        if(word.length>longest.length){
            longest = word
        }
    }
    return longest
}
console.log(longestWord('i am amith'))