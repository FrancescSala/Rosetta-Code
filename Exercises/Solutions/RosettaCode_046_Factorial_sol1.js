// recursive version
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) throw Error('n should be a positive integer or zero');
    if (n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(3)); // should return 6.
console.log(factorial(5)); // should return 120.
console.log(factorial(10)); // should return 3,628,800.