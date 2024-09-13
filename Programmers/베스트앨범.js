function solution(genres, plays) {

  const genreInfoHash = {};

  for (let i = 0; i < genres.length; i++) {
    const genreInfo = { totalPlays: 0, maxPlaysSongIndex: [] };

    if (genreInfoHash[genres[i]] === undefined) {
      genreInfo.totalPlays = plays[i];
      genreInfo.maxPlaysSongIndex[0] = i;

      genreInfoHash[genres[i]] = genreInfo;
    } else {
      genreInfoHash[genres[i]].totalPlays += plays[i];

      if (plays[genreInfoHash[genres[i]].maxPlaysSongIndex[0]] < plays[i]) {
        genreInfoHash[genres[i]].maxPlaysSongIndex[1] =
          genreInfoHash[genres[i]].maxPlaysSongIndex[0];
        genreInfoHash[genres[i]].maxPlaysSongIndex[0] = i;
      } else if (plays[genreInfoHash[genres[i]].maxPlaysSongIndex[0]] === plays[i]){
      genreInfoHash[genres[i]].maxPlaysSongIndex[1] = i;
      }
        else if (plays[genreInfoHash[genres[i]].maxPlaysSongIndex[1]] < plays[i]) {
        genreInfoHash[genres[i]].maxPlaysSongIndex[1] = i;
      }
    }
  }

  const genreArray = [];
  for (const g in genreInfoHash) {
    genreArray.push({genre: g, ...genreInfoHash[g]});
  }
  genreArray.sort((a, b) => b.totalPlays - a.totalPlays);

  var answer = [];
  for (const i in genreArray) {
    answer.push(genreArray[i].maxPlaysSongIndex[0]);
    answer.push(genreArray[i].maxPlaysSongIndex[1]);
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [800, 600, 150, 800, 2500]
  )
);
