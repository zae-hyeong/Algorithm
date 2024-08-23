function solution(prices) {
  const stack = []; // {sec : 시간, stockPrice : 해당 시간의 주가 }
  const answer = [];

  for (let currentSec = 0; currentSec < prices.length; currentSec++) {
    if (
      stack.length === 0 ||
      stack[stack.length - 1].stockPrice < prices[currentSec]
    )
      stack.push({
        sec: currentSec,
        stockPrice: prices[currentSec],
      });
    else {
      while (stack[stack.length - 1].stockPrice > prices[currentSec]) {
        const sec = stack.pop().sec;
        answer[sec] = currentSec - sec;
        stack.push({
          sec: currentSec,
          stockPrice: prices[currentSec],
        });
      }
    }
  }

  const lastSec = prices.length - 1;
  while (stack.length !== 0) {
    const sec = stack.pop().sec;
    answer[sec] = lastSec - sec;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
