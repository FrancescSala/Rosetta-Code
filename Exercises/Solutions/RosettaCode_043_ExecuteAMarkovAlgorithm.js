function markov(rules,data) {
    if (!Array.isArray(rules)) throw Error('rules should be an Array');
    if (rules.some(elem => typeof elem !== 'string')) throw Error('All elements of rules hosuld be String');
    if (typeof data !== 'string') throw Error('data shoiuld be a String');

    let oneRuleApplied = true;
    let terminatingRule = false;
    while (oneRuleApplied && !terminatingRule) { 
        oneRuleApplied = false;
        for (let rule of rules) {
            let [find,replace] = rule.split(' -> ');
            terminatingRule = replace.startsWith('.');
            if (terminatingRule) replace = replace.substring(1);
            oneRuleApplied ||= data.includes(find);
            data = data.replace(find,replace);
            if (terminatingRule || oneRuleApplied) break;
        }
    }
    return data;
}

/*
console.log(markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")); // should return the string I bought a bag of apples from my brother..
console.log(markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")); // should return the string I bought a bag of apples from T shop..
console.log(markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As WW my Bgage from T S.")); // should return the string I bought a bag of apples with my money from T shop..
console.log(markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")); // should return the string 11111111111111111111.
console.log(markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")); // should return the string 00011H1111000
// in this last one, the comment from freeCodeCammp.org is incorrect: rules are applied to empty string, so there is notihng to replace. It should return the empty string.
*/

