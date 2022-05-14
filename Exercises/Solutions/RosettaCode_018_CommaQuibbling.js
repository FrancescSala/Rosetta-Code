function quibble(words) {

    return '{' + words.reduce((acc,elem,index) => acc + ((index === 0) ? '' : ((index === words.length - 1) ? " and ": "," )) + elem,'') + '}';
}

console.log(quibble([]));
console.log(quibble(["ABC"]));
console.log(quibble(["ABC", "DEF"]));
console.log(quibble(["ABC", "DEF", "G", "H"]));



