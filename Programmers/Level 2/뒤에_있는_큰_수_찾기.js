function solution(numbers) {
  const stack = [];
  const result = new Array(numbers.length).fill(-1);

  stack.push({
    num: numbers[0],
    index: 0,
  });

  const getTopNum = () =>
    stack[stack.length - 1] === undefined
      ? Infinity
      : stack[stack.length - 1].num;

  for (let i = 1; i < numbers.length; i++) {
    while (numbers[i] > getTopNum()) {
      const { num, index } = stack.pop();
      result[index] = numbers[i];
    }

    stack.push({
      num: numbers[i],
      index: i,
    });
  }

  return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
