function maxCombine(xs) {
    if (!Array.isArray(xs)) throw TypeError('xs should be an array');
    if (xs.findIndex(elem => isNaN(elem)) !== -1) TypeError('xs should contain only positive (or zero) integers');
    if (xs.findIndex(n => !Number.isInteger(n) || n < 0) !== -1) TypeError('xs should contain only positive (or zero) integers');

    const sortOrder = (a,b) => {
        let sa = a.toString();
        let sb = b.toString();
        if (a === b) return 0;
        if (sb.startsWith(sa) && sb[sa.length] > sb[0]) return 1;
        if (sb.startsWith(sa) && sb[sa.length] <= sb[0]) return -1;
        if (sa.startsWith(sb) && sa[sb.length] > sa[0]) return -1;
        if (sa.startsWith(sb) && sa[sb.length] <= sa[0]) return 1;
        if (sa > sb) return -1;
        return 1;
    };
    // return Number(xs.sort().reverse().join('')); // sorted lexicografically, descending
     return Number(xs.sort(sortOrder).join(''));
}

console.log(maxCombine([1, 3, 3, 4, 55])); // should return 554331.
console.log(maxCombine([71, 45, 23, 4, 5])); // should return 71545423.
console.log(maxCombine([14, 43, 53, 114, 55])); // should return 55534314114.
console.log(maxCombine([1, 34, 3, 98, 9, 76, 45, 4])); // should return 998764543431.
console.log(maxCombine([54, 546, 548, 60])); // should return 6054854654.