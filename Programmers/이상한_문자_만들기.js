function solution(s) {
  var answer = "";

  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (s[i] === " ") {
      answer += " ";
      j = 0;
      i++;
      continue;
    }
    if (j % 2 === 0) answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();;

    i++;
    j++;
  }
  return answer;
}

console.log(solution("try hello world"));
console.log(solution("asdjgbkjsd oasdngoi awetnoiwent"));
console.log(solution("ttyawe"));
console.log(solution("i i i i i i i i"));
