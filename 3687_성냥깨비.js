var givenInput = [];
var readline = require("readline").createInterface({
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
function getMax(num) {
    var result = [];
    if (num % 2 === 1) {
        result.push(7);
        num -= 3;
    }
    var loop = Math.floor(num / 2);
    for (var i = 0; i < loop; i++) {
        result.push(1);
    }
    return result.join("");
}
function solution(inputLines) {
    var _a = inputLines.map(function (v) { return +v; }), nums = _a.slice(1);
    var dp = Array.from({ length: 101 }, function () { return Number.MAX_VALUE; });
    dp[2] = 1;
    dp[3] = 7;
    dp[4] = 4;
    dp[5] = 2;
    dp[6] = 6;
    dp[7] = 8;
    dp[8] = 10;
    var add = [-1, -1, 1, 7, 4, 2, 0, 8];
    //점화식 : dp[n] = min(dp[n-2]+add)
    var tmp = -1;
    for (var i = 9; i <= 100; i++) {
        for (var j = 2; j <= 7; j++) {
            tmp = dp[i - j] * 10 + add[j];
            // console.log(tmp, " = ", dp[i - j] * 10, " + ", add[j]);
            dp[i] = Math.min(dp[i], tmp);
        }
    }
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        console.log(dp[num], getMax(num));
    }
}
solution(["4", "3", "6", "7", "15"]);
// solution(["1", "15"]);
