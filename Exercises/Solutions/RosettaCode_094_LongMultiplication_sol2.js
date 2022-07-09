// INTENTAR FER AL MATEIX AMB DOS BUCLES NOMES, SENSE FUNCIONS AUXILIARS
// O UTILITZANT HIGH LEVEL FUNCTIONS

function mult(strNum1, strNum2) {
    // validation of arguments
    if (typeof strNum1 !== 'string') throw Error('strNum1 should be a String');
    if (typeof strNum2 !== 'string') throw Error('strNum2 should be a String');
    let op1 = strNum1.split('').map(elem => elem = parseInt(elem));  // operand 1 of the multiplication
    if (op1.some(elem => isNaN(elem))) throw Error('characters in strNum1 should be only digits 0..9');
    let op2 = strNum2.split('').map(elem => elem = parseInt(elem)); // operand 2 of the multiplication
    if (op2.some(elem => isNaN(elem))) throw Error('characters in strNum2 should be only digits 0..9');

    // now let's do the operation operand1 x operand2
    // In this solution I do not use auxiliar functions: use just two loops and multiplication plus intermediate aditions are done simultaneously
    let accum = Array(op1.length + op2.length).fill(0); // this will hold the accumulated sum of rows, and it will be at the end the final result
    for (let i = op2.length-1; i>=0; i--) {
        for (let j = op1.length-1; j>=0; j--) {
            let x = op2[i] * op1[j] + accum[i + j + 1];
            let carry = Math.floor(x / 10);
            accum[i + j + 1] = x % 10;
            accum[i + j] += carry;
        }
    }
    let i = 0;
    while (accum[i] === 0) accum.shift(); // remove leading zeros
    return accum.join(''); // convert the final result back to a string
}


/*
console.log(mult("18446744073709551616", "18446744073709551616")); // should return "340282366920938463463374607431768211456".
console.log(mult("31844674073709551616", "1844674407309551616")); // should return "58743055272886011737990786529368211456".
console.log(mult("1846744073709551616", "44844644073709551616")); // should return "82816580680737279241781007431768211456".
console.log(mult("1844674407370951616", "1844674407709551616")); // should return "3402823669833978308014392742590611456".
console.log(mult("2844674407370951616", "1844674407370955616")); // should return "5247498076580334548376218009219475456".
*/
