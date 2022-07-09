function LCM(A) {
    if (!Array.isArray(A)) throw Error('A should be an array');
    if (A.length < 2) throw Error('A should have at least two elements');
    if (A.some(elem => !Number.isInteger(elem))) throw Error('Elements in A should be Integer');
    return _LCM(A);

    function _LCM(A) {
        if (A.length === 2) {
            let [a,b] = A;
            if (a === 0 || b === 0) return 0;
            return Math.abs(a * b) / gcd(Math.abs(a),Math.abs(b));
        }
        // A has more than just two element s
        let x = _LCM(A.slice(0,2)); // lcm of the two first integers in A
        return _LCM([x,A.slice(2)].flat()); // combine with the rest of A
    }

    function gcd(a, b) {
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
    
}

console.log(LCM([2, 4, 8])); // should return 8.
console.log(LCM([4, 8, 12])); // should return 24.
console.log(LCM([3, 4, 5, 12, 40])); // should return 120.
console.log(LCM([11, 33, 90])); // should return 990.
console.log(LCM([-50, 25, -45, -18, 90, 447])); // should return 67050.

