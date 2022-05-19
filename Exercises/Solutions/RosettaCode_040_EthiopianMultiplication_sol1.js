function eth_mult(a, b) {
     function _double(n) {
         return 2 * n;
     }

     function _halve(n) {
         return Math.floor(n/2);
     }

     function _isEven(n) {
         return (n % 2 === 0);
     }

     let left = [];
     let right = [];
     let m = a;
     let n = b;
     while (m >= 1) {
         left.push(m);
         right.push(n);
         m = _halve(m);
         n = _double(n);
     }

     return left.reduce((sum, elem,index) => 
         (!_isEven(elem))? sum + right[index]:sum
      ,0);
}

console.log(eth_mult(17,34)); // should return 578.
console.log(eth_mult(23,46)); // should return 1058.
console.log(eth_mult(12,27)); // should return 324.
console.log(eth_mult(56,98)); // should return 5488.
console.log(eth_mult(63,74)); // should return 4662.