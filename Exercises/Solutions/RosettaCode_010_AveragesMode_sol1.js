function mode(arr) {
    let freqTable = new FrequencyTable();
    arr.forEach(elem => freqTable.add(elem));
    return freqTable.getMode();
}

class FrequencyTable {

    constructor() {
        this.collection = {};
        this.mode = [];
        this.freqMode = 0;
    }

    add(item) {
        this.collection[item] = this.has(item) ? this.collection[item] + 1 : 1;
        if (this.mode.length === 0) {
            this.mode.push(item);
            this.freqMode = this.collection[item];
        } else if (this.collection[item] === this.freqMode && 
            !this.mode.includes(item)) {
                this.mode.push(item);
        } else if (this.collection[item] > this.freqMode) {
            this.mode = [item];
            this.freqMode = this.collection[item];
        }
    }

    has(item) { return this.collection.hasOwnProperty(item); }

    get(item) { return (this.has(item)) ? this.collection[item] : -1; } // method not used in this exercise

    getMode() { return this.mode; } // could sort the modes if needed
}

console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));
console.log(mode([1, 2, 4, 4, 1]));
console.log(mode(['una', 'vida' ,'dues', 'vides', 'tres', 'vides', 'una']));
console.log(mode([]));

