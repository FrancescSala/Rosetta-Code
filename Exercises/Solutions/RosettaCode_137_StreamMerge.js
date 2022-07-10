function mergeLists(lists) {
    if (!Array.isArray(lists)) throw Error('lists should be an Array');
    if (lists.length < 2) throw Error('lists should have at least two elements');
    if(lists.some(elem => !Array.isArray(elem))) throw Error('lists should be an Array of arrays');
    for (let i = 0; i< lists.length; i++)
        if (lists[i].some(elem => isNaN(elem))) throw Error('lists should be an Array of arrays of numbers');

    function _mergeLists(a,b) {
        let merged = [];
        let i = 0; let j = 0;
        while(i < a.length && j < b.length) merged.push(a[i] <= b[j] ? a[i++] : b[j++]);
        if (i === a.length) 
            while(j < b.length) merged.push(b[j++]);
        else 
            while(i < a.length) merged.push(a[i++]);
        return merged;
    }

    let result = _mergeLists(lists[0], lists[1]);
    for (let i = 2; i < lists.length; i++) 
        result = _mergeLists(result,lists[i]);
    return result;
}


/*
console.log(mergeLists([[1, 3, 5, 9, 10], [2, 4, 6, 7, 8]])); // should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
console.log(mergeLists([[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]])); // should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].
console.log(mergeLists([[1, 3, 9, 14, 15, 17, 28], [7, 8, 14, 14, 23, 26, 28, 29, 30], [9, 23, 25, 29]])); // should return [1, 3, 7, 8, 9, 9, 14, 14, 14, 15, 17, 23, 23, 25, 26, 28, 28, 29, 29, 30].
console.log(mergeLists([[3, 14, 15], [2, 17, 18], [], [2, 3, 5, 7]])); // should return [2, 2, 3, 3, 5, 7, 14, 15, 17, 18].
console.log(mergeLists([[1, 19, 1999], [17, 33, 2999, 3000], [8, 500, 3999]])); // should return [1, 8, 17, 19, 33, 500, 1999, 2999, 3000, 3999].
*/

