function combinations(possibleNumbers, total) {

    function _isValid(combination) {
        return ((combination[0] !== combination[1] && combination[1] !== combination[2] && combination[0] !== combination[2]) &&
                (combination[0] % 2 === 0) && (combination.reduce((sum,elem) => sum + elem,0) === total));
    }

    if (possibleNumbers.length < 3) return [];
    let result = [];
    for (let i = 0; i < possibleNumbers.length; i++)
        for (let j = 0; j < possibleNumbers.length; j++)
            for (let k = 0; k < possibleNumbers.length; k++) {
                let comb = [possibleNumbers[i], possibleNumbers[j], possibleNumbers[k]];
                if (_isValid(comb)) result.push(comb);
            }
    return result;
}

console.log(combinations([1, 2, 3, 4, 5, 6, 7], 12));


