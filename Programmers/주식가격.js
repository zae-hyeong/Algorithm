function solution(prices) {
  const stack = [];
  const answer = new Array(prices.length).fill(0);

  for (let current = 0; current < prices.length; current++) {
    if (
      stack.length === 0 ||
      prices[stack[stack.length - 1]] <= prices[current]
    ) {
      stack.push(current);
      continue;
    }

    while (prices[stack[stack.length - 1]] > prices[current]) {
      const second = stack.pop();
      answer[second] = current - second;
    }
    stack.push(current);
  }

  while (stack.length) {
    const second = stack.pop();
    answer[second] = prices.length - second - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); //4, 3, 1, 1, 0
console.log(solution(	[1, 2, 3, 1, 2, 3, 3, 1, 2])); //	[8, 2, 1, 5, 3, 2, 1, 1, 0]