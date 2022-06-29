function genFizzBuzz(rules, num) {
    let answer = '';
    for (let rule of rules)
        if (num % rule[0] === 0) answer += rule[1];
    return (answer === '') ? num.toString(): answer;
}

/*
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6) ); // should return "Fizz".
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10) ); // should return "Buzz".
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12) ); // should return "Buzz".
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13) ); // should return "13".
console.log(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15) ); // should return "BuzzFizz".
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15) ); // should return "FizzBuzz".
console.log(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105) ); // should return "FizzBuzzBaxx".
*/ 