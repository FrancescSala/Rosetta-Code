function amicablePairsUpTo(maxNum) {
 
    function _properDivisors(m) {
        let pd = [1];
        let limit = Math.floor(Math.sqrt(m));
        for(let i = 2; i<=limit;i++)
            if (m % i === 0) {
                pd.push(i);
                pd.push(m / i);
            }
        if (m  === limit * limit) pd.pop();
        return pd;
    }

    let pairs = [];
    for (let m = 1; m<=maxNum; m++) {
        let pdm = _properDivisors(m);
        let n = pdm.reduce((sum,curr) => sum + curr,0); // make n to be the sum of proper divisors; n is the CANDIDATE pair of m
        if (n > m) {   // not to duplicate pairs
            let pdn = _properDivisors(n);
            let sn = pdn.reduce((sum,curr) => sum + curr,0);
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
