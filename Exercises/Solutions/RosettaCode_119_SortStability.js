function stableSort(arr) {

    return Array.from(arr).sort((x,y) => {
        if (x[1] > y[1]) return 1;
        if (x[1] < y[1]) return -1;
        return 0; // if same value in second column, do not change the order
    });
}

/*
console.log(stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])); // should return [["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]].
console.log(stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])); // return [[2, 2], [1, 2], [1, 4], [1, 5]].
console.log(stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])); // return [[12, 45], [11, 45], [32, 45], [11, 55]].
console.log(stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])); // return [[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]].
console.log(stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])); // return [[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]].
*/
