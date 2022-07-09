function wordFrequency(txt, n) {
    if (typeof txt !== 'string') throw Error('txt should be a String');
    // if (isNaN(n) || n < 0 || !Number.isInteger(n)) throw Error('n should be a positive integer or 0');
    // freeCodeCamp.org does not like the validation above !

    if (txt.trim() === '' || n === 0) return [];
    let words = txt.toLowerCase().split(' '); // could work also in removing other word separators, but as of now I will not
    let freqs = {};
    words.forEach(elem => freqs[elem] = (freqs.hasOwnProperty(elem)) ? freqs[elem] + 1 :  1);
    let aux = [];
    Object.keys(freqs).forEach(elem => aux.push([elem, freqs[elem]]));
    return aux.sort((a,b) => b[1] - a[1]).slice(0,n);
}

/*
console.log(wordFrequency("Hello hello world", 2)); // should return [['hello', 2], ['world', 1]]
console.log(wordFrequency("The quick brown fox jumped over the lazy dog", 1)); // should return [['the', 2]]
console.log(wordFrequency("Opensource opensource open-source open source", 1)); // should return [['opensource', 2]]
console.log(wordFrequency("Apple App apply aPP aPPlE", 3)); // should return [['app', 2], ['apple', 2], ['apply', 1]] or [['apple', 2], ['app', 2], ['apply', 1]]
console.log(wordFrequency("c d a d c a b d d c", 4)); // should return [['d', 4], ['c', 3], ['a', 2], ['b', 1]]
console.log(wordFrequency("", 5)); // should return []
*/
