function sortByKey(arr) {
    if (!Array.isArray(arr)) throw Error('arr should be an Array');
    if (arr.some(elem => !elem.hasOwnProperty('key'))) throw Error('All elements in arr should have property key');

    return Array.from(arr).sort((a,b) => a.key - b.key); // take a copy of arr in order not to modify the argument
}


/*
console.log(sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])); // should return [{key: 1, value: 42}, {key: 2, value: "bar"}, {key: 3, value: "foo"}, {key: 4, value: "baz"}, {key: 5, value: "another string"}].
console.log(sortByKey([{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 20, name: "Alice"}, {key: 5, name: "Harry"}])); // should return [{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 5, name: "Harry"}, {key: 20, name: "Alice"}].
console.log(sortByKey([{key: 2341, name: "Adam"}, {key: 122, name: "Bernie"}, {key: 19, name: "David"}, {key: 5531, name: "Joe"}, {key: 1234, name: "Walter"}])); // should return [{key: 19, name: "David"}, {key: 122, name: "Bernie"}, {key: 1234, name: "Walter"}, {key: 2341, name: "Adam"}, {key: 5531, name: "Joe"}].
*/

