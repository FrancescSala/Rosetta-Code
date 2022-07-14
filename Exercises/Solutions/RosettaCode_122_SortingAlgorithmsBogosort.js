function bogosort(v) {

    function _isSorted(v) {
        return v.every((elem,index) => (index === 0) || (elem >= v[index-1]));
    }

    function _shuffle(v) {
        let aux = Array(v.length);
        for (let i = 0; i < aux.length; i++) {
            // Look for a place r to put v[i]
            let r = Math.floor(Math.random() * (v.length));
            while (aux[r]!== undefined) r = Math.floor(Math.random() * (v.length)); // place already occupied, look for another
            aux[r] = v[i];
        }
        return aux;
    }

    if (!Array.isArray(v) || v.some(elem => isNaN(elem))) throw Error('v shoiuld be an array of numbers');
 
    let aux = Array.from(v);
    while (!_isSorted(aux)) aux = _shuffle(aux);
    return aux;
}

/*
console.log(bogosort([25, 32, 12, 7, 20])); // should return [7, 12, 20, 25, 32].
console.log(bogosort([38, 45, 35, 8, 13])); // should return [8, 13, 35, 38, 45].
console.log(bogosort([43, 36, 20, 34, 24])); // should return [20, 24, 34, 36, 43].
console.log(bogosort([12, 33, 26, 18, 1, 16, 38])); // should return [1, 12, 16, 18, 26, 33, 38].
console.log(bogosort([3, 39, 48, 16, 1, 4, 29])); // should return [1, 3, 4, 16, 29, 39, 48].
*/
