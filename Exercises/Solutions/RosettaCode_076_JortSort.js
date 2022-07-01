function jortsort(array) {
    let A = JSON.parse(JSON.stringify(array)); // deep copy of the array
    A = A.sort((a,b) => a-b); // sort ascdending
    return array.every((elem, index) => A[index] === elem); // comparison
}

/*
console.log(jortsort([1,2,3,4,5])); // should return true.
console.log(jortsort([1,2,13,4,5])); // should return false.
console.log(jortsort([12,4,51,2,4]));  // should return false.
console.log(jortsort([1,2]));  // should return true.
console.log(jortsort([5,4,3,2,1]));  // should return false.
*/
