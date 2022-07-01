function ffr(n) {
    if (isNaN(n) || n <=0) throw Error('n should be a natural number');
    return ffrs(n)[0];
}
  
function ffs(n) {
    if (isNaN(n) || n <=0) throw Error('n should be a natural number');
    return ffrs(n)[1];
}

function ffrs(n) {
    let R = [1];
    let S = [2];
    let aux = 3;
    for (let k = 1; k <n; k++){
        R.push(R[k-1]+S[k-1]);
        while (R.includes(aux) || S.includes(aux)) aux++;
        S.push(aux++);
    }
    return [R[R.length-1], S[S.length-1]];  // cannot use .at(-1) because the Javascript version of freeCodeCamp website does not support it
}

/*
console.log(ffr(10));
console.log(ffr(50));
console.log(ffr(100));
console.log(ffr(1000));
console.log(ffs(10));
console.log(ffs(50));
console.log(ffs(100));
console.log(ffs(1000));
*/