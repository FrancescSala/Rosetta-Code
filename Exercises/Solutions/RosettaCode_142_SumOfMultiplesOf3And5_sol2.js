// similar to solution 1, but not trying all i, but going directly to  muiltiples of 3 and nultiples of 5
function sumMults(n) {
    let sum = 0;
    for (let i = 3;i < n; i+=3) sum += i;   // add up the multiples of 3
    for (let i = 5;i < n; i+=5) sum += i;   // add up the multiples of 5
    for (let i = 15;i < n; i+=15) sum -= i; // substracts the multiples of 15, because have been added twice
    return sum;
}

console.log(sumMults(10));      // should return 23.
console.log(sumMults(100));     // should return 2318.
console.log(sumMults(1000));    // should return 233168.
console.log(sumMults(10000));   // should return 23331668.
console.log(sumMults(100000));  // should return 2333316668