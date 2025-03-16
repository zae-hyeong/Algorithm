function solution(number, k) {
  const nums = Array.from(number);

  let idx = 0;

  const stack = [];

  let i = 0;

  while (k > 0 && i < nums.length) {
    while (k > 0 && stack.at(-1) < nums[i]) {
      stack.pop();
      k--;
    }
    stack.push(nums[i]);
    i++;
  }

  while (i < nums.length) {
    stack.push(nums[i]);
    i++;
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("54321", 2));
console.log(solution("12345", 2));
