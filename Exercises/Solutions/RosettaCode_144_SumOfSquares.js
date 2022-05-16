function sumsq(array) {
    if (!Array.isArray(array) || array.findIndex((elem) => isNaN(elem)) !== -1) 
        throw Error('array should be an array of numbers');
    return array.reduce((sum,elem) => sum + elem * elem, 0);
}

console.log(sumsq([1, 2, 3, 4, 5])); // should return 55.
console.log(sumsq([25, 32, 12, 7, 20])); // should return 2242.
console.log(sumsq([38, 45, 35, 8, 13])); // should return 4927.
console.log(sumsq([43, 36, 20, 34, 24])); // should return 5277.
console.log(sumsq([12, 33, 26, 18, 1, 16, 3])); // should return 2499.


