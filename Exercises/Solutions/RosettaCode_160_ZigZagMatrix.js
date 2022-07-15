function ZigZagMatrix(n) {
    if (isNaN(n) || !Number.isInteger(n) || n <= 0) throw Error('n should be a natural number');

    let matrix = [];
    for (let i = 0 ; i < n; i++) matrix.push(Array(n));
    let value = 0;
    for (let antidiag = 0; antidiag < 2 * n - 1 ; antidiag++) {
        let adLength = (antidiag < n) ? antidiag + 1 : (2*n - antidiag - 1);
        let startRow;
        let startColumn;
        let step;
        if (antidiag % 2 === 0) {
            step = -1; // movement up
            startRow = Math.min(n-1,antidiag);
            startColumn = antidiag-startRow;
        } else {
            step = 1; // movement down
            startColumn = Math.min(n-1,antidiag);
            startRow = antidiag - startColumn;
        }
        for (let i = 0; i < adLength; i++)
        matrix[startRow + step*i][startColumn - step*i] = value++;
}
    return matrix;
}

/*
console.log(ZigZagMatrix(1)); // should return [[0]].
console.log(ZigZagMatrix(3)); // should return [[0, 1], [2, 3]].
console.log(ZigZagMatrix(5)); // should return specified matrix.
console.log(ZigZagMatrix(6));
*/