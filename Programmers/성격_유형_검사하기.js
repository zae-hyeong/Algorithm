function solution(survey, choices) {
  answer = "";
  hash = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    left = survey[i][0];
    right = survey[i][1];

    if (choices[i] - 4 < 0) {
      hash[left] += 4 - choices[i];
    } else {
      choices[i] - 4 > 0;
      hash[right] += choices[i] - 4;
    }
  }

  answer += hash["R"] >= hash["T"] ? "R" : "T";
  answer += hash["C"] >= hash["F"] ? "C" : "F";
  answer += hash["J"] >= hash["M"] ? "J" : "M";
  answer += hash["A"] >= hash["N"] ? "A" : "N";

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); //	"TCMA"
console.log(solution(["TR", "RT", "TR"], [1, 7, 3])); //	"TCJA"
console.log(solution([], []));
