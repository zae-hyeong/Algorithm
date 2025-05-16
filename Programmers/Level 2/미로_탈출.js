class Queue {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    push(x) {
        this.arr.push(x);
        this.tail++;
    }

    pop() {
        return this.arr[this.head++];
    }

    isEmpty() {
        return this.head === this.tail;
    }
}

function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;

    let start = [-1, -1];

    maps.forEach((line, y) => {
        for (let x = 0; x < M; x++) {
            if (line[x] === "S") start = [y, x];
            if (line[x] === "E") end = [y, x];
            if (line[x] === "L") lever = [y, x];
        }
    });

    function isValidMove(y, x, flag) {
        return (
            y >= 0 &&
            y < N &&
            x >= 0 &&
            x < M &&
            maps[y][x] !== "X" &&
            visited[y][x][flag] < 0
        );
    }

    const moves = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const visited = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => Array(2).fill(-1))
    );

    visited[start[0]][start[1]][0] = 0;

    const queue = new Queue();
    queue.push([...start, 0]);

    while (!queue.isEmpty()) {
        let [y, x, flag] = queue.pop();

        for (const [dy, dx] of moves) {
            const [ny, nx] = [y + dy, x + dx];

            
            if (isValidMove(ny, nx, flag)) {
                visited[ny][nx][flag] = visited[y][x][flag] + 1;

                if (maps[ny][nx] === "L") {
                    visited[ny][nx][1] = visited[y][x][0] + 1;
                    queue.push([ny, nx, 1]);
                    continue;
                }
                if(maps[ny][nx] === "E" && flag === 1) {
                    return visited[y][x][flag] + 1;
                }

                queue.push([ny, nx, flag]);
            }
        }
    }

    return -1;
}

console.log(solution(["SOEOL"]));
// console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
// console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
