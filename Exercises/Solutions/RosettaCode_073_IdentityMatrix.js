
function idMatrix(n) {
    if (!Number.isInteger(n) || n <= 0) throw Error('n should be a positive integer');
    let matrix = [];
    for(let i = 0; i < n; i++) {
        matrix.push(Array(n).fill(0));
        matrix[i][i] = 1;
    }
    return matrix;
}

console.log(idMatrix(1));
console.log(idMatrix(2));
console.log(idMatrix(3));
console.log(idMatrix(4));
