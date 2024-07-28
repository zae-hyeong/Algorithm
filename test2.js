function performanceTest() {
  let counter = 0;
  for (let i = 0; i <= 100000; i++) {
      counter += 1;
      console.log(counter)
  }
  return counter;
}

// 콜 이전의 메모리 사용량 기록
const startMemory = performance.memory.usedJSHeapSize;

// 큰 수의 객체를 console.log로 호출
performanceTest();

// 콜 이후의 메모리 사용량 기록
const endMemory = performance.memory.usedJSHeapSize;

// console.log 호출에 의해 사용된 메모리 계산
const logMemory = endMemory - startMemory;
console.log(logMemory);