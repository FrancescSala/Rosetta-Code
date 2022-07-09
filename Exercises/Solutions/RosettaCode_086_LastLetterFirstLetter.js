function findLongestChain(items) {
    let chains = [];
    items.forEach(elem => chains.push([elem])); // start with all chains of length 1 (one word)
    let increment = true;
    while (increment) {             // and the progresively get all chains of length 2, 3,... untile chains no longer increase in length
        increment = false;
        let newOnes = [];
        chains.forEach(chain => {
            let cStart = chain[0][0];
            let aux = chain[chain.length-1];  // cannot use .at(-1) because not supported in the version of Javacript at freeCodeCamp.org
            let cEnd = aux[aux.length-1];
            items.forEach(item => {
                if (!chain.includes(item)) {
                    if (item.startsWith(cEnd)) {
                        let x = JSON.parse(JSON.stringify(chain));
                        x.push(item);
                        newOnes.push(x);
                        increment = true;
                    }
                    if (item.endsWith(cStart)) {
                        let x = JSON.parse(JSON.stringify(chain));
                        x.unshift(item);
                        newOnes.push(x);
                        increment = true;
                    }
                }
            });
        });
        if (increment) chains = newOnes; 
    }
    return chains[0];
}

/*
console.log(findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])); // should return an array.
console.log(findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])); // should return ["involves", "starting", "game", "each"].
console.log(findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"])); // should return ["braviary", "yamask", "kangaskhan"]
console.log(findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"])); // should return ["poliwrath", "harp", "poochyena", "archana"].
console.log(findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"])); // should return ["scolipede", "elephant", "tigers", "sealeo"].
console.log(findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"])); // should return ["machamp", "petilil", "lumineon", "nosepass"].
*/

