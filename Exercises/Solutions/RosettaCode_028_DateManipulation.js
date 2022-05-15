function add12Hours(dateString) {
    const TWELVE_HOURS = 43200000; // number of miliseconds in 12 hours   12 * 60 * 60 * 1000
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    function _parseString(s) {
        let pieces = s.split(' ');
        let semiColon = pieces[3].indexOf(':'); // position of the semicolon 
        let hour = pieces[3].slice(0,semiColon);
        if (pieces[3].includes('pm')) hour = new Number(hour) + 12;
        let m = Math.max(pieces[3].indexOf('am'),pieces[3].indexOf('pm'))
        let minute = pieces[3].slice(semiColon + 1 ,m);
        return new Date(pieces[2], MONTHS.indexOf(pieces[0]), pieces[1], hour, minute);  // year, month, date, hour, minute
    }

    function _toString(d) {
        let year = d.getFullYear(); // year number
        let month = d.getMonth();   // month number, starting with 0 (0 is January)
        let date = d.getDate();     // day of the month
        let hour = d.getHours();    // hour of day in local time
        let meridiam;
        if (hour >= 12) {
            hour -= 12;
            meridiam = 'pm'
        } else meridiam = 'am';
        let minute = d.getMinutes(); // minutes in local time
        return MONTHS[month] + ' ' + date + ' ' + year + ' ' + hour + ':' + minute + meridiam + ' EST';
    }

    return _toString(new Date(_parseString(dateString).valueOf() + TWELVE_HOURS));
}

console.log(add12Hours("January 17 2017 11:43pm EST"));
console.log(add12Hours("March 6 2009 7:30pm EST")); // should return "March 7 2009 7:30am EST"
console.log(add12Hours("February 29 2004 9:15pm EST")); // should return "March 1 2004 9:15am EST"
console.log(add12Hours("February 28 1999 3:15pm EST")); // should return "March 1 1999 3:15am EST"
console.log(add12Hours("December 31 2020 1:45pm EST")); // should return "January 1 2021 1:45am EST"
