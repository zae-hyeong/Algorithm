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

function solution2(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}

console.log(solution("aukks", "wbqd", 5));
console.log(solution("zac", "wbqd", 1));
