function IBeforeExceptC(word) {
    let w = word.toLowerCase();
    if (!w.includes('ie') && !w.includes('ei')) return false;
    if (w.includes('cei')) return true;
    if (w.includes('cie')) return false;
    if (w.includes('ie')) return true;
    return false;
}

/*
console.log(IBeforeExceptC("receive")); // should return true.
console.log(IBeforeExceptC("science")); // should return false.
console.log(IBeforeExceptC("imperceivable")); // should return true.
console.log(IBeforeExceptC("inconceivable")); // should return true.
console.log(IBeforeExceptC("insufficient")); // should return false.
console.log(IBeforeExceptC("omniscient")); // should return false.
*/

