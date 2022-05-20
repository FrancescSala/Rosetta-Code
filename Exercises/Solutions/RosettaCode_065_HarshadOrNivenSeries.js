function isHarshadOrNiven(n) {
    if (!Number.isInteger(n) || n <= 0) throw Error('n should be a positive integer');
    let res = [];
    let i = n+1;
    while(res.length < 10) {
        let sumDigits = i.toString().split('').reduce((sum,elem)=> sum + Number(elem), 0); 
                // used Number(elem) as otherwise would be concatenating strings
        if (i % sumDigits === 0) res.push(i);
        i++;
    }
    return res;
  }

console.log(isHarshadOrNiven(10));  // should return [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]
console.log(isHarshadOrNiven(400)); // should return [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]
console.log(isHarshadOrNiven(1000));// should return [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]