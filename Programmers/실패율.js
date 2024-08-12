class Stage {
  constructor(stageNum, failureRate) {
    this.stageNum = stageNum;
    this.failureRate = failureRate;
  }
}

function solution(N, stages) {

  const stageUsers = new Array(N + 1).fill(0);

  for (let stage of stages)
    stageUsers[stage - 1] += 1;

  const numOfPlayersInStage = new Array(N + 1).fill(0);

  for (let i = 0; i < stageUsers.length; i ++) {
    for (let j = i; j < stageUsers.length; j++) {
      numOfPlayersInStage[i] += stageUsers[j];
    }
  }
  // console.log("stageUsers : ", stageUsers);
  // console.log("numOfPlayersInStage : ", numOfPlayersInStage);

  const failureRates = [];
  for (let i = 1; i < stageUsers.length; i ++) {
    failureRates.push(new Stage(i, stageUsers[i - 1] / numOfPlayersInStage[i - 1]))
  }
  
  failureRates.sort((prevStage, nextStage) => nextStage.failureRate - prevStage.failureRate);
  // console.log("failureRates : ", failureRates);

  var answer = [];
  for (let i = 0; i < failureRates.length; i++)
    answer.push(failureRates[i].stageNum);

  return answer;
}

const test = () => {
  console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));  //[3,4,2,1,5]
  console.log(solution(4, [4,4,4,4,4])); //[4,1,2,3]
}
test();