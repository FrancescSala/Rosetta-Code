function leftFactorial(n) {

    // an iterative implementation of factorial
    function _factorial(n) {
        let f = 1;
        for (let i = 1; i<= n; i++) f*= i;
        return f;
    }

    // an iterativeimplementation of left factorial
    function _leftFactorial(n) {
        let lf = 0;
        for (let k = 0; k < n; k++) lf += _factorial(k);
        return lf;
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