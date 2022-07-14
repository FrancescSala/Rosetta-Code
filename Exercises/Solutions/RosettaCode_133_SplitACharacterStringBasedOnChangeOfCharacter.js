function split(str) {
    if (typeof str !== 'string') throw Error('str should be a string');
    if (str === '') return [];
    if (str.length === 1) return [str];
    let split = [];
    let j = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i-1]) {
            split.push(str.substring(j,i));
            j = i;
        }
        if (i=== str.length-1) split.push(str.substring(j));
    }
    return split;
}

/*
console.log(split("hello")); // should return ["h", "e", "ll", "o"]
console.log(split("commission")); // should return ["c", "o", "mm", "i", "ss", "i", "o", "n"].
console.log(split("ssss----====llloooo")); // should return ["ssss", "----", "====", "lll", "oooo"].
console.log(split("sssmmmaaammmaaat")); // should return ["sss", "mmm", "aaa", "mmm", "aaa", "t"].
console.log(split("gHHH5YY++///\\")); // should return ["g", "HHH", "5", "YY", "++", "///", "\\"]
*/
