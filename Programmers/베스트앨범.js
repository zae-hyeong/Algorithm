function solution(genres, plays) {
  const totalPlays = {};
  const albums = {};

  for (let i = 0; i < genres.length; i++) {
    totalPlays[genres[i]] = totalPlays[genres[i]] + plays[i] || plays[i];

    if (albums[genres[i]] === undefined) albums[genres[i]] = [[i, plays[i]]];
    else albums[genres[i]].push([i, plays[i]]);
  }

  const sortedGenre = Object.keys(totalPlays).sort(
    (a, b) => totalPlays[b] - totalPlays[a]
  );

  let answer = [];

  for (const genre of sortedGenre) {
    const sortedAlbum = albums[genre].sort((a, b) =>
      a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
    );

    sortedAlbum[0] && answer.push(sortedAlbum[0][0]);
    sortedAlbum[1] && answer.push(sortedAlbum[1][0]);
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

console.log(
  solution(
    ["classic", "classic", "classic", "pop"], [500, 150, 800, 2500]
  ) // [3, 2, 0]
);
