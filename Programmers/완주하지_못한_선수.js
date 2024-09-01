function solution(participant, completion) {
  const object = {};

  for (const p of participant) {
    object[p] = object[p] === undefined ? 1 : object[p] + 1;
  }

  for (const c of completion) {
    object[c] -= 1;
  }


  for (const [k, v] of Object.entries(object)) {
    if (v !== 0) return k;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
