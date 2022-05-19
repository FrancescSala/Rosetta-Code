function fizzBuzz() {
 let arr = Array.from(Array(101).keys()); // array with elements 0 .. 100
 arr.shift(); // remove 0, now array with elements 1 .. 100
 return arr.map(elem => (elem % 15 === 0)? "FizzBuzz":
                        (elem % 3 === 0) ? "Fizz":
                        (elem % 5 === 0) ? "Buzz":
                        elem);
}


console.log(fizzBuzz());

