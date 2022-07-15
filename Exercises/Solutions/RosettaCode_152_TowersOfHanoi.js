function towerOfHanoi(n, a, b, c) {
    // n is the tower of Hanoi, of n pieces
    // a is the origin: where the tower is placed originally
    // b is the destination: where the tower has to be placed at the end
    // c is an auxiliar place, where pieces can be moved to, temporarily.

    // The tower is formed by n pieces. Each piece can lay only on one of bigger size.
    // Initially the tower is well formed, and a. b and c are empty.
    // And the goal is to arrive to a (final) position in which the tower is well formed in b, while a and c are empties.

    if (n === 1) return [[a,b]];  // if there is only one piece, we move it from origin (a) to destination (b)
    // Otherwise the winning strategy is:
    // 1. move the n-1 superior pieces of the tower to c (formming a correct Hanoi tower, but of shorter higth)
    // 2. move the bigger piece (the basement) from a to b
    // 3. move the n-1 tower now from c to b 
    return towerOfHanoi(n-1,a,c,b).concat([[a,b]]).concat(towerOfHanoi(n-1,c,b,a)); 
}

/*
console.log(towerOfHanoi(3, 'A', 'B', 'C')); // should return [['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']].
console.log(towerOfHanoi(5, "X", "Y", "Z")); // 10th move should be Y -> X.
console.log(towerOfHanoi(7, 'A', 'B', 'C')); // first ten moves should be [['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]
*/
