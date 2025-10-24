let count = 1;
setInterval(() => {
  fetch("/jump", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: window.gameToken }),
  }).then((res) => console.log(++count));
}, 800);

clearInterval(27);

const gameDuration = (Date.now() - gameStartTime) / 1000; // Duration in seconds
const scoreData = {
  name: "박재형은신이야",
  score: count,
  token: window.gameToken, // Include the game token
  gameDuration: gameDuration,
  obstaclesPassedCount: count, // In this game, score is obstacles passed
};

// Send POST request to server
fetch("/leaderboard", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(scoreData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Leaderboard updated:", data);
    displayLeaderboard(); // Refresh leaderboard from server
    nameInputContainer.style.display = "none";
    gamerNameInput.value = "";
    // restartGame(); // Restart game after successful submission
  });

fetch("/gameover", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ token: window.gameToken, score: count }),
});
