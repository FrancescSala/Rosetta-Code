// Quite a dirty solution. For sure can be done better, eaiser, and more elegant and efficient.
// But it works.
function spiralArray(n) {
    if (isNaN(n) || !Number.isInteger(n) || n <=0 ) throw Error('n should be a positive integer');
    let spiral = [];
    for (let i = 1; i <= n; i++) spiral.push(Array(n));
   
    let value = 0;
    let baselineRU = 0;
    let baselineDL = n-1;
    while (value <= n**2 - 1) {
        let step = 1;
        let from = baselineRU;
        let to = baselineDL;
        for (let i = from; i <= to; i+= step) 
            if (spiral[baselineRU][i] === undefined) spiral[baselineRU][i] = value++;  // right
        from++; 
        for (let i = from; i <= to; i+= step) 
            if (spiral[i][baselineDL] === undefined) spiral[i][baselineDL] = value++;  // down
        if (value > n**2 - 1) break;
        from = to-1; // to = n;
        to=0;
        step = -1
        for (let i = from; i >= to; i+= step) 
            if (spiral[baselineDL][i] === undefined) spiral[baselineDL][i] = value++;  // left
        if (value > n**2 - 1) break;
        from = n-2-baselineRU;
        to = baselineRU+1;
        for (let i = from; i >= to; i+= step) 
            if (spiral[i][baselineRU] === undefined) spiral[i][baselineRU] = value++;  // up  
        baselineRU++;
        baselineDL--;
    }
    return spiral;
}

/*
console.log(spiralArray(3)); // should return [[0, 1, 2],[7, 8, 3],[6, 5, 4]].
console.log(spiralArray(4)); // should return [[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]].
console.log(spiralArray(5)); // should return [[0, 1, 2, 3, 4],[15, 16, 17, 18, 5],[14, 23, 24, 19, 6],[13, 22, 21, 20, 7],[12, 11, 10, 9, 8]].
*/
