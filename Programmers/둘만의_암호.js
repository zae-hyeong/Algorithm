function solution(s, skip, index) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  var answer = "";

  for (a of skip) {
    alphabet = alphabet.replace(a, "");
    console.log(alphabet);
  }

  for (b of s) {
    answer +=
      alphabet[
        alphabet.indexOf(b) + index < alphabet.length
          ? alphabet.indexOf(b) + index
          : alphabet.indexOf(b) + index >= 2 * alphabet.length
          ? alphabet.indexOf(b) + index - (2 * alphabet.length)
          : alphabet.indexOf(b) + index - alphabet.length
      ];
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
console.log(solution("zac", "wbqd", 1));
