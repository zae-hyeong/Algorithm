function solution(n, a, b) {

  let count = 0;
  
  while (a != b) {
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    count++;
  }

  return count;
}

console.log(solution(8, 4, 7));
console.log(solution(8, 1, 2));
console.log(solution(8, 1, 3));
console.log(solution(8, 3, 5));
console.log(solution(8, 7, 8));