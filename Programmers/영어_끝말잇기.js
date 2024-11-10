function solution(n, words) {
  const set = new Set(); // 나온 단어 확인하기

  let recentLastChar = words[0][0];
  let currentFirstChar = '';

  for (const [i, v] of words.entries()) {
    currentFirstChar = v[0];

    if (set.has(v) || currentFirstChar !== recentLastChar)
      return [(i % n) + 1, Math.ceil((i + 1) / n)];

    recentLastChar = v[v.length - 1];
    set.add(v);
  };

  return [0, 0];
}

console.log(
  solution(3, [
    "tant",
    "tant",
    "tank",
  ])
);

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
