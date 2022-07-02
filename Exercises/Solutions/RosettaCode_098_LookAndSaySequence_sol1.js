function lookAndSay(str) {
    let say = "";
    let digits = str.split('');
    let f = 0; // frequency
    for (let i = 0; i < digits.length; i++) {
        if (i === 0 || digits[i] === digits [i-1]) 
            f++;
        else {
            say += f + digits[i-1];
            f = 1;
        }
        if (i === digits.length -1)
            say += f + digits[i];
    }
    return say;
}

/*
console.log(lookAndSay("1")); // should return "11".
console.log(lookAndSay("11")); // should return "21".
console.log(lookAndSay("21")); // should return "1211".
console.log(lookAndSay("1211")); // should return "111221".
console.log(lookAndSay("3542")); // should return "13151412".
*/
