// It's exactly the same as solution 1, but added an import statement at the beginning of the file.
// The export is to use function entropy from the solution of exercise Entropy (RosettaCode_038_Entropy_sol2.js)
// With an import, this script CANNOT be uploaded for check in freeCodeCamp. Use solution 1 instead.  
import {entropy} from './RosettaCode_038_Entropy_sol2.js';

function fibWord(n) {

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
