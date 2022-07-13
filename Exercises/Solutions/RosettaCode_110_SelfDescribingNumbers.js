function isSelfDescribing(n) {
    if (isNaN(n)) throw Error('n should be a number');
    let s = n.toString().split('').map((elem, index,arr) => parseInt(elem));
    for (let i = 0; i < s.length; i++) 
        if (s.filter(elem => elem === i).length !== s[i]) return false;
    return true;
}

/*
console.log(isSelfDescribing(2020)); // should return true.
console.log(isSelfDescribing(3021)); // should return false.
console.log(isSelfDescribing(3211000)); // should return true.
*/
