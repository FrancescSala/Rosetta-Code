function binom(n, k) {
    if (k > n) throw Error(' n should be greater than or equal to k');

    // Here we could check some trivial cases as (n 0) (n 1) (n n) (n n -1) --- OPTIONAL
    if (k === 0) return 1;
    if (k === 1 || k === n) return n;

    // as (n k) === (n n-k) let's take the case that makes less calculations
    // (and furthermore, it's numerically a better conditioned calculation)
    let x = Math.min(k,n-k);
    let num = 1;
    for (let i = n; i >= n - x +1; i--) num *= i;
    let den = 1;
    for (let i = x; i >= 2; i--) den *= i;
    return num/den;
}

console.log(binom(5,3)); // should return 10.
console.log(binom(7,2)); // should return 21.
console.log(binom(10,4)); // should return 210.
console.log(binom(6,1)); // should return 6.
console.log(binom(12,8)); // should return 495
console.log(binom(150,148));
console.log(binom(150,2));
console.log(binom(3,0));
console.log(binom(3,1));
console.log(binom(3,3));
