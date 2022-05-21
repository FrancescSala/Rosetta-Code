function longestString(strings) {
    let longest = [];
    let maxL = 0;
    for (let i = 0; i < strings.length; i++) {
        let l = strings[i].length;
        if (l > maxL) {
            longest = [];
            maxL = l;
        }
        if (l === maxL) 
            longest.push(strings[i]);
    }
    return longest;
}

console.log(longestString(["a", "bb", "ccc", "ee", "f", "ggg"])); // should return ["ccc", "ggg"].
console.log(longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])); // should return ["afedg", "sdccc", "efdee", "geegg"].
console.log(longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])); // should return ["bhghgb", "fssdrr"].
console.log(longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])); // should return ["ahgfhg", "bdsfsb", "ggdsfg"].
console.log(longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])); // should return ["gzzzgg"].
