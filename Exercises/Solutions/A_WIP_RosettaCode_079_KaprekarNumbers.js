
function isKaprekar10(n, bs) {
    if (n == 1 && bs === 10) return true; // TODO mirar si bs !== 10 què passa
    let m = n * n; // in fact is slightly more efficient than computing n**2
    console.log('n 2 = ',m);
    let s = m.toString();
    for (let i = 1; i < s.length; i++) {
//        console.log(parseInt(s.substring(0,i)));
//        console.log(parseInt(s.substring(i)));
        if (parseInt(s.substring(0,i),bs) + parseInt(s.substring(i),bs) === n) return true;
    }
    return false;
}

function isKaprekar(n, bs) {
    if (isNaN(bs) || bs < 2 || bs > 36) throw Error('bs should be a number between 2 and 36');
    let m = parseInt(n,bs);
    if (isNaN(m)) throw Error('n should be a valid number in base bs');
    let sq = m * m;
    console.log(m, sq, sq.toString(bs));
    let sqBS = sq.toString(bs);
    let sq10 = sq.toString(10);
    for (let i = 1; i < sqBS.length; i++) {
        _xivar(sqBS.substring(0,i),bs);
        _xivar(sqBS.substring(i),bs);
        if (parseInt(sqBS.substring(0,i),bs) + parseInt(sqBS.substring(i),bs) === n) return true;
    }
console.log('No Kaprekar in base', bs);

    for (let i = 1; i < sq10.length; i++) {
        _xivar(sq10.substring(0,i),10);
        _xivar(sq10.substring(i),10);
        if (parseInt(sq10.substring(0,i),10) + parseInt(sq10.substring(i),10) === m) return true;
    }
    return false;
}

function _xivar(s,bs) {
    console.log ('substring base bs = ', s, ' en base 10 = ',parseInt(s,10), ' en base bs = ', parseInt(s,bs));
}
//console.log(isKaprekar(1,10)); // should return true.
//console.log(isKaprekar(9, 10)); // should return true.
//console.log(isKaprekar(2223, 10)); // should return true.
//console.log(isKaprekar(22823, 10)); // should return false.
//console.log(isKaprekar(9, 17)); // should return false.
console.log(isKaprekar(225, 17)); // should return true.
//console.log(isKaprekar10(617, 10));

//console.log(isKaprekar(999, 17)); // should return false.