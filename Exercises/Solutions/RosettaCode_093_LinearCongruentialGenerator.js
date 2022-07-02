function linearCongGenerator(r0, a, c, m, n) {
    if (isNaN(r0) || Math.floor(r0) !== r0) throw Error('r0 should be an integer number');
    if (isNaN(a) || Math.floor(a) !== a) throw Error('a should be an integer number');
    if (isNaN(c) || Math.floor(c) !== c) throw Error('c should be an integer number');
    if (isNaN(m) || Math.floor(m) !== m || m <= 0) throw Error('m should be a natural number');
    if (isNaN(n) || Math.floor(n) !== n || n < 0) throw Error('n should be a positive integer number or zero');

    if (n === 0) return r0;
    let ri = r0; 
    for (let i = 1; i <= n; i++)
        ri = (a*ri + c) % m;
    return ri;
}

/*
console.log(linearCongGenerator(324, 1145, 177, 2148, 3)); // should return 855.
console.log(linearCongGenerator(234, 11245, 145, 83648, 4)); // should return 1110.
console.log(linearCongGenerator(85, 11, 1234, 214748, 5)); // should return 62217.
console.log(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)); // should return 12345.
console.log(linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)); // should return 1406932606.
*/
