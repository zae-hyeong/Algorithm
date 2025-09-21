let givenInput: string[] = [];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline
    .on("line", function (line: string) {
        givenInput.push(line.trim());
    })
    .on("close", function () {
        solution(givenInput);
        process.exit();
    });

function getMax(num: number): string {
    let result = [];
    if (num % 2 === 1) {
        result.push(7);
        num -= 3;
    }

    const loop = Math.floor(num / 2);
    for (let i = 0; i < loop; i++) {
        result.push(1);
    }

    return result.join("");
}

function solution(inputLines: string[]) {
    const [, ...nums] = inputLines.map((v) => +v);

    const dp = Array.from({length: 101}, () => Number.MAX_VALUE);
    dp [2] = 1;
    dp [3] = 7;
    dp [4] = 4;
    dp [5] = 2;
    dp [6] = 6;
    dp [7] = 8;
    dp [8] = 10;
    
    const add = [-1, -1, 1, 7, 4, 2, 0, 8];

    //점화식 : dp[n] = min(dp[n-2]+add)
    let tmp: number = -1;
    for (let i = 9; i <= 100; i++) {
        for (let j = 2; j <= 7; j++) {
            tmp = dp[i - j] * 10 + add[j];
            // console.log(tmp, " = ", dp[i - j] * 10, " + ", add[j]);
            dp[i] = Math.min(dp[i], tmp);
        }
    }

    for (const num of nums) {
        console.log(dp[num], getMax(num));
    }
}

solution(["4", "3", "6", "7", "15"]);
// solution(["1", "15"]);
