function primeGenerator(num, showPrimes) {
    const _isPrime = (x) => {
        if (x === 1) return false;
        let limit = Math.floor(Math.sqrt(x));
        for (let i = 2; i <= limit; i++)
            if (x % i === 0) return false;
        return true;
    };

    const _showNFirstPrimes = (n) => {
        let primes = [];
        let i = 2;
        while (primes.length < n) {
            if (_isPrime(i)) primes.push(i);
            i++
        }
        return primes;
    };

    const _showPrimesInRange = (a,b) => {
        let primes = [];
        for (let i = a; i <= b; i++)
            if (_isPrime(i)) primes.push(i);
        return primes;
    };

    const _countPrimesInRange = (a,b) => {
        let counter = 0;
        for (let i = a; i <= b; i++)
            if (_isPrime(i)) counter++;
        return counter;
    };

    const _showNthessimPrime = (n) => {
        let counter = 0;
        let i = 2;
        while (counter < n)
            if (_isPrime(i++)) counter++;
        return --i;
    } 

    if (showPrimes && Number.isInteger(num)) return _showNFirstPrimes(num);
    if (showPrimes && Array.isArray(num)) return _showPrimesInRange(num[0],num[1]);
    if (!showPrimes && Array.isArray(num)) return _countPrimesInRange(num[0],num[1]);
    if (!showPrimes && Number.isInteger(num)) return _showNthessimPrime(num);
}

console.log(primeGenerator(20, true)); // should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71].
console.log(primeGenerator([100, 150], true)); // should return [101, 103, 107, 109, 113, 127, 131, 137, 139, 149].
console.log(primeGenerator([7700, 8000], false)); // should return 30.
console.log(primeGenerator(10000, false)); // should return 104729.
