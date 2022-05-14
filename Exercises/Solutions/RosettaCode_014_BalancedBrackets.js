function isBalanced(str) {
    let opened = 0;
    for(let i = 0; i<str.length;i++) {
        // opened = (str[i] === '[') ? opened + 1 : opened - 1;
        // let's do it like this to allow (and ignore) other characters different from [ and ]
        if (str[i] === '[') opened++;
        else if (str[i] === ']') opened--;
        if (opened < 0) break;
    }
    return opened === 0;
}

console.log(isBalanced(""));  // should return true.

console.log(isBalanced("[]"));  // should return true.
console.log(isBalanced("]][[[][][][]]["));  // should return false.
console.log(isBalanced("[][[[[][][[[]]]]]]")); // should return true.
