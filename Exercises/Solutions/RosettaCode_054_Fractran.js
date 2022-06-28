function fractran(progStr) {
//    if (!(progStr instanceof String)) throw Error('progStr ); // should be a String');
    // convert to an array of numbers
    const epsilon = Math.pow(10,-12);
    let program = progStr.split(', ');
    program.forEach((elem,index,arr) => {
        let a = elem.split('/');
        arr[index] = a[0] / a[1];
    });
    let numbers = [2];
    let n = 2;
    let finished = false;
    while (!finished) {
        let l = numbers.length;
        let i = 0;
        while (i < program.length) {
            let j = (n * program[i]); 
            if ( j - Math.floor(j) < epsilon) { 
                n = Math.floor(j);
                numbers.push(n);
                i = program.length + 1;
            } else i++;
        }
        finished = (numbers.length === 10 || numbers.length === l); // got 10 numbers or the length did not increase 
    }
    return numbers;
}
// I have to do like this instead of if (j === Math.floor(j))
// because 725 * (77/29), which should give 1925,, is giving 1925.0000000000002

/*
  console.log(fractran("3/2, 1/3")); // should return [ 2, 3, 1 ].
  console.log(fractran("3/2, 5/3, 1/5")); // should return [ 2, 3, 5, 1 ].
  console.log(fractran("3/2, 6/3")); // should return [ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ].
  console.log(fractran("2/7, 7/2")); // should return [ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ].
  console.log(fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")); // should return [ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]
  console.log(725 * (77 / 29));
*/