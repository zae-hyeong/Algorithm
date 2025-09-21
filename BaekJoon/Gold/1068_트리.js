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

function solution(inputs) {
    const N = +inputs[0];
    const select = +inputs[2];
    const nums = inputs[1].split(" ").map((v) => +v);

    //console.log(N, select, nums);

    const graph = Array.from({ length: N }, () => Array.from({ length: 0 }));
    let root = -1;
    nums.forEach((v, idx) => {
        if (v == -1) {
            root = idx;
            return;
        }
        graph[v].push(idx);
    });

    //for (const c of graph) console.log(c);

    //console.log(root);
    let count = 0;

    function check(idx) {
        if (idx === select) return;

        let cnt = 0;
        for (const next of graph[idx]) {
            if (next === select) continue;
            cnt++;
            check(next);
        }

        if (cnt === 0) count++;
    }

    if (root !== select) check(root);

    console.log(count);
}

solution(["5", "-1 0 0 1 1", "2"]);
solution(["5", "-1 0 0 1 1", "1"]);
solution(["5", "-1 0 0 1 1", "0"]);
//solution(["9", "-1 0 0 2 2 4 4 6 6", "4"]);
//solution(["4", "3 -1 1 2", "0"]);
