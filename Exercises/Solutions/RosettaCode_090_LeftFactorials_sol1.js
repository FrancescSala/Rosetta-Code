function leftFactorial(n) {

    // a recursive implementation of factorial
    function _factorial(n) {
        if (n === 0) return 1;
        return n * _factorial(n-1);
    }

    // a recursive implementation of left factorial
    function _leftFactorial(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return _factorial(n-1) + _leftFactorial(n-1);
     }

    if (!Number.isInteger(n) || n < 0 ) throw Error('n should be a positive integer number (or zero)')
    return _leftFactorial(n);
}

console.log(leftFactorial(0)); // should return 0.
console.log(leftFactorial(1)); // should return 1.
console.log(leftFactorial(2)); // should return 2.
console.log(leftFactorial(3)); // should return 4.
console.log(leftFactorial(10)); // should return 409114.
console.log(leftFactorial(17)); // should return 22324392524314.
console.log(leftFactorial(19)); // should return 6780385526348314.