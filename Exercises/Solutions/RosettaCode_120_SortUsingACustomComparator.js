function lengthSorter(arr) {
    return Array.from(arr).sort((a,b) => (a.length === b.length) ? ((a >= b) ? 1 : -1) : b.length - a.length);
}

/*
console.log(lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])); // shold return ["strings", "sample", "sorted", "Here", "some", "are", "be", "to"].
console.log(lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])); // shold return ["going", "good", "hope", "your", "day", "is", "?","I"].
console.log(lengthSorter(["Mine", "is", "going", "great"])); // shold return ["going", "great", "Mine", "is"].
console.log(lengthSorter(["Have", "fun", "sorting", "!!"])); // shold return ["sorting", "Have", "fun", "!!"].
console.log(lengthSorter(["Everything", "is", "good", "!!"])); // shold return ["Everything", "good", "!!", "is"].
*/
