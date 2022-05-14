// See exercise 154: vector dot product
// It's the same
function dotProduct(ary1,ary2) {
     
    // checks that v is an array of numbers
    function checkVector(v) {
      if (!Array.isArray(v) || (v.length === 0)) return false;
      if (v.findIndex(elem => isNaN(elem))!== -1) return false;
      return true;
    };

    if (arguments.length !== 2) return null;
    if (!checkVector(ary1) || !checkVector(ary2)) return null;
    if (ary1.length !== ary2.length) return null;
   
    // Up to here, validation of arguments; now the calculation of the dot product
    return ary1.reduce((sum,curr,index) => sum + curr * ary2[index],0);
}


console.log(dotProduct() + ' --> Expected output null');
console.log(dotProduct([1], [1]) + ' --> Expected output 1');
console.log(dotProduct([1], [1,2]) + ' --> Expected output null');
console.log(dotProduct([1, 3, -5], [4, -2, -1]) + ' --> Expected output 3');
console.log(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]) + ' --> Expected output null');
console.log(dotProduct([0, 3, 6, 9, 12], [0, 4, 8, 12, 16]) + ' --> Expected output 360');

console.log(dotProduct([1, 3, -5], [4, -2, -1])); // should return 3.
console.log(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // should return 130.
console.log(dotProduct([5, 4, 3, 2], [7, 8, 9, 6])); // should return 106.
console.log(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])); // should return -36.
console.log(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])); // should return 10392.


