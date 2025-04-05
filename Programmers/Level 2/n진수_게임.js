function solution(n, t, m, p) {
    let connectedStr = "";

    let i = 0;
    while (connectedStr.length < t * m) {
        connectedStr = connectedStr.concat(i.toString(n));
        i++;
    }

    return connectedStr
        .split("")
        .filter((_, i) => i % m === p - 1 && i < t * m)
        .join("")
        .toUpperCase();
}

console.log(solution(2, 4, 2, 1));
// console.log(solution(16, 16, 2, 1));
// console.log(solution(16, 16, 2, 2));
