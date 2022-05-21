// as solution 1, but with an order-comparison function more clear, less confuse
function maxCombine(xs) {
    if (!Array.isArray(xs)) throw TypeError('xs should be an array');
    if (xs.findIndex(elem => isNaN(elem)) !== -1) TypeError('xs should contain only positive (or zero) integers');
    if (xs.findIndex(n => !Number.isInteger(n) || n < 0) !== -1) TypeError('xs should contain only positive (or zero) integers');

    const sortOrder = (a,b) => {
        let sa = a.toString();
        let sb = b.toString();
        return  (sb+sa) - (sa+sb);   // the + are concatenating strings. When doing - the strings are converted into integers
    };
    return Number(xs.sort(sortOrder).join(''));
}

console.log(maxCombine([1, 3, 3, 4, 55])); // should return 554331.
console.log(maxCombine([71, 45, 23, 4, 5])); // should return 71545423.
console.log(maxCombine([14, 43, 53, 114, 55])); // should return 55534314114.
console.log(maxCombine([1, 34, 3, 98, 9, 76, 45, 4])); // should return 998764543431.
console.log(maxCombine([54, 546, 548, 60])); // should return 6054854654.