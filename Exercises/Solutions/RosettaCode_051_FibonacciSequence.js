function fibonacci(n) {
     if (n === 0) return 0;
     if (n === 1) return 1;
     return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(2)); // should return a number.
console.log(fibonacci(3)); // should return 2.
console.log(fibonacci(5)); // should return 5.
console.log(fibonacci(10)); // should return 55.