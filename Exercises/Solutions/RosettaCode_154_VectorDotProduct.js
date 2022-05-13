function dotProduct(...vectors) {
     
     // checks that v is an array of numbers
     function checkVector(v) {
       if (!Array.isArray(v) || (v.length === 0)) return false;
       if (v.findIndex(elem => isNaN(elem))!== -1) return false;
       return true;
     };

     if (arguments.length !== 2) return null;
     if (!checkVector(vectors[0]) || !checkVector(vectors[1])) return null;
     if (vectors[0].length !== vectors[1].length) return null;
    
     // Up to here, validation of arguments; now the calculation of the dot product
     let dp = 0;
     for (let i =0; i < vectors[0].length;i++)
        dp += vectors[0][i]*vectors[1][i];
     return dp;

    /* alternatively, the freeCodeCamp solution, using high level functions,
       but improved to consume less  memory
       return vectors[0].reduce((sum,curr,index) => sum + curr * vectors[1][index],0);
    */
}


console.log(dotProduct() + ' --> Expected output null');
console.log(dotProduct([1], [1]) + ' --> Expected output 1');
console.log(dotProduct([1], [1,2]) + ' --> Expected output null');
console.log(dotProduct([1, 3, -5], [4, -2, -1]) + ' --> Expected output 3');
console.log(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]) + ' --> Expected output null');
console.log(dotProduct([0, 3, 6, 9, 12], [0, 4, 8, 12, 16]) + ' --> Expected output 360');


