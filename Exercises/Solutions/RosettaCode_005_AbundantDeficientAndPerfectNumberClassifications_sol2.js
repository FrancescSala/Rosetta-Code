function getDPA(num) {
    const DEFICIENT = 0;
    const PERFECT = 1;
    const ABUNDANT = 2;

    function classify(n) {
        let sum = 0;
        for (let i = 1;i <= Math.floor(n/2);i++) {
            if (n % i === 0) sum += i;
            if (sum > n) break;
        }
        if (sum < n) return DEFICIENT;
        if (sum > n) return ABUNDANT;
        return PERFECT;
    }

    let DPA = [0 , 0, 0];
    for (let i = 1; i <= num; i++)
        DPA[classify(i)]++;
    return DPA;
}

t0 = new Date();
console.log(getDPA(5000));
console.log(getDPA(10000));
console.log(new Date() - t0);
