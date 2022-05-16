function factors(num) {
    if (!Number.isInteger(num) || num <= 0) throw Error('num must be a positive integer');
    let fList = [1,num];
    let limit = Math.floor(Math.sqrt(num));
    for (let i=2; i <= limit; i++)
        if (num % i === 0) {
            fList.push(i);
            fList.push(num/i);
        }
    if (num === limit * limit) fList.pop();
    return _quickSort(fList);   // don't do fList.sort() because that sorts in lexicographical order 
                                // (converts the integers to strings, and then sort the strings)

    function _quickSort(array) {
        if (array.length <= 1) return array;
        const pivot = array[0];
        let below = [], equal = [], above = [];
        for (let v of array) 
          if (v < pivot) below.push(v);
          else if (v === pivot) equal.push(v);
          else above.push(v);
        // this iteration of array could have been done also
        // with indexes, or with .forEach, or with .map
        // Just a matter of preference
        return _quickSort(below).concat(equal).concat(_quickSort(above));
    }

}

console.log(factors(45)); // should return [1,3,5,9,15,45].
console.log(factors(53)); // should return [1,53].
console.log(factors(64)); // should return [1,2,4,8,16,32,64].