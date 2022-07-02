function josephus(init, kill) {
    let killed = Array(init).fill(false);
    let survivors = init;
    let k = 0;
    while (survivors > 1) {
        let j = 0;
        while (j < kill && survivors > 1) {
            while (killed[k]) k = (k + 1) % init;
            j++;
            if (j === kill) {
                killed[k] = true;
                survivors--;
                j = 0;
            }
            k = (k + 1) % init;
        }
    }
    return killed.indexOf(false);
}

console.log(josephus(30,3)); // should return 28.
console.log(josephus(30,5)); // should return 2.
console.log(josephus(20,2)); // should return 8.
console.log(josephus(17,6)); // should return 1.
console.log(josephus(29,4)); // should return 1.
