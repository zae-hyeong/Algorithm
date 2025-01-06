function solution(prices) {
  const stack = [];
  const result = Array.from({ length: prices.length }, () => 0);

  prices.forEach((v, i, arr) => {
    while (v < arr[stack[stack.length - 1]]) {
      const popedIndex = stack.pop();

      result[popedIndex] = i - popedIndex;
    }
    stack.push(i);
  });

  while (stack.length) {
    const popedIndex = stack.pop();
    result[popedIndex] = prices.length - 1 - popedIndex;
  }

  return result;
}

console.log(solution([1, 2, 3, 2, 3])); //4, 3, 1, 1, 0
console.log(solution([1, 2, 3, 1, 2, 3, 3, 1, 2])); //	[8, 2, 1, 5, 3, 2, 1, 1, 0]
