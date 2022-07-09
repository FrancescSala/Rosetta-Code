function check_mersenne(p) {

    function _isPrime(p) {
        if (p === 1) return false;
        let x = Math.ceil(Math.sqrt(p));
        for (let i = 2; i <= x ; i++)
            if (p % i === 0) return false;
        return true;
    }

    // check if m is a factor of 2^p -1  (where p is a prime number). Return true if m is a factor;, false otherwise
    function _mersenneTest(p,m) {
        let exp = p.toString(2);
        let square = 1;
        for (let i=0; i < exp.length; i++) {
            square *= square;
            if (exp[i] === '1') square *= 2;
            square %= m;
        }
        return (square === 1);        
    }

    if (isNaN(p) || p <= 0 || !_isPrime(p)) throw Error('p should be a positive prime number');
    let prime = true;
    let j;
    for (let q = 3; q<= Math.sqrt(2**p - 1); q+=2){
        j =(q - 1) / (2 * p);
        if ( j !== Math.floor(j)) continue;
        j = q % 8;
        if (j !== 1 && j !== 7) continue;
        j = q;
        if (_mersenneTest(p,q)) { prime = false; break;}
    }

    return 'M'+ p + ' = 2^' + p +'-1 is ' + ((prime) ? 'prime' : ('composite with factor ' + j));
}

/*
console.log(check_mersenne(3)); // should return the string M3 = 2^3-1 is prime.
console.log(check_mersenne(23)); // should return the string M23 = 2^23-1 is composite with factor 47.
console.log(check_mersenne(929)); // should return the string M929 = 2^929-1 is composite with factor 13007.
*/
