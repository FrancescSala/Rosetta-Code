function isSemiPrime(n) {
    if (isNaN(n) || !Number.isInteger(n) || n <= 0) throw Error('n should be a natural number');

    console.log(n);
    if (n <= 3) return false;
    let limit = Math.ceil(Math.sqrt(n));
    let divisors = [];
    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) divisors.push(i);
        if (n % i === 0 && n % (n/i) === 0) divisors.push(n/i);
        if (divisors.length > 2) return false;
    }
    return divisors.length === 2;
}

/*
console.log(isSemiPrime(100)); // should return false.
console.log(isSemiPrime(504)); // should return false.
console.log(isSemiPrime(4)); // should return true.
console.log(isSemiPrime(46)); // should return true.
console.log(isSemiPrime(13)); // should return false.
console.log(isSemiPrime(74)); // should return true.
console.log(isSemiPrime(1679)); // should return true.
console.log(isSemiPrime(2)); // should return false.
console.log(isSemiPrime(95)); // should return true.
console.log(isSemiPrime(124)); // should return false.
*/

