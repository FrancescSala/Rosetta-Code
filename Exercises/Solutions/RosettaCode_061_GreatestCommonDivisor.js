function gcd(a, b) {
    if (!Number.isInteger(a) || a <= 0) throw Error('a should be a positive integer');
    if (!Number.isInteger(b) || b <= 0) throw Error('b should be a positive integer');

    if (a === b) return a;
    let x = Math.min(a,b);
    let y = Math.max(a,b);
    if (y % x === 0) return x;
    let limit = Math.floor(Math.sqrt(x));
    let m = 1;
    for (let i = 2; i <= limit; i++) {
        let j = Math.max(i,x/i);
        if (x % j === 0 && y % j === 0 && j > m) m = j;
        if (x % i === 0 && y % i === 0 && i > m) m = i;
    }
    return m;
}

/*
console.log(gcd(24,36)); // should return 12.
console.log(gcd(30,48)); // should return 6.
console.log(gcd(10,15)); // should return 5.
console.log(gcd(100,25)); // should return 25.
console.log(gcd(13,250)); // should return 1.
console.log(gcd(1300,250)); // should return 50.
console.log(gcd(6,8)); // should return 2.
*/