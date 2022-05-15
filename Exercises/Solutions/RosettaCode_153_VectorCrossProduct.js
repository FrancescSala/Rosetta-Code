function crossProduct(a, b) {
    if (arguments.length !== 2) return null;
    if(!Array.isArray(a)) return null;
    if(!Array.isArray(b)) return null;
    if (a.findIndex(elem => isNaN(elem)) !== -1) return null;
    if (b.findIndex(elem => isNaN(elem)) !== -1) return null;
    if (a.length !== b.length) return null;
    if(a.length !== 3) return null;
    
    return [a[1]* b[2] - a[2] * b[1],
            a[2] * b[0] - a[0]* b[2],
            a[0]* b[1] - a[1] * b[0]];
}

console.log(crossProduct()); // should return null.
console.log(crossProduct([1, 2, 3], [4, 5, 6])); //  should return [-3, 6, -3].