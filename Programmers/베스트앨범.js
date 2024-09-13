function solution(genres, plays) {
  const genresObj = {};
  const playsObj = {};

  for (let i = 0; i < genres.length; i++) {
    if (genresObj[genres[i]] === undefined) genresObj[genres[i]] = [];
    if (playsObj[genres[i]] === undefined) playsObj[genres[i]] = 0;

    genresObj[genres[i]].push([i, plays[i]]);
    playsObj[genres[i]] += plays[i];
  }

  const sortedGenres = Object.keys(playsObj).sort(
    (a, b) => playsObj[b] - playsObj[a]
  );
  
  const answer = [];
  for (const gen of sortedGenres) {
    const sortedSong = genresObj[gen].sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);

    answer.push(sortedSong[0][0]);
    answer.push(sortedSong[1][0]);
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
