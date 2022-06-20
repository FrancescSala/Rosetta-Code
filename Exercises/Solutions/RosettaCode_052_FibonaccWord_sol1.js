function fibWord(n) {

    // function entropy is my solution to the exercise Entropy in this collection.
    // (RosettaCode_052_FibonacciWord_sol1.js)
    function entropy(s) {
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

    function _fibWord(n) {
        if(n <= 2) return;
        words.push(words[words.length-1] + words[words.length-2]); // use .at(-1) and .at(-2) if Javascript version supports it
        _fibWord(n-1);
    }

    if (isNaN(n) || n < 1) throw Error('Argument n should be a number grater than 0');
    let words = [];
    if (n >= 1) words.push('1');
    if (n >= 2) words.push('0');
    _fibWord(n);

    // now calculate entrpies and form the array of expected objects
    return words.map((elem, index) => {
        let obj = {};
        obj.N = index +1 ;
        obj.Length = elem.length;
        obj.Entropy = Math.round(100000000 * entropy(elem)) / 100000000; // rounded to 8 decimals. Similar but not equal .toFixed(8).
        obj.Word = elem;
        return obj;
    });
}

console.log(fibWord(5)); 
    /*
    * should return [{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },
    *                { N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },
    *                { N:5, Length:5, Entropy:0.97095059, Word:"01001" }].
    */
console.log(fibWord(7));
    /*
    * should return [{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },
    *                { N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.91829583, Word:"010" },
    *                { N:5, Length:5, Entropy:0.97095059, Word:"01001" }, { N:6, Length:8, Entropy:0.954434, Word:'01001010' }, 
    *                { N:7, Length:13, Entropy:0.9612366, Word:'0100101001001' }].
    */
