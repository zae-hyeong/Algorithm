function solution(s) {
  const stack = [];

  for (c of s)
    stack[stack.length - 1] === c ? stack.pop() : stack.push(c);
  
  return stack.length ? 0 : 1;
}

const test = () => {
  console.log(solution("baabaa"));  //1
  console.log(solution("cdcd"));  //0
}

test();