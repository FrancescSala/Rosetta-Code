
function getFinalOpenedDoors(numDoors) {
    if (!Number.isInteger(numDoors) || numDoors < 0) throw Error('numDoors should be a positive integer or zero');
        
    // false means closed; true means open
    let doors = Array(numDoors).fill(false); // numDoors doors initially closed

    // attention index in array starts with 0, in problem starts with 1 (need to add 1)

    for (let i = 1; i <= numDoors; i++)  // i = i-thessim pass through all doors
        doors.map((elem,index,arr) => { if ((index + 1) % i === 0) arr[index] = !arr[index]; });
    // take index of opened doors    
    let opened = [];
    doors.map((elem,index) => { if (elem) opened.push(index+1); });
    return opened;
}

console.log(getFinalOpenedDoors(0));
console.log(getFinalOpenedDoors(100));
console.log(getFinalOpenedDoors(50));
console.log(getFinalOpenedDoors(10));
