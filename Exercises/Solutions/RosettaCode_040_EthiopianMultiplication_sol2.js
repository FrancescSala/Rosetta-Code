// As solution 1, but without using arrays
function eth_mult(a, b) {
    // arrow functions this time
    const _double = (n) => 2 * n;
    const _halve = (n) => Math.floor(n/2);
    const _isEven = (n) => n % 2 === 0;

    let m = Math.min(a,b); // m is the one we halve, let's take the smallest to iterate less
    let n = Math.max(a,b);
    let mult = 0;
    while (m >= 1) {
        if (!_isEven(m)) mult += n;
        m = _halve(m);
        n = _double(n);
    }
    return mult;
}

console.log(eth_mult(17,34)); // should return 578.
console.log(eth_mult(23,46)); // should return 1058.
console.log(eth_mult(12,27)); // should return 324.
console.log(eth_mult(56,98)); // should return 5488.
console.log(eth_mult(63,74)); // should return 4662.