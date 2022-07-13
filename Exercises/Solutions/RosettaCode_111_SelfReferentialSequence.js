function selfReferential(n) {
    if (isNaN(n)) throw Error('n should be a number');
    let sequence = [];
    let term = n.toString();
    while (!sequence.includes(term)) {
        sequence.push(term);
        let digits = term.split('');
        let sortedDigits = digits.filter((elem,index,arr) => index === arr.indexOf(elem)).sort((a,b) => b-a); // eliminate duplicates and sort
        let aux = [];
        for (let i=0; i< sortedDigits.length;i++) {
            aux.push(digits.filter(elem => elem === sortedDigits[i]).length); // count frequency of sortedDigits[i]
            aux.push(sortedDigits[i]);
        }
        term = aux.join(''); // next term in the sequence
    }
    return sequence;
}   

/*
console.log(selfReferential(40)); // should return ["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"].
console.log(selfReferential(132110)); // should return ["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"].
console.log(selfReferential(132211)); // should return ["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"].
console.log(selfReferential(1413223110)); // should return ["1413223110", "1423224110", "2413323110", "1433223110"].
console.log(selfReferential(251413126110)); // should return ["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"].
*/