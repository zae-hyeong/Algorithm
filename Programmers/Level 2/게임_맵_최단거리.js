class Queue {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    push(data) {
        this.arr.push(data);
        this.tail++;
    }

    pop() {
        return this.arr[this.head++];
    }
}

function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;

    const visited = Array.from({ length: N }, () => Array(M).fill(-1));
    visited[0][0] = 1;

    const isValidMove = (y, x) =>
        y >= 0 &&
        y < N &&
        x >= 0 &&
        x < M &&
        visited[y][x] < 0 &&
        maps[y][x] !== 0;

    const moves = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const queue = new Queue();
    queue.push([0, 0]);

    while (!queue.isEmpty()) {
        const [y, x] = queue.pop();

        for (const [dy, dx] of moves) {
            const [ny, nx] = [y + dy, x + dx];

            if (isValidMove(ny, nx)) {
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }

    return visited[N - 1][M - 1];
}

console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1],
    ])
);

// console.log(
//     solution([
//         [1, 0, 1, 1, 1, 1],
//         [1, 0, 1, 0, 0, 1],
//         [1, 0, 1, 1, 0, 1],
//         [1, 0, 0, 1, 0, 1],
//         [1, 1, 1, 1, 0, 1],
//     ])
// );
