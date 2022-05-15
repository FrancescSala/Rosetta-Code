function equilibrium(a) {
    let eqIndexes = [];
    let total = a.reduce((sum,elem) => sum + elem,0); 
    let s = 0;
    for (let i = 0; i<a.length; i++) {
        if (s === total - a[i]) eqIndexes.push(i);  // s is the sum at indexes < i, total - a[i] is the sum at indexes > i
        s += a[i];
        total -= a[i];
    }
    return eqIndexes;
}

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0])); // should return [3,6].
console.log(equilibrium([2, 4, 6])); // should return [].
console.log(equilibrium([2, 9, 2])); // should return [1].
console.log(equilibrium([1, -1, 1, -1, 1, -1, 1])); // should return [0,1,2,3,4,5,6].
console.log(equilibrium([1])); //should return [0].
console.log(equilibrium([])); // should return [].