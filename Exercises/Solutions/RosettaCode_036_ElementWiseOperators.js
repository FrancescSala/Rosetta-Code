function operation(op, arr1, arr2) {


    function _matrixAddition(arr1,arr2) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] += arr2[i][j];
        return result;
    }

    function _matrixSubstraction(arr1,arr2) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] -= arr2[i][j];
        return result;
    }

    function _scalarAddition(arr1,s) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] += s;
        return result;
    }

    function _matrixMultiplication(arr1,arr2) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] *= arr2[i][j];
        return result;
        // note this is not element-wise; not the usual multiplication of matrices
    }

    function _matrixDivision(arr1,arr2) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] /= arr2[i][j];
        return result;
    }

    function _matrixExponentiation(arr1,arr2) {
        let result = Array.from(arr1);
        for (let i = 0; i < result.length; i++)
            for (let j = 0; j < result[0].length; j++)
                result[i][j] = Math.pow(result[i][j],arr2[i][j]);
        return result;
    }




    switch (op) {
        case 'm_add':
            return _matrixAddition(arr1,arr2);
        case 'm_sub':
            return _matrixSubstraction(arr1,arr2);
        case 's_add':
            return _scalarAddition(arr1,arr2);
        case 'm_mult':
            return _matrixMultiplication(arr1,arr2);
        case 'm_div':
            return _matrixDivision(arr1,arr2);
        case 'm_exp':
            return _matrixExponentiation(arr1,arr2);
                
    }
}

console.log(operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])); // should return [[2,4],[6,8]].
console.log(operation("s_add",[[1,2],[3,4]],2)); // should return [[3,4],[5,6]].
console.log(operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])); // should return [[0,0],[0,0]].
console.log(operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])); // should return [[1,4],[9,16]].
console.log(operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])); // should return [[1,1],[1,1]].
console.log(operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])); // should return [[1,4],[27,256]].
console.log(operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])); // should return [[10,12,14,16],[18,20,22,24]].