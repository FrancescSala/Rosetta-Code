function entropy(s) {
    if (!(s instanceof String || typeof s === 'string')) throw Error('Argument s should be a String');
    if (s.length === 0) throw Error('Argument s ); // should be a non-zero length String');
    // convert each character in s to a number in A
    const a = 'a'.charCodeAt(0);
    let A = s.split('');
    A.forEach((elem, index, arr) => {
        arr[index] = (elem >= '0' && elem <= '9') ? Number(elem) : (elem.charCodeAt(0) - a + 10);
    });
    let B = A.filter((elem, index, arr) => arr.indexOf(elem) === index);// digits in s without repetition
    let n = B.length; // base, number of unique digits in s
    // check if some character out of range
    if (A.some(elem => elem < 0 || elem > n)) throw Error('Unexpected character in String s')
    let F = B.map(elem => A.filter(x => x === elem).length);  // F is the frequency of each element in A, so the counti
    let N = s.length;
    let e = F.reduce((accum, elem) => {
        return (elem === 0) ? accum : (accum + elem/N * Math.log2(elem/N));
    },0);
    return (e !== 0) ? -e : e;
}



console.log(entropy("0") ); // should return 0
console.log(entropy("01") ); // should return 1
console.log(entropy("0123") ); // should return 2
console.log(entropy("01234567") ); // should return 3
console.log(entropy("0123456789abcdef") ); // should return 4
console.log(entropy("1223334444") ); // should return 1.8464393446710154
