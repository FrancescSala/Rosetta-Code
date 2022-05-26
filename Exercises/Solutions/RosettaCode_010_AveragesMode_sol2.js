// Another solution. Code is sligthly more compact that solution 1,
// but not more efficient
function mode(arr) {
    if (!Array.isArray(arr)) throw Error('arr should be an array');
    if (arr.length === 0) return [];
    // sorts the array and calculates an array [ [elem,frequency], ...]
    let frequencies = arr.sort().reduce((accum, elem, index,array) => {
        if (index === 0 || (elem !== array[index-1])) accum.push([elem,1]);
        else accum.at(-1)[1]++;
        return accum;
    },[]);
    // caculates which is the maximum frequency
    let maxFreq = frequencies.reduce ((max,elem) => {
        if (elem[1] > max) max = elem[1]; 
        return max;
    },0);
    // get the pairs [elem,frequency] with maximum frequency
    let modes = frequencies.filter(elem => elem[1] === maxFreq);
    // drops the frequencies and conserves only the elements (= modes)
    return modes.flat().filter((elem, index) => index % 2 === 0);
}


console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));
console.log(mode([1, 2, 4, 4, 1]));
console.log(mode(['una', 'vida' ,'dues', 'vides', 'tres', 'vides', 'una']));
console.log(mode([]));

