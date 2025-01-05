let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function factorial(n) {
  if (n === 0) return 1;
  if (n < 2) return n;

  return n * factorial(n-1);
}

console.log(factorial(parseInt(input[0])));
