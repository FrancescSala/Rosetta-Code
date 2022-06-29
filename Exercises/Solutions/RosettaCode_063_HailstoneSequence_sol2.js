/*
* This second solution looks if the sequence includes a number between 1 and limit. If it does,
* that number does not need to be considered, as for sure it will not generate the longest sequence
* (current n has a longer sequence).
* Doing this is more efficient in time if the algorithm has to be executed a lot of times
*/
function hailstoneSequence(limit) {
    let maxSeed = 0;
    let maxSeqLength = 0;
    let todo = Array(limit).fill(true);
    for (let n = 1; n < limit; n++) {
        if (todo[n]) {
            let i = n;
            let seqLength = 1;
            while(i!== 1) {
                i = (i % 2 === 0) ? (i /= 2) : (3*i +1);
                if (i >= 0 && i <limit) todo[i] = false;
                seqLength++;
            }
            if (seqLength > maxSeqLength) {
                maxSeqLength = seqLength;
                maxSeed = n;
            }
        }
    }
    return [maxSeed, maxSeqLength];
  }

/*
console.log(hailstoneSequence(30)); // should return [27, 112]
console.log(hailstoneSequence(50000)); // should return [35655, 324]
console.log(hailstoneSequence(100000)); // should return [77031, 351]
*/

