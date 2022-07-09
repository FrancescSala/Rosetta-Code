function ludic(n) {
    if (isNaN(n) || n < 0 || Math.floor(n) !== n) throw Error('n should be a natural number');
    let L = (n === 0) ? [] : [1];
    let candidates = Array.from(Array(n+1).keys()).slice(2); // [2,3,...,n]
    while (candidates.length !== 0) {
        let l = candidates[0]; 
        L.push(l);
        candidates = candidates.filter((elem,index) => index % l !== 0);
    }
    return L;
}

console.log(ludic(0)); // should return [].
console.log(ludic(1)); // should return [].
console.log(ludic(2)); // should return [1, 2].
console.log(ludic(3)); // should return [1, 2, 3].
console.log(ludic(5)); // should return [1, 2, 3, 5].
console.log(ludic(20)); // should return [1, 2, 3, 5, 7, 11, 13, 17].
console.log(ludic(26)); // should return [1, 2, 3, 5, 7, 11, 13, 17, 23, 25].
