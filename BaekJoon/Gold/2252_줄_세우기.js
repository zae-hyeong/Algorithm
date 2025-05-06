let givenInput = [];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline
    .on("line", function (line) {
        givenInput.push(line.trim());
    })
    .on("close", function () {
        solution(givenInput);
        process.exit();
    });

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
    const [N, M] = inputLines[0].split(" ").map((v) => +v);
    const [, ...inputs] = inputLines.map((line) =>
        line.split(" ").map((v) => +v)
    );

    const graph = Array.from({ length: N + 1 }, () => []);
    const indegrees = new Array(N + 1).fill(0);

    inputs.forEach(([a, b]) => {
        graph[a].push(b);
        indegrees[b] += 1;
    });

    const answer = [];
    const queue = [];
    for (let i = 1; i <= N + 1; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
        const cur = queue.shift();
        answer.push(cur);

        graph[cur].forEach((v) => {
            indegrees[v] -= 1;
            if (indegrees[v] === 0) queue.push(v);
        });
    }

    console.log(answer.join(" "));
}

solution(["3 2", "1 3", "2 3"]); //1 2 3
solution(["4 2", "4 2", "3 1"]); //4 2 3 1
solution(["6 6", "1 4", "4 3", "5 4", "2 5", "2 3", "6 2"]); //1, 6, 2, 5, 4, 3
