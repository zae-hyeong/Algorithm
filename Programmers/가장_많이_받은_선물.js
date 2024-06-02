function solution(friends, gifts) {

  //받은 선물과 준 선물의 개수, 선물지수를 저장할 2차원 배열(i번째 사람의 선물지수는 table[i][i]에 저장된다)
  const table = Array.from({ length: friends.length }, () =>
    Array.from({ length: friends.length }, () => 0)
  );

  //indexOf를 사용하지 않기 위한 index 객체 생성
  let index = {};
  for (let i = 0; i < friends.length; i++) {
    index[friends[i]] = i;
  }

  let giver;
  let receiver;
  for (let i = 0; i < gifts.length; i++) {
    [giver, receiver] = gifts[i].split(" ");
    table[index[giver]][index[receiver]] += 1;

    // 선물지수
    table[index[giver]][index[giver]] += 1;
    table[index[receiver]][index[receiver]] -= 1;
  }

  // 받는 선물 개수 구하기
  const NumOfGiftsToReceive = new Array(friends.length).fill(0);

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      if (table[i][j] > table[j][i]) {
        NumOfGiftsToReceive[i] += 1;
      }
      if (table[i][j] === table[j][i]) {
        if (table[i][i] > table[j][j]) NumOfGiftsToReceive[i] += 1;
      }
    }
  }

  return Math.max(...NumOfGiftsToReceive);
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);
console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
);
console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
);
