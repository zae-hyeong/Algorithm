class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.queue.push(data);
    this.tail++;
  }

  pop() {
    return this.queue[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function isValidMove(x, y, N, M, maps) {
  return x >= 0 && y >= 0 && x < M && y < N && maps[y][x] !== "X";
}

function solution(maps) {
  let startIdx = [-1, -1];
  let exitIdx = [-1, -1];

  const N = maps.length;
  const M = maps[0].length;

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  const visited = Array.from(Array(N), () => Array(M).fill(false).map(() => Array(2).fill(false)));

  const queue = new Queue();

  const mapArr = maps.map((v) => v.split(""));
  mapArr.forEach((arr, i) => {
    arr.forEach((v, j) => {
      if (v === "S") {
        startIdx = [i, j];
        queue.push([i, j, 0, 0]);
        visited[i][j][0] === true;
      }
      if (v === "E") {
        exitIdx = [i, j];
      }
    });
  });

  while (!queue.isEmpty()) {
    const [y, x, flag, time] = queue.pop();

    if (flag === 1 && maps[y][x] === "E") return time;

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (!isValidMove(nx, ny, N, M, maps)) continue;

      if (maps[ny][nx] === "L") {
        queue.push([ny, nx, 1, time + 1]);
        visited[ny][nx][1] = true;
      } else {
        queue.push([ny, nx, flag, time + 1]);
        visited[ny][nx][flag] = true;
      }
    }
  }

  return -1;
}

// console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])); // 16
// console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); // -1
console.log(solution(["LOEOS"])); // 6
