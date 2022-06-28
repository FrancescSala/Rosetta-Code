function lascii(cFrom, cTo) {
    if (!(typeof cFrom === 'string' || cFrom instanceof String)) throw Error('cFrom shouild be a String');
    if (cFrom.length !== 1) throw Error('cFrom should be one character only');
    if (cFrom < 'a' || cFrom > 'z') throw Error('cFrom should be a lowercase letter');
    if (!(typeof cTo === 'string' || cTo instanceof String)) throw Error('cTo shouild be a String');
    if (cTo.length !== 1) throw Error('cTo should be one character only');
    if (cTo < 'a' || cTo > 'z') throw Error('cTo should be a lowercase letter');
    if(cFrom > cTo) throw Error('cFrom should come before cTo');

    let codes = [];
    let i = cFrom.charCodeAt(0);
    const j = cTo.charCodeAt(0);
    while (i !== j) codes.push(String.fromCharCode(i++));
    codes.push(cTo);
    return codes;
}

/*
console.log(lascii('a','d') );  // should return [ 'a', 'b', 'c', 'd' ].
console.log(lascii('c','i') );  // should return [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ].
console.log(lascii('m','q') );  // should return [ 'm', 'n', 'o', 'p', 'q' ].
console.log(lascii('k','n') );  // should return [ 'k', 'l', 'm', 'n' ].
console.log(lascii('t','z') );  // should return [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ].
*/
