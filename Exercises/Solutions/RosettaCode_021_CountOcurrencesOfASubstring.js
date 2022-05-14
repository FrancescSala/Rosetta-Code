function countSubstring(str, subStr) {
    let counter = 0;
    let from = 0;
    let j = str.indexOf(subStr,from);
    while( j !== -1) {
        counter++;
        from = j + subStr.length;
        j = str.indexOf(subStr,from);
    }
    return counter;
}

console.log(countSubstring("the three truths", "th"));      // should return 3.
console.log(countSubstring("ababababab", "abab"));          // should return 2.
console.log(countSubstring("abaabba*bbaba*bbab", "a*b"));   // should return 2.
