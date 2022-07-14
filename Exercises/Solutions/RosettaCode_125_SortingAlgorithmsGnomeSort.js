function gnomeSort(a) {
    if (!Array.isArray(a) || a.some(elem => isNaN(elem))) throw Exception('a should be an array of numbers');
    
    let b = Array.from(a); // create a copy of the array, not to modify a
    let i = 1;
    let j = 2;
    while (i < b.length) {
        if (b[i-1] <= b[i]) {
            i = j;
            j++;
        } else {
            [b[i-1], b[i]] = [b[i], b[i-1]];
            i--;
            if (i === 0) {
                i = j;
                j++;
            }
        }
    }
    return b;
}

/*
console.log(gnomeSort([25, 32, 12, 7, 20])); // should return [7, 12, 20, 25, 32].
console.log(gnomeSort([38, 45, 35, 8, 13])); // should return [8, 13, 35, 38, 45].
console.log(gnomeSort([43, 36, 20, 34, 24])); // should return [20, 24, 34, 36, 43].
console.log(gnomeSort([12, 33, 26, 18, 1, 16, 38])); // should return [1, 12, 16, 18, 26, 33, 38].
console.log(gnomeSort([3, 39, 48, 16, 1, 4, 29])); // should return [1, 3, 4, 16, 29, 39, 48].
*/

