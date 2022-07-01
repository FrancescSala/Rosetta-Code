function hofstadterQ(n) {
    if (isNaN(n) || n < 1) throw Error('n should be a natural number');

    if (n === 1 || n === 2) return 1;
    let Q = [1, 1];
    for (let k = 2; k <n; k++) {
        Q.push(Q[k - Q[k-1]] + Q[ k - Q[k-2]]);
    }
    return Q[Q.length-1];
}
    

console.log(hofstadterQ(1000)); // should return 502
console.log(hofstadterQ(1500)); // should return 755
console.log(hofstadterQ(2000)); // should return 1005
console.log(hofstadterQ(2500)); // should return 1261