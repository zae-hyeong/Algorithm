function solution(numbers, target) {
  let answer = 0;

  (function _helper(sum, i) {
    if (i === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    _helper(sum + numbers[i], i + 1);
    _helper(sum - numbers[i], i + 1);
  })(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
