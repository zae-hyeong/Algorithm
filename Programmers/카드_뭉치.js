function solution(cards1, cards2, goal) {
  var answer = "";

  let w1 = cards1.shift();
  let w2 = cards2.shift();
  for (const w of goal) {
    if (w === w1) {
      w1 = cards1.shift();
    } else if (w === w2) {
      w2 = cards2.shift();
    } else return "No";
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
