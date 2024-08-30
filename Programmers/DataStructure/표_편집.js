function solution(n, k, cmds) {
  const result = new Array(n).fill("O");

  let currentPosition = k;
  const stack = [];

  for (const cmd of cmds) {
    let [command, num] = cmd.split(" ");
    num = parseInt(num);

    switch (command) {
      case "U":
        for (let i = 0; i < num; i++) {
          if (result[currentPosition] === "O") currentPosition++;
        }
        break;
      case "D":
        for (let i = 0; i < num; i++) {
          if (result[currentPosition] === "O") currentPosition--;
        }
        break;
      case "C":
        // result[currentPosition] = "X";
        // if(currentPosition < n - 1) currentPosition++;
        // else {
        //   while () {
        //   }
        // }
        break;
      case "Z":
        break;
    }
  }

  return result.join("");
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
