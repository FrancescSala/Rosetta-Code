function getDPA(num) {
    function properDivisors(n) {
        let divisors = [];
        for (let i = 1;i <= Math.floor(n/2);i++) {
            if (n % i === 0) divisors.push(i);
        }
        return divisors;
    }

    function sumDivisors(divisors) {
        return divisors.reduce((addition,current) => addition + current, 0);
    }

    let DPA = [0 , 0, 0];
    for (let i = 1; i <= num; i++) {
        let disc = sumDivisors(properDivisors(i));
        if (disc < i) DPA[0]++;
        else if (disc === i) DPA[1]++;
        else DPA[2]++;
    }
    return DPA;
}

t0 = new Date();
console.log(getDPA(5000));
console.log(getDPA(10000));
console.log(new Date() - t0);
