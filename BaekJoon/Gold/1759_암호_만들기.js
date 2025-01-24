// let givenInput = [];
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline
//   .on("line", function (line) {
//     givenInput.push(line.trim());
//   })
//   .on("close", function () {
//     solution(givenInput);
//     process.exit();
//   });

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
  const L = +inputLines[0].split(" ").map((v) => +v)[0];
  const alphabets = inputLines[1].split(" ");

  const vs = new Set(["a", "e", "i", "o", "u"]);
  const vowles = alphabets.filter((v) => vs.has(v));
  const consonants = alphabets.filter((v) => !vs.has(v));

  /* 모음 / 자음 개수별 조합 만들기 */
  const vowlesHash = new Map();
  const consonantsHash = new Map();

  for (let i = 1; i <= L - 2; i++) {
    vowlesHash.set(i, []);
    consonantsHash.set(L - i, []);
  }

  const subStr = [];

  function combinationAll(arr, i, isVowle) {
    if (i === arr.length) {
      if (isVowle && vowlesHash.has(subStr.length))
        vowlesHash.get(subStr.length).push([...subStr]);

      if (!isVowle && consonantsHash.has(subStr.length))
        consonantsHash.get(subStr.length).push([...subStr]);

      return;
    }

    subStr.push(arr[i]);
    combinationAll(arr, i + 1, isVowle);

    subStr.pop();
    combinationAll(arr, i + 1, isVowle);
  }

  combinationAll(vowles, 0, true);
  combinationAll(consonants, 0, false);

  /* 모음, 자음 합쳐서 조합 만들기 */

  function combinationVC(numOfV, numOfC) {
    const arr = [...vowlesHash.get(numOfV), ...consonantsHash.get(numOfC)];

    console.log(arr);
  }

  for(const numOfVowles of vowlesHash.keys()) {
    combinationVC(numOfVowles, L-numOfVowles);
  }

  console.log(vowlesHash, consonantsHash);
}

console.log(solution(["4 6", "a t c i s w"]));
