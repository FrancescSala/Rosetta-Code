
/* This second solution does not uses an array to model the doors.
   Instead, every door is modelled by its number (i). And to know if at the end it will be opened or closed
   we count how many  divisors (minor or equal that num passes) the number of the door has.
   If that number is odd, the door will be open at the end. Otherwise, closed.  
*/
function getFinalOpenedDoors(numDoors) {
    if (!Number.isInteger(numDoors) || numDoors < 0) throw Error('numDoors should be a positive integer or zero');
       
    // return how many divisors has i
    function count_divisors(i) {
        let howMany = 0;
        for(let k = 1;k <= Math.floor(i/2);k++)   // no need to iterate until i
            if (i % k === 0) howMany++;
        return howMany + 1;                       // +1 is to count also i as divisor of itself. not reached during iteration
    };

    let opened = [];
    for (let i = 1; i<= numDoors;i++) 
        if (count_divisors(i) % 2 === 1) opened.push(i);
    return opened;
    /* In other words: count_divisors is counting in how many passes the door changes state.

       As we start with doors in state closed, and we are asked for which doors are at the end opened (opposite to the initial state),
       we are interested in those doors suffering an odd number of state changes.
       If we were asked for doors that finish at the initial state, then ou rinterest would be in the doors suffering an even 
       number of state changes.
    */  
}

console.log(getFinalOpenedDoors(0));
console.log(getFinalOpenedDoors(100));
console.log(getFinalOpenedDoors(50));
console.log(getFinalOpenedDoors(10));
