function sumMults(n) {
    let sum = 0;
    for (let i = 1;i < n; i++) 
        if(i % 3 === 0 || i % 5 === 0) sum += i;   // add up the multiples of 3 or 5
    return sum;
}

console.log(sumMults(10));      // should return 23.
console.log(sumMults(100));     // should return 2318.
console.log(sumMults(1000));    // should return 233168.
console.log(sumMults(10000));   // should return 23331668.
console.log(sumMults(100000));  // should return 2333316668