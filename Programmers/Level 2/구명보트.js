function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
      if (people[left] + people[right] <= limit) {
          left++;
      }
      right--;
      count++;
  }

  return count;
}
console.log(solution([70, 50, 80, 50], 100));
console.log(solution([30, 50, 50, 70], 100));
console.log(solution([30, 30, 40, 30, 70], 100));
