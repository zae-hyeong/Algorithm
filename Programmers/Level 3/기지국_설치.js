function solution(n, stations, w) {
    let answer = 0;

    let start = 1;
    const range = 2 * w + 1;

    for (let i = 0; i < stations.length; i++) {
        const apts = stations[i] - w - start;

        if (apts > 0) {
            answer += Math.floor(apts / range);
            if (apts % range > 0) answer += 1;
        }

        start = stations[i] + w + 1;
    }

    if(n > stations.at(-1)) {
        const apts = n - start + 1;
        
        if(apts > 0) {
            answer += Math.floor(apts / range);
            if(apts % range > 0) answer += 1;
        }
    }

    return answer;
}

function timeout_solution(n, stations, w) {
    let answer = 0;

    let start = 1;
    const range = 2 * w + 1;

    for (let i = 0; i <= stations.length; i++) {
        const apts = i !== stations.length ? stations[i] - w - start : n - start + 1; //timeout의 원인
        if (apts > 0) {
            answer += Math.floor(apts / range);
            if (apts % range > 0) answer += 1;
        }

        start = stations[i] + w + 1;
    }

    return answer;
}

console.time();
for(let i = 0; i < 100000; i++)
    solution(200_000_000, Array.from({length: 10000}, (_, i) => i * 5), 1)
console.timeEnd();


console.time();
for(let i = 0; i < 100000; i++)
    timeout_solution(200_000_000, Array.from({length: 10000}, (_, i) => i * 5), 1)
console.timeEnd();