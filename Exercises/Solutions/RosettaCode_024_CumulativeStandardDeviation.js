function standardDeviation(arr) {
    function _median(arr) {
        let sum = arr.reduce((sum,elem) => sum + elem,0);
        return sum/arr.length;
    }
     let m = _median(arr);
     let sumSq = arr.reduce((sum,elem) => sum + (elem - m)**2,0);
     // return Math.sqrt(sumSq/arr.length);
     // cannot do the line above because freecode camp's corrector expects certain number of decimal digits
     return Number(Math.sqrt(sumSq/arr.length).toFixed(3)); 
}

console.log(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])); // should return 2.
console.log(standardDeviation([600, 470, 170, 430, 300])); // should return 147.323.
console.log(standardDeviation([75, 83, 96, 100, 121, 125])); // should return 18.239.
console.log(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])); // should return 16.87.
console.log(standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])); // should return 22.631.