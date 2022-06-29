function gray(enc, number) {
    // encoding
    if (enc) {
        let b = number.toString(2).split('');
        let g = [b[0]];
        for (let i = 1; i < b.length; i++)
            g.push((b[i-1] === '1') ? ((b[i] === '1') ? '0': '1') : b[i]);
        return parseInt(g.join(''),2);
    }
    // decoding
    let g = number.toString(2).split('');
    let b = [g[0]];
    for (let i = 1; i < g.length; i++)
        b.push(((g[i] === b[i-1]) ? '0': '1'));
    return parseInt(b.join(''),2);
}

/*
console.log(gray(true,177) );   //  should return 233.
console.log(gray(true,425) );   //  should return 381.
console.log(gray(true,870) );   //  should return 725.
console.log(gray(false,233) );  //  should return 177.
console.log(gray(false,381) );  //  should return 425.
console.log(gray(false,725) );  //  should return 870.
*/