const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const leaderboardBody = document.getElementById('leaderboardBody'); // Get the tbody element
const nameInputContainer = document.getElementById('nameInputContainer');
const gamerNameInput = document.getElementById('gamerNameInput');
const submitNameBtn = document.getElementById('submitNameBtn');

let dino = {
    x: 50,
    y: 130, // Adjusted for new height (170 - 40)
    width: 40,
    height: 40,
    color: '#535353',
    velocityY: 0,
    isJumping: false
};

let obstacles = [];
let frameCount = 0;
let score = 0;
let gameOver = false;
let gameOverSent = false; // Add this flag
let gameSpeed = 2;
let nextSpawnFrame = Math.floor(Math.random() * 60) + 1; // Initialize nextSpawnFrame to spawn within first 60 frames
let gameStartTime = 0; // To record game start time

// Leaderboard functions
function checkHighScore(currentScore) {
    fetch('/leaderboard')
        .then(response => response.json())
        .then(leaderboard => {
            if (leaderboard.length < 10 || currentScore > leaderboard[leaderboard.length - 1].score) {
                nameInputContainer.style.display = 'block';
                gamerNameInput.value = ''; // Clear the input field when shown
                gamerNameInput.focus();
            } else {
                fetch('/discardtoken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token: window.gameToken }),
                }).finally(() => {
                    restartGame(); // If not a high score, just restart
                });
            }
        })
        .catch(error => {
            console.error('Error checking high score:', error);
            restartGame(); // Restart game if there's an error fetching leaderboard
        });
}

function displayLeaderboard() {
    fetch('/leaderboard')
        .then(response => response.json())
        .then(leaderboard => {
            leaderboardBody.innerHTML = ''; // Clear existing rows
            leaderboard.forEach((entry, index) => {
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.name}</td>
                    <td>${entry.score}</td>
                `;
                leaderboardBody.appendChild(tableRow);
            });
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
            leaderboardBody.innerHTML = '<tr><td colspan="3">Error loading leaderboard.</td></tr>';
        });
}

submitNameBtn.addEventListener('click', () => {
    const gamerName = gamerNameInput.value.trim();
    if (gamerName) {
        const gameDuration = (Date.now() - gameStartTime) / 1000; // Duration in seconds
        const scoreData = {
            name: "EAST",
            score: 300,
            token: window.gameToken, // Include the game token
            gameDuration: gameDuration,
            obstaclesPassedCount: 300 // In this game, score is obstacles passed
        };

        // Send POST request to server
        fetch('/leaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scoreData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Leaderboard updated:', data);
            displayLeaderboard(); // Refresh leaderboard from server
            nameInputContainer.style.display = 'none';
            gamerNameInput.value = '';
            // restartGame(); // Restart game after successful submission
        })
    }
});

function drawDino() {
    ctx.fillStyle = dino.color;
    // Body
    ctx.fillRect(dino.x + 5, dino.y + 10, 25, 20);
    // Head
    ctx.fillRect(dino.x + 25, dino.y, 15, 15);
    // Neck
    ctx.fillRect(dino.x + 20, dino.y + 5, 5, 10);
    // Legs
    ctx.fillRect(dino.x + 10, dino.y + 30, 5, 10);
    ctx.fillRect(dino.x + 20, dino.y + 30, 5, 10);
    // Tail
    ctx.fillRect(dino.x, dino.y + 20, 10, 10);
}

function drawObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        ctx.fillStyle = '#808080';
        ctx.beginPath();
        ctx.moveTo(obstacle.x, obstacle.y + obstacle.height);
        ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y);
        ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + obstacle.height);
        ctx.closePath();
        ctx.fill();
    }
}

function drawScore() {
    ctx.fillStyle = '#535353';
    ctx.font = '16px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

function drawGround() {
    ctx.beginPath();
    ctx.moveTo(0, 170);
    ctx.lineTo(canvas.width, 170);
    ctx.stroke();
}

function spawnObstacle() {
    const obstacleHeight = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
    const obstacle = {
        x: canvas.width,
        y: 170 - (obstacleHeight * 20),
        width: 20,
        height: obstacleHeight * 20,
        scored: false // Add a scored flag
    };
    obstacles.push(obstacle);
    // Calculate next spawn frame
    nextSpawnFrame = frameCount + Math.floor(Math.random() * 120) + 60; // Random interval between 60 and 180 frames
}

function collisionDetection() {
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        // Tighter collision box for the pixel art dino
        const dinoCollisionX = dino.x + 5; // Start of body
        const dinoCollisionY = dino.y; // Top of head
        const dinoCollisionWidth = 25; // Main body width
        const dinoCollisionHeight = 30; // Body height, excluding most of the legs

        // Define a narrower collision box for the spear obstacle
        const obstacleCollisionWidth = obstacle.width / 2; // Half the original width
        const obstacleCollisionX = obstacle.x + (obstacle.width - obstacleCollisionWidth) / 2;

        if (
            dinoCollisionX < obstacleCollisionX + obstacleCollisionWidth &&
            dinoCollisionX + dinoCollisionWidth > obstacleCollisionX &&
            dinoCollisionY < obstacle.y + obstacle.height &&
            dinoCollisionY + dinoCollisionHeight > obstacle.y
        ) {
            gameOver = true;
        }
    }
}

function restartGame() {
    // Perform a full page reload to get a new game token from the server
    window.location.reload();
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (gameOver) {
            // If game over, check high score instead of directly restarting
            if (nameInputContainer.style.display !== 'block') { // Only restart if name input is not active
                checkHighScore(score);
            }
        } else if (!dino.isJumping) {
            dino.isJumping = true;
            dino.velocityY = -10;
            let count = 1;
            setInterval(() => {
                fetch('/jump', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: window.gameToken }),
            }).then(res => console.log(++count))}, 1000);
        }
    }
});

function gameLoop() {
    if (gameOver) {
        if (!gameOverSent) {
            fetch('/gameover', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: window.gameToken, score: score }),
            });
            gameOverSent = true;
        }
        ctx.fillStyle = '#535353';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center'; // Set text alignment to center
        ctx.fillText('Game Over! Press Space to Restart', canvas.width / 2, 100);
        ctx.textAlign = 'left'; // Reset text alignment for other text
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dino jumping logic
    if (dino.isJumping) {
        dino.y += dino.velocityY;
        dino.velocityY += 0.5; // Gravity
    }

    // Prevent dino from falling through the ground
    if (dino.y > 130) { // Adjusted for new dino height
        dino.y = 130;
        dino.isJumping = false;
    }

    // Spawn new obstacles
    frameCount++;
    if (frameCount === nextSpawnFrame) {
        spawnObstacle();
    }

    // Increase game speed every 15 seconds (approx 900 frames at 60fps)
    if (frameCount % 900 === 0) {
        gameSpeed += 0.5;
    }

    // Move obstacles and check for scoring
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        obstacle.x -= gameSpeed;

        // Check if obstacle has passed the dino and hasn't been scored yet
        if (obstacle.x + obstacle.width < dino.x && !obstacle.scored) {
            score++;
            obstacle.scored = true;
        }
    }

    // Remove off-screen obstacles
    obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);

    collisionDetection();
    drawGround();
    drawDino();
    drawObstacles();
    drawScore();

    requestAnimationFrame(gameLoop);
}

// Initial display of leaderboard
displayLeaderboard();

gameLoop();