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

function solution(inputLines) {
    const [N, K] = inputLines[0].split(" ").map((v) => parseInt(v));
    const [, ...strs] = [...inputLines];
    const items = strs.map((v) => v.split(" ").map((v) => parseInt(v))); //[무게, 가치]
    items.unshift([]);
    console.log(items);
    const dp = Array.from({ length: N + 1 }, () =>
        Array.from({ length: K + 1 }, () => 0)
    );

    for (let i = 1; i <= K; i++) {
        dp[0][i] = i >= items[0][0] ? items[0][1] : 0;
    }

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            if(items[i][0] <= j) 
                dp[i][j] = Math.max(
                    dp[i-1][j],
                    dp[i-1][j - items[i][0]] + items[i][1]
                );
        }
    }

    console.table(dp);
}
solution(["4 7", "6 13", "4 8", "3 6", "5 12"]); // 14
