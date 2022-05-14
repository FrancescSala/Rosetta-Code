function rms(arr) {
    return Math.sqrt(arr.reduce((sum, elem) => sum + elem * elem,0) / arr.length);
}

console.log(rms([1,2,3,4,5,6,7,8,9,10]));
