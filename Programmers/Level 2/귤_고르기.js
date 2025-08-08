function solution(k, tangerines) {
    hash = {};

    tangerines.forEach((tangerine) => {
        if (!hash[tangerine]) hash[tangerine] = 0;
        hash[tangerine]++;
    });

    const arr = Object.values(hash).sort((a, b) => b - a);

    let rest = tangerines.length;
    while (rest - arr.at(-1) >= k) {
        rest -= arr.pop();
    }

    return arr.length;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
