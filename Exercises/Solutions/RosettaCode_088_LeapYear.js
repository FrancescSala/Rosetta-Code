function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

/*
console.log(isLeapYear(2018)); // should return false.
console.log(isLeapYear(2016)); // should return true.
console.log(isLeapYear(2000)); // should return true.
console.log(isLeapYear(1900)); // should return false.
console.log(isLeapYear(1996)); // should return true.
console.log(isLeapYear(1800)); // should return false.
*/
