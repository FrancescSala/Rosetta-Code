function zeckendorf(n) {
    if (isNaN(n) || !Number.isInteger(n) || n < 0) throw Error('n should be a natural number or zero');

    // generates the terms of fibonnacci sequence until the first number > n
    // and returns them, reversed, as an array
    function _fibonacci(n) {
        let seq = [1,2];
        let j = 1;
        let k;
        do {
            k = seq[j] + seq[j-1];
            seq.push(k);
            j++; 
        } while (k<n);
        return seq.reverse();
    }
 
    let terms = _fibonacci(n);
    // after looking for the fibonacci terms, now look for the quoficients of each one and put them in result
    let remains = n;
    let result = 0;
    for (let i = 0; i < terms.length;i++) {
        result *= 10; // initially add a zero
        if (terms[i] <= remains) {
            result++;   // if taking that term convert the just added zero into a one
            remains -= terms[i];
        }
    }
    return result;
}

console.log(zeckendorf(0)); // should return 0.
console.log(zeckendorf(1)); // should return 1.
console.log(zeckendorf(2)); // should return 10.
console.log(zeckendorf(3)); // should return 100.
console.log(zeckendorf(4)); // should return 101.
console.log(zeckendorf(5)); // should return 1000.
console.log(zeckendorf(6)); // should return 1001.
console.log(zeckendorf(7)); // should return 1010.
console.log(zeckendorf(8)); // should return 10000.
console.log(zeckendorf(9)); // should return 10001.
console.log(zeckendorf(10)); // should return 10010.
console.log(zeckendorf(11)); // should return 10100.
console.log(zeckendorf(12)); // should return 10101.
console.log(zeckendorf(13)); // should return 100000.
console.log(zeckendorf(14)); // should return 100001.
console.log(zeckendorf(15)); // should return 100010.
console.log(zeckendorf(16)); // should return 100100.
console.log(zeckendorf(17)); // should return 100101.
console.log(zeckendorf(18)); // should return 101000.
console.log(zeckendorf(19)); // should return 101001.
console.log(zeckendorf(20)); // should return 101010.

