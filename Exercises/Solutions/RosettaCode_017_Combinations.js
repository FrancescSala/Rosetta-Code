function combinations(m, n) {
    let comb = Array.from(Array(m).keys());
    let combs = [];
    let j = m-1;
    while ((comb[0] <= n-m) && (comb[m-1] < n)) {
        combs.push(Array.from(comb));
        comb[j]++;
        if (comb[j] === n) {
            j--;
            while (comb[j] === n - m +j) j--;
                comb[j]++;
                for (let i = j+1; i < m; i++) comb[i] = comb[i-1] + 1; 
                j = m -1;
            }
    }
    return combs;
}

console.log(combinations(3,5));
console.log(combinations(4,6));