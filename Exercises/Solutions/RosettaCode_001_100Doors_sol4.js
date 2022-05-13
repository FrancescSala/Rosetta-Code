
/* So far, we have considered just the case when the number of passes are the same as the number of doors.
   (if having 100 doors we do 100 passes, if 10 doors 10 passes and so on).
   As a generalization we could consider to have now two parameters, that can have different values
*/
function getFinalOpenedDoors(numDoors, numPasses = numDoors) {
    if (!Number.isInteger(numDoors) || numDoors < 0) throw Error('numDoors should be a positive integer or zero');
    if (!Number.isInteger(numPasses) || numPasses < 0) throw Error('numPasses should be a positive integer or zero');
    if (numPasses > numDoors) throw Error('Number of passes must be smaller than or equal to number of doors');

    // return how many divisors has i, no greater than limit
    function count_divisors(i,limit) {
        let howMany = 0;
        for(let k = 1;k <= Math.min(Math.floor(i/2),limit);k++) 
            if (i % k === 0) howMany++;
        return (i === limit) ? howMany + 1: howMany;                       
    };


    // to get the correct result we combine solution 2 (faster), and solution 3
    let opened = []; let i = 1; let isq = 1;
    while( isq <= numPasses) { 
        opened.push(isq);
        isq = ++i*i;  
    }
    for (let j = (i-1)*(i-1) + 1; j <= numDoors; j++)
        if (count_divisors(j,numPasses) % 2 === 1) opened.push(j);  // cannot count now all divisors, just the ones <= numPasses

    return opened;
}


console.log(getFinalOpenedDoors(0));
console.log(getFinalOpenedDoors(0,0));
console.log(getFinalOpenedDoors(10,0));
console.log(getFinalOpenedDoors(10,1));
console.log(getFinalOpenedDoors(10,2));
console.log(getFinalOpenedDoors(10,3));
console.log(getFinalOpenedDoors(10,4));
console.log(getFinalOpenedDoors(10,5));
console.log(getFinalOpenedDoors(10,6));
console.log(getFinalOpenedDoors(10,7));
console.log(getFinalOpenedDoors(10,8));
console.log(getFinalOpenedDoors(10,9));
console.log(getFinalOpenedDoors(10,10));

