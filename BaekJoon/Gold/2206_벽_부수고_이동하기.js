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

class Queue {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.shift();
  }

  isEmpty() {
    return this._arr.length === 0;
  }
}

function solution(inputLines) {
    const [N, M] = inputLines[0].split(" ").map((v) => parseInt(v));
    const [, ...strs] = [...inputLines];
    const arr = strs.map((v) => v.split("").map((v) => parseInt(v)));
    const minDistanceArr = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => Infinity)
    );

    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];

    return (function bfs() {
        const q = new Queue();
        q.push([0, 0, true, 1]); // [y, x, canBreak, distance]
        minDistanceArr[0][0] = 1;

        while (!q.isEmpty()) {
            const [y, x, canBreak, distance] = q.pop();

            if (y === N - 1 && x === M - 1) return distance;

            for (let i = 0; i < 4; i++) {
                const [ny, nx] = [y + dy[i], x + dx[i]];

                if (
                    0 <= ny &&
                    ny < N &&
                    0 <= nx &&
                    nx < M &&
                    minDistanceArr[ny][nx] > distance
                ) {
                    if (arr[ny][nx] === 1 && canBreak) {
                        q.push([ny, nx, false, distance + 1]);
                        minDistanceArr[ny][nx] = distance + 1;
                    }

                    if (arr[ny][nx] === 0) {
                        q.push([ny, nx, canBreak, distance + 1]);
                        minDistanceArr[ny][nx] = distance + 1;
                    }
                }
            }
        }

        return -1;
    })();
}

console.log(solution(["6 4", "0000", "1110", "1000", "0000", "0111", "0000"])); //15
//console.log(solution(["4 4", "0111", "1111", "1111", "1110"])); //-1;
