function solution(s, skip, index) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  var answer = "";

  for (a of skip) {
    alphabet = alphabet.replace(a, "");
  }

  for (b of s) {
    const idxB = alphabet.indexOf(b);

    answer +=
      alphabet[
        idxB + index < alphabet.length
          ? idxB + index
          : idxB + (index % alphabet.length) - alphabet.length
      ];
  }

  return answer;
}

function solution(s, skip, index) {
  let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz").filter((v) => !skip.includes(v));

  return Array.from(s).map((v) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length]).join('');
}

console.log(solution("aukks", "wbqd", 27));