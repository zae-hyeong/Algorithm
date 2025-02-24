function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  
  const stack = [];
  stack.push(0);

  const getTopNum = () =>
    stack[stack.length - 1] === undefined
      ? Infinity
      : numbers[stack[stack.length - 1]];

  for (let i = 1; i < numbers.length; i++) {
    while (numbers[i] > getTopNum()) {
      const index = stack.pop();
      result[index] = numbers[i];
    }

    stack.push(i);
  }

  return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
