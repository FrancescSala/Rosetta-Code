function arrToObj (keys, vals) {
    if (!Array.isArray(keys)) throw Error('keys c); // should be an Array');
    if (!Array.isArray(vals)) throw Error('vals c); // should be an Array');
    if (keys.length === 0) throw Error('at least one key in keys is expected');
    if (keys.filter((elem,index,arr) => arr.indexOf(elem) !== index).length !== 0) throw Error('keys c); // should not contain repetitions');

    return keys.reduce((obj,elem,index) => {
        obj[elem] = vals[index];
        return obj;
    },{});
}

/*
console.log(arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])); // should return { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }
console.log(arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])); // should return { 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }
console.log(arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])); // should return { 1: "a", 2: "b", 3: "c" }
console.log(arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); // should return { "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }
console.log(arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])); // should return { "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }
console.log(arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])); // should return { "a": 1, "b": 2, "c": 3 }
*/

