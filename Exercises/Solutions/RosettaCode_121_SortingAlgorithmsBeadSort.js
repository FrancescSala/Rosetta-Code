function beadSort(arr) {
    if (!Array.isArray(arr) || arr.some(elem => !Number.isInteger(elem))) throw Error('arr should be an array of Integer');
    if (arr.some(elem => elem <= 0)) throw Error('arr contains negative Integers or zero');
    if (arr.some((elem,index) => arr.indexOf(elem) !== index)) throw Error('arr contains some duplicated value(s)');

    let m = Array(arr.reduce((max,elem) => (elem >= max) ? elem : max)).fill(0);
    arr.forEach(elem => {for (let i = 0; i < elem; i++) m[i]++;});
    let sorted = [];
    m.forEach((elem,index) => {if (index > 0 && m[index-1] !== elem) sorted.push(index);});
    sorted.push(m.length);
    return sorted;

    // NOTE: This can be slightly modified to allow zero to be also an element of arr
}

/*
console.log(beadSort([25, 32, 12, 7, 20])); // should return [7, 12, 20, 25, 32].
console.log(beadSort([38, 45, 35, 8, 13])); // should return [8, 13, 35, 38, 45].
console.log(beadSort([43, 36, 20, 34, 24])); // should return [20, 24, 34, 36, 43].
console.log(beadSort([12, 33, 26, 18, 1, 16, 38])); // should return [1, 12, 16, 18, 26, 33, 38].
console.log(beadSort([3, 39, 48, 16, 1, 4, 29])); // should return [1, 3, 4, 16, 29, 39, 48].
*/
