function solution(t, p) {

  let start = 0;
  let end = p.length;  

  var answer = 0;

  while (end <= t.length) {
    if (+t.slice(start, end) <= +p) answer++;

    start++;
    end++;
  }

  return answer;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));