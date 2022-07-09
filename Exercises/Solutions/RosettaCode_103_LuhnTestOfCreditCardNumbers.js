function luhnTest(str) {
    if(typeof str != 'string') throw Error('str should be a String');
    let digits = str.split('').reverse().map(elem => parseInt(elem));
    if (digits.some(elem => isNaN(elem))) throw Error('str should contain numbers only');

    let s1 = digits.reduce((accum,elem,index) => (index % 2 === 0) ? accum + elem : accum);
    let s2 = digits.reduce((accum,elem,index) => {
        if (index % 2 !== 0) {
            let x = 2 * elem;
            let s = 0;
            while (x !== 0) {
                s += x % 10;
                x = Math.floor(x / 10);
            }
            accum += s;
        }
        return accum;
    },0);
    return ((s1 + s2) % 10 === 0);
}

/*
console.log(luhnTest("4111111111111111")); // should return true.
console.log(luhnTest("4111111111111112")); // should return false.
console.log(luhnTest("49927398716")); // should return true.
console.log(luhnTest("49927398717")); // should return false.
console.log(luhnTest("1234567812345678")); // should return false.
console.log(luhnTest("1234567812345670")); // should return true.
*/