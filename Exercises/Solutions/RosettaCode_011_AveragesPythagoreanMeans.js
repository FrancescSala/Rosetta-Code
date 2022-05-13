function pythagoreanMeans(rangeArr) {
    if (rangeArr.findIndex(elem => isNaN(elem))!== -1) throw Error('The array contains no numbers');
    let A = 0;
    let G = 1;
    let H = 0;
    rangeArr.forEach(elem => {
        A += elem;
        G *= elem;
        H += 1/elem;
    });
    A /= rangeArr.length;
    G = Math.pow(G,1/rangeArr.length);
    H = rangeArr.length / H;
    return {
        values: {
            Arithmetic: A,
            Geometric: G,
            Harmonic: H
        },
        test: `is A >= G >= H ? ${A >= G && G >= H ? 'yes' : 'no'}`
    }
    return result;
}

console.log(pythagoreanMeans([1,2,3,4,5,6,7,8,9,10]));
