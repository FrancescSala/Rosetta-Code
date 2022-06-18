function cramersRule(matrix, freeTerms) {
    if (!Array.isArray(matrix)) throw Error('matrix should be an array');
    if (matrix.some(elem => !Array.isArray(elem))) throw Error('matrix should be an array of arrays');
    let n = matrix.length;
    if (matrix.some(elem => elem.length != n)) throw Error('matrix should be an square matrix');
    if (matrix.flat().some(elem => isNaN(elem))) throw Error('matrix should be a matrix of numbers');
    if (!Array.isArray(freeTerms)) throw Error('freeTerms should be an array');
    if (freeTerms.length != n) throw Error('freeTerms length does not match with matrix length');
    if (freeTerms.some(elem => isNaN(elem))) throw Error('freeTerms should be an array of numbers');
    

    // calculates the determinant of a square matrix m
    function _det(m) {
        if (m.length === 2) return m[0][0]*m[1][1] - m[0][1]*m[1][0];
        // otherwise, develop it by first row
        return m[0].reduce((accum, elem, index) => {
            let mprime = m.filter((elem, index) => index !== 0);
            for (let i = 0; i < mprime.length; i++) 
                mprime[i] = mprime[i].filter((elem, ind) => index !== ind);
            return accum + Math.pow(-1,index) * elem * _det(mprime); 
        },0);
    }

    let den = _det(matrix);
    let res = Array(freeTerms.length);
    for (let i = 0; i < freeTerms.length; i++) {
        let matrix2 = JSON.parse(JSON.stringify(matrix));
        for (let j = 0; j < freeTerms.length; j++) 
            matrix2[j][i] = freeTerms[j];
        let num = _det(matrix2);
        res[i] = num / den;
    }
    return res;
}
