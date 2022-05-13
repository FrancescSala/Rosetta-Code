function Num(n) {
    if (isNaN(n)) throw TypeError('Not a number');
    if (n < 1 || n > 10) throw TypeError('Out of range');
    // if want to limit only to integer values, the uncomment line below
    // if (!Number.isInteger(n)) throw TypeError('An integer value expected');

    return new Number(n);
}