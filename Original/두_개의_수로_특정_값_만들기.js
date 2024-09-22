/* 
  240p : 두 개의 수로 특정 값 만들기
  n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 이 중에서 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하시오.
*/

function solution(arr, target) {
  const obj = {};
  arr.map((num) => (obj[num] = true));

  for (const num of arr) {
    if (obj[target - num] && (target - num) !== num) return true;
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); //true
console.log(solution([2, 3, 5, 9], 10)); //false
