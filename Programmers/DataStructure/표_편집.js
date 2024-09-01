class Cell {
  constructor(n, k) {
    this.arr = new Array(n).fill("O");
    this.curr = k;
    this.stack = [];
  }

  down(num) {
    for (let i = 0; i < num; i++) {
      if (this.arr[this.curr] === "O") this.curr++;
      else i--;
    }
    if (this.curr >= this.arr.length) this.up(1);
  }

  up(num) {
    for (let i = 0; i < num; i++) {
      if (this.arr[this.curr] === "O") this.curr--;
      else i--;
    }
    if (this.curr < 0) this.down(1);
  }

  removeCurrent() {
    arr[curr] = "X";
    this.stack.push(curr);
    this.down(1);
  }

  restore() {
    this.arr[this.stack.pop()] = "O";
  }

  getAllCells() {
    return this.arr.join("");
  }
}

function solution(n, k, cmds) {
  const cell = new Cell();

  for (const cmd of cmds) {
    let [command, num] = cmd.split(" ");
    num = parseInt(num);

    switch (command) {
      case "U":
        cell.up(num);
        break;
      case "D":
        cell.down(num);
        break;
      case "C":
        cell.removeCurrent();
        break;
      case "Z":
        cell.restore();
        break;
    }
  }

  cell.getAllCells();
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
); //"OOOOXOOO"
console.log(
  solution(8, 2, [
    "D 2",
    "C",
    "U 3",
    "C",
    "D 4",
    "C",
    "U 2",
    "Z",
    "Z",
    "U 1",
    "C",
  ])
); //"OOXOXOOO"
