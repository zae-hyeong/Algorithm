const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

function solution(input) {
  const [N, M] = input.split(" ").map((v) => +v);
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  function _combination(arr, n) {
    if (n === 1) return arr.map((v) => [v]);

    const result = [];

    arr.forEach((fixed, i, arr) => {
      const combines = _combination(arr.slice(i + 1), n - 1).map((comb) => [
        fixed,
        ...comb,
      ]);
      result.push(...combines);
    });
    return result;
  }

  const result = _combination(arr, M);
  console.log(result.map((v) => v.join(" ")).join("\n"));
}
