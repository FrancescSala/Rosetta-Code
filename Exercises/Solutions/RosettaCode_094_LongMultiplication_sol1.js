function mult(strNum1, strNum2) {
    // validation of arguments
    if (typeof strNum1 !== 'string') throw Error('strNum1 should be a String');
    if (typeof strNum2 !== 'string') throw Error('strNum2 should be a String');
    let op1 = strNum1.split('').map(elem => elem = parseInt(elem));  // operand 1 of the multiplication
    if (op1.some(elem => isNaN(elem))) throw Error('characters in strNum1 should be only digits 0..9');
    let op2 = strNum2.split('').map(elem => elem = parseInt(elem)); // operand 2 of the multiplication
    if (op2.some(elem => isNaN(elem))) throw Error('characters in strNum2 should be only digits 0..9');

    // now let's do the operation operand1 x operand2
    //         1234     <-- op1
    //       x 5678     <-- op2
    //       ______
    //         9872     <-- row
    //        8638      <-- row
    //       7404       <-- row
    //      6170        <-- row
    //  ___________
    //      7006652
    //
    //
    //        09872     <-- accum
    //        86380     <-- row
    //       _______
    //       096252     <-- accum
    //       740400     <-- row
    //    etcetera
    let accum; // this will hold the accumlated sum of rows, and it will be at the end the final result
    for (let i = op2.length-1; i>=0; i--) {
        let row = _mult(op1,op2[i]);
        if (i === op2.length-1) accum = Array(row).flat();
        else {
            for (let j = op2.length-1; j>=i+1; j--) row.push(0); // arrange the row adding 0 ot the right
            while (row.length > accum.length) accum.unshift(0);  // arrange the partial accumulation adding 0 to the left if there were carries in leftmost digit of row multiplication 
            accum = _sum(row,accum); // add
        }
    }
    return accum.join(''); // convert the final result back to a string

    // multiplies digits in arr by digit and returns the result as a new array
    function _mult(arr,digit) {
        let result = [];
        let carry = 0;
        for (let i = arr.length-1;i>=0;i--) {
            let x = digit * arr[i] + carry;
            carry = Math.floor(x / 10);
            result.unshift(x % 10);
        }
        if (carry !== 0) result.unshift(carry);
        return result;
    }

    // adds arr1 and arr2 element-wise (both have same length)
    function _sum(arr1,arr2) {
        let result = [];
        let carry = 0;
        for (let i = arr1.length-1;i>=0;i--) {
            let x = arr1[i] + arr2[i] + carry;
            carry = Math.floor(x / 10);
            result.unshift(x % 10);
        }
        if (carry !== 0) result.unshift(carry);
        return result;
    }
}

/*
console.log(mult("18446744073709551616", "18446744073709551616")); // should return "340282366920938463463374607431768211456".
console.log(mult("31844674073709551616", "1844674407309551616")); // should return "58743055272886011737990786529368211456".
console.log(mult("1846744073709551616", "44844644073709551616")); // should return "82816580680737279241781007431768211456".
console.log(mult("1844674407370951616", "1844674407709551616")); // should return "3402823669833978308014392742590611456".
console.log(mult("2844674407370951616", "1844674407370955616")); // should return "5247498076580334548376218009219475456".
*/
