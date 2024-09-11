function solution(records) {
  const log = [];

  const idToNickName = new Set();
  const stageComment = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (const record of records) {
    const [cmd, userId, nickName] = record.split(" ");

    if (cmd !== "Change") log.push([userId, cmd]);

    if (nickName) idToNickName[userId] = nickName;
  }

  return log.map((log) => `${idToNickName[log[0]]}${stageComment[log[1]]}`);
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
