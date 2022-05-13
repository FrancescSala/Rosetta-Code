/*  It's the same as solution 1, but 
    1. we do not put the properdivisors in an array, instead calculate the sum directly
    2. when calculating the sum(propDivs(N)), we stop if is already bigger then n
    This way a (small) amount of time is saved.
*/
function amicablePairsUpTo(maxNum) {
 
    function _sumProperDivisors(n, targetSum) {
        let sum = 1;
        let limit = Math.floor(Math.sqrt(n));
        for(let i = 2; i<=limit;i++)
            if (n % i === 0) {
                sum += i + n / i;
                if (sum > targetSum) break;   // if beyond the target sum, no need to continue the calculation
            }
        if (n === limit * limit) sum -= limit;
        return sum;
    }

    let pairs = [];
    for (let m = 1; m<=maxNum; m++) {
        let n = _sumProperDivisors(m);  // make n to be the sum of proper divisors; n is the CANDIDATE pair of m
        if (n > m) {   // not to duplicate pairs
            let sn = _sumProperDivisors(n,m);
            if (sn === m) pairs.push([m,n]);
        }
    }
    return pairs;
}



let t0 = new Date();
console.log(amicablePairsUpTo(3000));
console.log(amicablePairsUpTo(20000));
let t1 = new Date();
console.log(t1 - t0);
