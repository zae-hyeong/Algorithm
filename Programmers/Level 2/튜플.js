function solution(s) {
    s = s
        .slice(2, -2)
        .split("},{")
        .map((v) => v.split(","))
        .sort((a, b) => a.length - b.length);

    const visited = new Set();
    const answer = [];
    s.forEach((arr) => {
        arr.forEach((v) => {
            if (visited.has(v)) return;

            visited.add(v);
            answer.push(+v);
        });
    });

    return answer;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4];
