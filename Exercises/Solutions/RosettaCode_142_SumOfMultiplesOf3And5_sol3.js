// instead of generating all summands and making additions, this can be calculated with formulas 
// (of finite series). This is the most efficient when n is a big number, because it is O(1) - constant order -
function sumMults(n) {
    
    function _sumMult(n,base) {
        let sum = 0;
        let upper = Math.floor(n/base);
        if (Number.isInteger(n/base)) upper--;
        return base * (upper * (upper+1) / 2);
    }
    return _sumMult(n,3) + _sumMult(n,5) - _sumMult(n,15);
}

console.log(sumMults(10));      // should return 23.
console.log(sumMults(100));     // should return 2318.
console.log(sumMults(1000));    // should return 233168.
console.log(sumMults(10000));   // should return 23331668.
console.log(sumMults(100000));  // should return 2333316668