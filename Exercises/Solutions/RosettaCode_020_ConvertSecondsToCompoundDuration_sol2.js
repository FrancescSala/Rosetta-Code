function convertSeconds(sec) {
    if (isNaN(sec)) throw Error('sec should be a number');
    if (sec < 0) throw Error('sec cannot be negative');
    if (Math.floor(sec) !== sec) throw Error('sec has to be an integer value');
    if (sec === 0) return '0 sec';  // comment this line if you want the output to be empty when sec is 0

    const WEEK = 604800;    // number of seconds in 1 week
    const DAY = 86400;      // number of seconds in 1 day
    const HOUR = 3600;      // number of seconds in 1 hour
    const MINUTE = 60;      // number of seconds in 1 minute
    const SECOND = 1;       // number of seconds in 1 second
    const EQUIVALENCES = [WEEK, DAY, HOUR, MINUTE, SECOND];
    const LABELS = ['wk', 'd', 'hr', 'min', 'sec'];

    let output = '';
    let seconds = sec;  // the number of seconds pending to process
    let amount;
    
    return EQUIVALENCES.reduce((soFar,curr, index) => {
        amount = Math.floor(seconds/curr);
        seconds = seconds % curr;
        if (amount > 0) soFar += (((soFar !== '') ? ', ': '') + amount + ' ' + LABELS[index]);
        return soFar;
    }, '');
}

console.log(convertSeconds(7259));
console.log(convertSeconds(86400));
console.log(convertSeconds(6000000));
console.log(convertSeconds(0));




