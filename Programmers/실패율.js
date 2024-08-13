class Stage {
  constructor(stageNum, failureRate) {
    this.stageNum = stageNum;
    this.failureRate = failureRate;
  }
}

function solution(N, stages) {
  const stageUsers = new Array(N + 1).fill(0);

  for (let stage of stages) stageUsers[stage - 1] += 1;

  const numOfPlayersInStage = new Array(N + 1).fill(0);

  for (let i = 0; i < stageUsers.length; i++) {
    for (let j = i; j < stageUsers.length; j++) {
      numOfPlayersInStage[i] += stageUsers[j];
    }
  }

  const failureRates = [];
  for (let i = 1; i < stageUsers.length; i++) {
    failureRates.push(
      new Stage(i, stageUsers[i - 1] / numOfPlayersInStage[i - 1])
    );
  }

  failureRates.sort(
    (prevStage, nextStage) => nextStage.failureRate - prevStage.failureRate
  );

  var answer = [];
  for (let i = 0; i < failureRates.length; i++)
    answer.push(failureRates[i].stageNum);

  return answer;
}

function solution2(N, stages) {
  //스테이지별 도전자 수. 0 스테이지와 모두 깬(N+1)을 추가한 N+2개 스테이지 배열 생성
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) challenger[stage] += 1;

  //실패율 계산. key=스테이지 번호, value=실패율
  const failureRate = {};
  let numOfUsers = stages.length;

  for (let i = 1; i <= N; i++) {
    //infinite 값으로 인한 에러 방지를 위한 코드
    if (numOfUsers === 0) {
      failureRate[i] === 0;
      continue;
    }

    //실패율 계산 = 스테이지에 있는 인원 수 / 스테이지를 지나간 인원 수
    failureRate[i] = challenger[i] / numOfUsers;

    //다음 스테이지에 도달한 인원 수 = 현재 스테이지에 도달한 인원 수 - 현재 스테이지에 남은 인원 수
    numOfUsers -= challenger[i];
  }

  //entries 함수를 사용하여, 스테이지(key)-실패율(value)을 배열로 바꾸고 실패율을 기준으로 정렬. 마지막으로 map으로 스테이지(key)만 남김
  return Object.entries(failureRate).sort((a, b) => b[1] - a[1]).map(f => parseInt(f[0]));
}

const test = () => {
  console.log(solution2(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
  console.log(solution2(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
};
test();
