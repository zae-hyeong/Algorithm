function solution(name, yearning, photo) {
  const hashTable = {};

  for (let i = 0; i < name.length; i++) {
    hashTable[name[i]] = yearning[i];
  }

  var answer = [];

  let localSum = 0;

  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      localSum = localSum + (hashTable[photo[i][j]] || 0);
    }
    answer.push(localSum);
    localSum = 0;
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);