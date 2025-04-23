function solution(diffs, times, limit) {
    let level = -1;
    for(const diff of diffs) {
        if (level < diff) level = diff;
    }

    while (level >= 0) {
        let totalTime = 0;

        for (let [i, diff] of diffs.entries()) {
            if (diff <= level) totalTime += times[i];
            else if (i === 0) totalTime += times[i] * (diff - level);
            else
                totalTime +=
                    (times[i] + times[i - 1]) * (diff - level) + times[i];
        }

        if (totalTime > limit) return level + 1;
        level--;
    }

    return level + 1;
}

console.log(solution([0, 0, 0], [2, 4, 7], 30));
console.log(solution([1, 5, 3], [2, 4, 7], 30));
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));
console.log(
    solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012)
);
