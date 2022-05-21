function longestString(strings) {
    return strings.reduce((accum, elem) => {
        console.log(accum, ' - ', elem);
        if (elem.length > accum[0]) return [elem.length,[elem]];
        if (elem.length === accum[0]) accum[1].push(elem);
        return accum;
    },[0,[]])[1];
}

console.log(longestString(["a", "bb", "ccc", "ee", "f", "ggg"])); // should return ["ccc", "ggg"].
console.log(longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])); // should return ["afedg", "sdccc", "efdee", "geegg"].
console.log(longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])); // should return ["bhghgb", "fssdrr"].
console.log(longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])); // should return ["ahgfhg", "bdsfsb", "ggdsfg"].
console.log(longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])); // should return ["gzzzgg"].
