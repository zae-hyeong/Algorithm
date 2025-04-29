function solution(n) {

    let n1 = 1;
    let n2 = 2;
    if(n <= 2) return n;

    let num = 0 ;

    for(let i = 3; i < n + 1; i ++) {
        num = (n2 + n1) % 1_000_000_007;
        [n1, n2] = [n2, num];
    }

    return num;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
// console.log(solution(60000));
