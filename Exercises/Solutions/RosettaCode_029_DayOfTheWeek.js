function findXmasSunday(start, end) {
    let years = [];
    for (let year = start; year <= end; year++)
        if (new Date(year,11,25).getDay() === 0) years.push(year); 
    return years;
}

console.log(findXmasSunday(1970, 2017)); // should return [1977, 1983, 1988, 1994, 2005, 2011, 2016]
console.log(findXmasSunday(2008, 2121)); // should return [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]
