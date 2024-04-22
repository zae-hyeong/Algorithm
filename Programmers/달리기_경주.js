function solution(players, callings) {
  const hash = {};
  for (let i = 0; i < players.length; i++) {
    hash[players[i]] = i;
  }

  let frontPlayer ='';
  let backPlayer = '';

  for (let calledPlayer of callings) {
    frontPlayer = players[hash[calledPlayer] - 1];
    backPlayer = players[hash[calledPlayer]];

    [players[hash[calledPlayer]], players[hash[calledPlayer] - 1]] = [players[hash[calledPlayer] - 1], players[hash[calledPlayer]]];

    hash[frontPlayer] += 1;
    hash[backPlayer] -= 1;
  }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
