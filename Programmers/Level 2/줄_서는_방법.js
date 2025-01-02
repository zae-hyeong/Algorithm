/* 실패 : Call Stack overflow
n >= 10일때 콜스택을 넘어감

function solution(n, k) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);

  return (function _combination(arr) {
    if (arr.length === 1) return [arr];

    const result = [];

    arr.forEach((v, i, arr) => {
      const tempArr = [...arr];  // 재사용해야 하기 때문에 원본 배열을 보존해야 함

      tempArr.splice(i, 1);  // 반환값은 '제거된 요소의 배열'임 착각하면 안됨.
      //놀랍게도 프로그래머스가 toSpliced를 지원하지 않아서 이렇게 함

      const returnArr = _combination(tempArr);
      result.push(...returnArr.map((returnVal) => [v, ...returnVal]));
    });

    return result;
  })(nums)[k - 1];
}
*/

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

function solution(n, k) {
  const resultArr = [];

  const nums = Array.from({ length: n }, (_, i) => i + 1);

  k = k - 1;

  let divied = factorial(n - 1);

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / divied);
    resultArr.push(...nums.splice(index, 1));

    k = k % divied;
    divied = divied / i;
  }

  return resultArr;
}

console.log(solution(3, 5));
console.log(solution(4, 7));
console.log(solution(10, 5));
