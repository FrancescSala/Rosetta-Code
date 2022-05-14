function allEqual(arr) {
    return arr.findIndex((elem, index) => index >= 1 && elem !== arr[0]) === -1;
}
  
function azSorted(arr) {
    return arr.findIndex((elem, index) => index >= 1 && elem <= arr[index-1]) === -1;
}

console.log(allEqual(["AA", "AA", "AA", "AA"]));
console.log(azSorted(["AA", "AA", "AA", "AA"]));
console.log(allEqual(["AA", "ACB", "BB", "CC"]));
console.log(azSorted(["AA", "ACB", "BB", "CC"]));
console.log(allEqual([]));
console.log(azSorted([]));
console.log(allEqual(["AA"]));
console.log(azSorted(["AA"]));
console.log(allEqual(["BB", "AA"]));
console.log(azSorted(["BB", "AA"]) );


