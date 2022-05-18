function sum(a, b) {
    let sum = 0;
    for (let i = a; i <= b ; i++) sum += 1 / (i*i);
    return sum;
 }

console.log(sum(1, 100)); // should return 1.6349839001848923.
console.log(sum(33, 46)); // should return 0.009262256361481223.
console.log(sum(21, 213)); // should return 0.044086990748706555.
console.log(sum(11, 111)); // should return 0.08619778593108679.
console.log(sum(1, 10)); // should return 1.5497677311665408.