function makeFactorialArr(n) {
    const arr = new Array(n + 1).fill(1);

    for (let i = 2; i < n + 1; i++) {
        arr[i] = arr[i - 1] * i;
    }

    return arr;
}

function solution(n) {
    let answer = 0;

    const fac = makeFactorialArr(n);
    console.log(fac.at(5000))

    let a = 0;
    let b = n;
    while (b >= 0) {

        answer += fac[a + b] / (fac[a] * fac[b]);
        // console.log(a, b, fac[a + b] / (fac[a] * fac[b]))
        a+=1;
        b-=2;
    }

    return answer % 1_000_000_007;
}

// console.log(solution(1));
// console.log(solution(4));
// console.log(solution(6));
// console.log(solution(7));
console.log(solution(60000));
