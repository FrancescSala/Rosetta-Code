function lastFriday(year, month) {
    const daysMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; // days in each month, from January to December
    const toPreviousFriday = [-2,-3,-4,-5,-6,0,-1]; // distance to previous Friday, from Sunday (index 0 ) to Saturday (index 6)
    let dMonth = (month === 2 && year % 4 === 0) ? 29 : daysMonth[month-1];  // last day of the month
    return dMonth + toPreviousFriday[new Date(year,month-1,dMonth).getDay()];
}

console.log(lastFriday(2018, 1)); // should return 26.
console.log(lastFriday(2017, 2)); // should return 24.
console.log(lastFriday(2012, 3)); // should return 30.
console.log(lastFriday(1900, 4)); // should return 27.
console.log(lastFriday(2000, 5)); // should return 26.
console.log(lastFriday(2006, 6)); // should return 30.
console.log(lastFriday(2010, 7)); // should return 30.
console.log(lastFriday(2005, 8)); // should return 26.
