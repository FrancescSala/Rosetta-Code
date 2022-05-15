function getDateFormats() {
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let cd = new Date();     // today, the current date
    let year = cd.getFullYear(); // year number
    let month = cd.getMonth();   // month number, starting with 0 (0 is January)
    let date = cd.getDate();     // day of the month
    let day = cd.getDay();       // day of the week, starting with 0 (0 is Sunday)
    return [year + '-' + (month+1) + '-' + date, DAYS[day] + ', ' + MONTHS[month] + ' ' + date + ', ' + year];
  }

console.log(getDateFormats());
