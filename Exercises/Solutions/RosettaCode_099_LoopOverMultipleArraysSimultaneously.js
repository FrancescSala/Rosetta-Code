function loopSimult(A) {
    if (!Array.isArray(A)) throw Error('A should be an array');
    if (A.some(elem => !Array.isArray(elem))) throw Error('All elements in A should be arrays');
    if (A.some(elem => elem.length !== A[0].length)) throw Error('All elements in A should be arrays of the same length');

    let result = Array(A[0].length).fill('');
    for (let i = 0; i < result.length; i++) 
        for (let j = 0; j < A.length; j++)
            result[i] += A[j][i];
    return result;
}

console.log(loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])); // should return ["aA1", "bB2", "cC3"].
console.log(loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])); // should return ["c47", "b57", "cC3"].
console.log(loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])); // should return ["aA1", "bB2", "cC3", "dd4"].
console.log(loopSimult([["a", "b"], ["A", "B"], [1, 2]])); // should return ["aA1", "bB2"].
console.log(loopSimult([["b", "c"], ["B", "C"], [2, 3]])); // should return ["bB2", "cC3"].
