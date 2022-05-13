function ack(m,n) {
    if (!Number.isInteger(m) || m < 0) throw Error('m should be a positive integer or zero');
    if (!Number.isInteger(n) || n < 0) throw Error('n should be a positive integer or zero');
    if (m === 0) return n + 1;
    if (m > 0 && n === 0) return ack(m-1,1);
    return ack(m - 1, ack(m, n- 1));
}

console.log(ack(0,0));
