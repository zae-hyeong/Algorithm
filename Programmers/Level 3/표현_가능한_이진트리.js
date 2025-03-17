function toBinaryArray(num) {
  const arr = [];
  while (num > 0) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
    // console.log(num,':', arr);
  }

  let n = 0;
  while (2 ** n - 1 < arr.length) n++;
  while (2 ** n - 1 - arr.length) arr.push(0);

  return arr.reverse();
}

function solution(numbers) {
  const answer = [];
  for (const number of numbers) {
    const binaryArr = toBinaryArray(number);
    // console.log(binaryArr);

    const result = (function _helper(startIdx, endIdx, parentNum) {
      // console.log(startIdx, endIdx, parentNum);
      if (startIdx > endIdx) return 1;

      const centerIdx = Math.floor((startIdx + endIdx) / 2);

      if (parentNum === 0 && binaryArr[centerIdx] === 1) return 0;

      const r1 = _helper(startIdx, centerIdx - 1, binaryArr[centerIdx]);
      const r2 = _helper(centerIdx + 1, endIdx, binaryArr[centerIdx]);

      return r1 && r2;
    })(0, binaryArr.length - 1, 1);

    answer.push(result);
  }

  return answer;
}

console.log(solution([7, 42, 5]));
console.log(solution([63, 111, 95]));
