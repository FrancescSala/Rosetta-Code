
/* Looking the results of solutions 1 and 2, it may be seen that the doors opened at the end are the ones
   which number is a perfect square.
*/
function getFinalOpenedDoors(numDoors) {
    if (!Number.isInteger(numDoors) || numDoors < 0) throw Error('numDoors should be a positive integer or zero');

    let opened = []; let i = 1;
    while( i*i <= numDoors) opened.push(i*i++);  // mmmm... making the autoincrement in the same line...
    return opened;
    /* note that doing like this (above) we do the double of multiplications than necessary, but it does not matter
       Alternatively,
       let opened = []; let i = 1; let isq = 1;
       while( isq <= numDoors) { 
           opened.push(isq);
           isq = ++i*i;  
        }
        return opened;
    */
}
console.log(getFinalOpenedDoors(0));
console.log(getFinalOpenedDoors(100));
console.log(getFinalOpenedDoors(50));
console.log(getFinalOpenedDoors(10));
