function hailstoneSequence(limit) {
    let maxSeed = 0;
    let maxSeqLength = 0;
    for (let n = 1; n < limit; n++) {
        let i = n;
        let seqLength = 1;
        while(i!== 1) {
            i = (i % 2 === 0) ? (i /= 2) : (3*i +1);
            seqLength++;
        }
        if (seqLength > maxSeqLength) {
            maxSeqLength = seqLength;
            maxSeed = n;
        }
    }
    return [maxSeed, maxSeqLength];
  }

/*
console.log(hailstoneSequence(30)); // should return [27, 112]
console.log(hailstoneSequence(50000)); // should return [35655, 324]
console.log(hailstoneSequence(100000)); // should return [77031, 351]
*/
