function isLychrel(n) {

    function _isPalindrome(n) {
        let s = n.toString().split('');
        let i = 0;
        let j = s.length -1;
        while (i < j)
            if (s[i++] !== s[j--]) return false;
        return true;
    }

    if (isNaN(n) || n <= 0 || Math.floor(n) !== n) throw Error('n should be a natural number');
    let x = n;
    for (let i = 1; i <= 500; i++) {        // 500 iterations at most
        x +=  parseInt(x.toString().split('').reverse().join(''));  // x plus its reversed
        if (_isPalindrome(x)) return false;  // converges to a palyndrome --> it is not a Lychrel number
    }
    return true; // did not converge to a palyndrome after 500 iterations --> it is a Lychrel number
}

/*
console.log(isLychrel(12)); // should return false.
console.log(isLychrel(55)); // should return false.
console.log(isLychrel(196)); // should return true.
console.log(isLychrel(879)); // should return true.
console.log(isLychrel(44987)); // should return false.
console.log(isLychrel(7059)); // should return true.
*/

