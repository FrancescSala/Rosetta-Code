function cocktailSort(arr) {
    if (!Array.isArray(arr) || arr.some(elem => isNaN(elem))) throw Error('arr should be an array of numbers');

    let a = Array.from(arr);
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length-1; i++) 
            if (a[i] > a[i+1]) {
                [a[i],a[i+1]] = [a[i+1],a[i]]; // swap elements
                sorted = false;
            }
        if (sorted) break;
        for (let i = arr.length; i > 0; i--) 
            if (a[i] < a[i-1]) {
                [a[i],a[i-1]] = [a[i-1],a[i]]; // swap elements
                sorted = false;
            }

    }
     return a;
}

/*
console.log(cocktailSort([25, 32, 12, 7, 20])); // should return [7, 12, 20, 25, 32].
console.log(cocktailSort([38, 45, 35, 8, 13])); // should return [8, 13, 35, 38, 45].
console.log(cocktailSort([43, 36, 20, 34, 24])); // should return [20, 24, 34, 36, 43].
console.log(cocktailSort([12, 33, 26, 18, 1, 16, 38])); // should return [1, 12, 16, 18, 26, 33, 38].
console.log(cocktailSort([3, 39, 48, 16, 1, 4, 29])); // should return [1, 3, 4, 16, 29, 39, 48].
*/
