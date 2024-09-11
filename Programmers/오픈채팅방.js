function solution(records) {
  const answer = [];

  const idToNickName = new Set();

  for (const record of records) {
    const [cmd, userId, nickName] = record.split(" ");

    switch (cmd) {
      case "Enter":
        idToNickName[userId] = nickName;
        answer.push([userId, "님이 들어왔습니다."]);
        break;
      case "Leave":
        answer.push([userId, "님이 나갔습니다."]);
        break;
      case "Change":
        idToNickName[userId] = nickName;
        break;
    }
  }

  return answer.map(log => idToNickName[log[0]] + log[1]);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
