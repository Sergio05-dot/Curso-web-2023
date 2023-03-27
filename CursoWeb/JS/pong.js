const gameContainer = document.querySelector('.game-container');
const leftPaddle = document.querySelector('#leftPaddle');
const rightPaddle = document.querySelector('#rightPaddle');
const ball = document.querySelector('#ball');

let ballX = 290;
let ballY = 190;
let ballSpeedX = 5;
let ballSpeedY = 5;

function update() {
  // Move ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
  
  // Check if ball hits top or bottom
  if (ballY <= 0 || ballY + ball.offsetHeight >= gameContainer.offsetHeight) {
    ballSpeedY = -ballSpeedY;
  }
  
  // Check if ball hits left or right paddle
  if (ballX <= leftPaddle.offsetLeft + leftPaddle.offsetWidth && ballY + ball.offsetHeight >= leftPaddle.offsetTop && ballY <= leftPaddle.offsetTop + leftPaddle.offsetHeight) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballX + ball.offsetWidth >= rightPaddle.offsetLeft && ballY + ball.offsetHeight >= rightPaddle.offsetTop && ballY <= rightPaddle.offsetTop + rightPaddle.offsetHeight) {
    ballSpeedX = -ballSpeedX;
  }
  
  // Check if ball goes out of bounds
  if (ballX < 0 || ballX + ball.offsetWidth > gameContainer.offsetWidth) {
    ballX = 290;
    ballY = 190;
  }
  
  // Call update again
  window.requestAnimationFrame(update);
}

// Start the game loop
window.requestAnimationFrame(update);

// Move left paddle with mouse
gameContainer.addEventListener('mousemove', (event) => {
  const mouseY = event.clientY - gameContainer.offsetTop;
  if (mouseY >= 0 && mouseY + leftPaddle.offsetHeight <= gameContainer.offsetHeight) {
    leftPaddle.style.top = mouseY + 'px';
  }
});

// Move right paddle with arrow keys
document.addEventListener('keydown', (event) => {
    const arrow = event.key.replace('Arrow', '');
    if (arrow === 'Up' && rightPaddle.offsetTop >= 0) {
      rightPaddle.style.top = rightPaddle.offsetTop - 10 + 'px';
    }
    if (arrow === 'Down' && rightPaddle.offsetTop + rightPaddle.offsetHeight <= gameContainer.offsetHeight) {
      rightPaddle.style.top = rightPaddle.offsetTop + 10 + 'px';
    }
  });