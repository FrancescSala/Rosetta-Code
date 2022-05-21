function longestString(strings) {
    let maxL = strings.reduce((mL, elem) => (mL < elem.length) ? elem.length : mL,0);
    return strings.filter(elem => elem.length === maxL);
}

console.log(longestString(["a", "bb", "ccc", "ee", "f", "ggg"])); // should return ["ccc", "ggg"].
console.log(longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])); // should return ["afedg", "sdccc", "efdee", "geegg"].
console.log(longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])); // should return ["bhghgb", "fssdrr"].
console.log(longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])); // should return ["ahgfhg", "bdsfsb", "ggdsfg"].
console.log(longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])); // should return ["gzzzgg"].
