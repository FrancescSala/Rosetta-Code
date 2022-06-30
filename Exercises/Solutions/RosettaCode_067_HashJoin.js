function hashJoin(hash1, hash2) {
//    let A = (hash1.length > hash2.length) ? hash1 : hash2;
//    let B = (hash1.length > hash2.length) ? hash2 : hash1;
// I am considering that, by convention, the join is done on the last column of hash1 and the first column of hash2
//    let jA = (hash1.length > hash2.length) ? Object.keys(hash1[0]).at(-1) : Object.keys(hash2[0]).at(0);
//    let jB = (hash1.length > hash2.length) ? Object.keys(hash2[0]).at(0)  : Object.keys(hash1[0]).at(-1);

    /* At the end not doing like this, because it forces to modify the output
    *  (in the ouptut, freeCodeCamp is considering that A is always the first argument, not the largest one)
    *  we could do it, but wold be taking two different meanings of A during the algorithm
    */
    let A = hash1;
    let B = hash2;
    let jA = Object.keys(hash1[0])[Object.keys(hash1[0]).length-1];   // Javascript version at freeCodeCamp does not support .at(-1);
    let jB = Object.keys(hash2[0])[0];
    let mB = {};
    let C = [];
    for (let b of B) {
        if (mB[b[jB]] === undefined) mB[b[jB]] = [b];
        else mB[b[jB]].push(b);
    }
    for (let a of A) {
        if (mB[a[jA]] !== undefined) {
            for (let b of mB[a[jA]]) {
                let c = {}
                for (let k of Object.keys(a)) c['A_'+ k] = a[k];
                for (let k of Object.keys(b)) c['B_'+ k] = b[k];
                C.push(c);
            }
        }
    }
    return C;
}

/*
console.log(hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }]));
//  should return [{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]
*/
