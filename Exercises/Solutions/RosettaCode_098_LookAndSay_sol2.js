function lookAndSay(str) {
    if (str === '') return '';
    // example: for str = 1211,  freqs will be [[1,1], [1,2], [2,1]] 
    // each pair is [frequency of digit, digit]
    let freqs = str.split('').reduce((accum,elem) => {
        if (elem === accum.at(-1)[1]) accum.at(-1)[0]++;
        else accum.push([1,elem]);
        return accum;
    },[[0,str[0]]]);
    return freqs.flat().join('');
}

/*
  ATTENTION!!: Here I was assuming executing in an environment with a Javascript version supporting 
  Arrat.prototype.at()
  If it is not the case, can replace accum.at(-1) with indexing accum[accum.length-1]
*/

console.log(lookAndSay("1")); // should return "11".
console.log(lookAndSay("11")); // should return "21".
console.log(lookAndSay("21")); // should return "1211".
console.log(lookAndSay("1211")); // should return "111221".
console.log(lookAndSay("3542")); // should return "13151412".
console.log(lookAndSay("")); // should return "".
