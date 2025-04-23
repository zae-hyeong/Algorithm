function solution(diffs, times, limit) {
    let min = 1;
    let max = -1;

    for(const diff of diffs) {
        if (max < diff) max = diff;
    }

    while (min <= max) {
        const centerLevel = Math.floor((min + max) / 2);
        
        // console.log('min, max, center', min, max, centerLevel);
        
        let totalTime = 0;
        for (let [i, diff] of diffs.entries()) {
            if (diff <= centerLevel) totalTime += times[i];
            else if (i === 0) totalTime += (times[i] * (diff - centerLevel));
            else
                totalTime +=
                    ((times[i] + times[i - 1]) * (diff - centerLevel) + times[i]);
        }
        // console.log('totalTime', totalTime);

        if (totalTime > limit) min = centerLevel + 1;
        else max = centerLevel - 1;
    }

    return min;
}

console.log(solution([0, 0, 0], [2, 4, 7], 30));
console.log(solution([1, 5, 3], [2, 4, 7], 30));
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));
console.log(
    solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012)
);
