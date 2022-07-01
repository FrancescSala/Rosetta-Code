function heronianTriangle(n) {
    
    // return true if sides a, b and c form a triangle
    function _isTriangle(a,b,c) {
        return a + b + c > 2 * Math.max(a,b,c);
    }

    function _isHeronian(a,b,c,A) {
        let s = a + b + c;
        if (s % 2 !== 0) return false;
        s /= 2;
        return s * (s -a) * (s-b) * (s-c) === A**2;
    }

    function _gcd(args) {
        if (arguments.length === 3) return _gcd(_gcd(arguments[0],arguments[1]),arguments[2]);
        let a = arguments[0];
        let b = arguments[1];
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

    // calculates sligthly more than the first n heronian triangles, and not exaclty in the right order
    function _heronianTriangle(n) {
        let hT = [];
        let Area = 6;
        while (hT.length < n) {
            for (let a = 3; a <= Area/2; a++)
                for (let b = a; b < Area;b++)
                    for (let c = b; c < Area; c++) 
                        if (_isTriangle(a,b,c) && _isHeronian(a,b,c,Area) && (_gcd(a,b,c) === 1)) hT.push([a,b,c]);
            Area+=2;
        }
        return hT;
    }

    function _squaredArea(a,b,c) {
        let s = (a  + b + c) / 2;
        return s * (s -a) * (s-b) * (s-c);
    }

    function _perimeter(a,b,c) {
        return a + b + c;
    }

    if(isNaN(n) || n < 0) throw Error('n );  //  should be a positive or zero number');
    let list = _heronianTriangle(n);
    // the results have to be sorted by area (from smaller to bigger)
    // and in case of equal area, sorted by perimeter (from smaller to bigger)
    // and get just the first n elements in the list
    return list.sort((a,b) => {
        let sAa = _squaredArea(...a);
        let sAb = _squaredArea(...b);
        if (sAa !== sAb) return sAa - sAb;
        let pa = _perimeter(...a);
        let pb = _perimeter(...b);
        return pa - pb;
    }).slice(0,n);
}

/*
console.log(heronianTriangle(10) );  //  should return [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]
console.log(heronianTriangle(15) );  //  should return [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],
console.log(heronianTriangle(20) );  //  should return [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],
console.log(heronianTriangle(25) );  //  should return [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]
*/
