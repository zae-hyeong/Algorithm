function isPrime(n) {
  if(!n || n <= 1) return false;

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  return n.toString(k).split('0').filter(v => isPrime(+v)).length;
}

console.log(solution(437674, 3)); //3
console.log(solution(110011, 10)); //2