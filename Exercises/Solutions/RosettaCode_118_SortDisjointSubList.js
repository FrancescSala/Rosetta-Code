function sortDisjoint(values, indices) {

    let ind = Array.from(indices).sort((a,b) => a-b);
    let v = values.filter((elem,index) => ind.includes(index)).sort((a,b)=> a-b);
    let result = Array.from(values);
    for (let i = 0; i < ind.length;i++) 
        result[ind[i]] = v[i];
    return result;
}

/*
console.log(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])); // return [7, 0, 5, 4, 3, 2, 1, 6].
console.log(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])); // return [7, 1, 2, 4, 3, 5, 6, 0].
console.log(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])); // return [8, 1, 6, 5, 4, 3, 2, 7].
console.log(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])); // return [8, 2, 6, 3, 4, 5, 7, 1].
console.log(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])); // return [6, 1, 7, 1, 3, 5, 6].
*/
