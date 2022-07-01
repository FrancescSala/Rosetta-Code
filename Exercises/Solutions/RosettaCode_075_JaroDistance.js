function jaro(s, t) {
    let lS = s.length;
    let lT = t.length;
    let maxDist = Math.floor(Math.max(lS,lT)/2) -1; // max distance to consider two characters match
    let m = 0; // number of matching characters
    let mIndt = []; // matching positions in t
    for (let i = 0; i < s.length; i++) {
        let j = t.indexOf(s[i], i - maxDist-1);
        if ( j !== -1 && j < i + maxDist) {
            m++;
            mIndt.push(j);
        } 
    }
    let transp = 0;
    for (let i = 1; i<mIndt.length; i++)
        if (mIndt[i] < mIndt[i-1]) transp++
    //transp /= 2;
    if (m === 0) return 0;
    return (m/lS + m/lT + (m - transp)/m) / 3;
}

/*
console.log(jaro('DWAYNE','DUANE')); // should return 0.8222222222222222
console.log(jaro("MARTHA", "MARHTA") );  // should return 0.9444444444444445.
console.log(jaro("DIXON", "DICKSONX") );  // should return 0.7666666666666666.
console.log(jaro("JELLYFISH", "SMELLYFISH") );  // should return 0.8962962962962964.
console.log(jaro("HELLOS", "CHELLO") );  // should return 0.888888888888889.
console.log(jaro("ABCD", "BCDA") );  // should return 0.8333333333333334.
console.log(jaro("ABCD", "BCDA")); // should return 0.8333333333333334
*/