// iterative (non-recursive) version
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) throw Error('n should be a positive integer or zero');
    let fact = 1;
    for (let i =1; i <= n; i++) fact *=i;
    return fact;
}

console.log(factorial(3)); // should return 6.
console.log(factorial(5)); // should return 120.
console.log(factorial(10)); // should return 3,628,800.