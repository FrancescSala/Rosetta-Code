
function happy(number) {
    const iteratedSquare = (n) => {
        if (!Number.isInteger(n) || n <= 0) throw Error('n should be a positive integer');
        let classify = n;
        while (classify !== 1 && classify !== 89)
            classify = classify.toString().split('').reduce((sum, elem) => sum + elem * elem,0);
        return classify;
    };
    return (iteratedSquare(number) === 1);
}

console.log(happy(1)); // should return true.
console.log(happy(2)); // should return false.
console.log(happy(7)); // should return true.
console.log(happy(10)); // should return true.
console.log(happy(13)); // should return true.