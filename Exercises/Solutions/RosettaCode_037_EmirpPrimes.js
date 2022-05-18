function emirps(n, range = false) {

    function _isEmirpPrime(n) {
        let r = _reverse(n);
        if (n === r) return false;
        return (_isPrime(n) && _isPrime(r));
    }

    function _isPrime(n) {
        if (n === 1) return false;
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
            if (n % i === 0) return false;
        return true;
    }

     function _reverse(n) {
         // convert to string, reverse the string and convert to number again
         // (note: it could have been done in a different way)
        return n.toString().split('').reverse().join('');
     }
     function _allEmirpPrimesInRange(a,b) {
        let ep = [];
        for (let i = Math.max(a,13); i <= b; i++)
            if (_isEmirpPrime(i)) ep.push(i);
        return ep;
     }

    function _nFirstEmirpPrimes(n) {
        let ep = [];
        let i = 13;             // start at 13 (the first emirp prime) to save some time
        while (ep.length < n) {
            if (_isEmirpPrime(i)) ep.push(i);
            i++;
        }
        return ep;
    }
 
    function _countEmirpPrimesInRange(a,b){
        let counter = 0;
        for (let i = Math.max(a,13); i<= b; i++)
            if (_isEmirpPrime(i)) counter++;
        return counter;
    }

    function _nthEmirpPrime(n) {
        let counter = 0;
        let i = 13;             // start at 13 (the first emirp prime) to save some time
        while (counter < n) {
            if (_isEmirpPrime(i)) counter++;
            i++;
        }
        return --i;

    } 
     if (range && Array.isArray(n)) return _allEmirpPrimesInRange(n[0],n[1]);
     if (range && !Array.isArray(n)) return _nFirstEmirpPrimes(n);
     if (!range && Array.isArray(n)) return _countEmirpPrimesInRange(n[0],n[1]);
     return _nthEmirpPrime(n);
}

console.log(emirps(20,true)); // should return [13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]
console.log(emirps(1000)); // should return 70529
console.log(emirps([7700,8000],true)); // should return [7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]
console.log(emirps([7700,8000],false)); // should return 11


