function iteratedSquare(n) {
    if (!Number.isInteger(n) || n <= 0) throw Error('n should be a positive integer');
    let classify = n;
    while (classify !== 1 && classify !== 89)
        classify = classify.toString().split('').reduce((sum, elem) => sum + elem * elem,0);
    return classify;
}

console.log(iteratedSquare(4)); // should return 89.
console.log(iteratedSquare(7)); // should return 1.
console.log(iteratedSquare(15)); // should return 89.
console.log(iteratedSquare(20)); // should return 89.
console.log(iteratedSquare(70)); // should return 1.
