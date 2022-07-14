function sternBrocot(num) {
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) throw Error('num shold be a natural number');
    if (num===1) return 1;
    let sequence = [1,1];
    let j = 1;
    let found = false;
    while (!found) {
        found = (sequence[j] + sequence[j-1] === num);
        sequence.push(sequence[j] + sequence[j-1]);
        sequence.push(sequence[j]);
        j++;
    }
    return sequence.length-1;
}

/*
console.log(sternBrocot(2)); // should return 3.
console.log(sternBrocot(3)); // should return 5.
console.log(sternBrocot(5)); // should return 11.
console.log(sternBrocot(7)); // should return 19.
console.log(sternBrocot(10)); // should return 39.
*/
