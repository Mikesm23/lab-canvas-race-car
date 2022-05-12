const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "#FFFFFF";
const startBtn = document.querySelector("#start-button");

// Car related variables
let carX = 225;
let carY = 580;
let carWidth = 50;
let carHeight = 100;
let carSpeedValue = 3;
let carDirectionX = carSpeedValue;
let carDirectionY = carSpeedValue;

let isCarGoingLeft = false;
let isCarGoingRight = false;

// Obstacle Variables

let tireX = 150;
let tireY = 400;
let tireWidth = 80;
let tireHeight = 80;

/* Circle Drawing
let circleObstacleX = 150;
let circleObstacleY = 400;
let circleObstacleRadius = 40;*/

let holeX = 300;
let holeY = 200;
let holeW = 150;
let holeH = 150; 

/* SquareDrawing
let squareObstacleX = 300;
let squareObstacleY = 200;
let squareObstacleW = 100;
let squareObstacleH = 100; */

let logX = 50;
let logY = 50;
let logW = 200;
let logH = 100;

/* Rectangle Drawing
let rectObstacleX = 50;
let rectObstacleY = 50;
let rectObstacleW = 200;
let rectObstacleH = 30;*/

let bananaX = 380;
let bananaY = 10;
let bananaW = 70;
let bananaH = 70;

// Other variables (not used)
//let score = 0;
// let gameOver = false;

// Road image
const imgRoad = new Image();
imgRoad.src = '/images/road.png';

// Car Image
const imgCar = new Image();
imgCar.src = '/images/car.png';

// Tire Image
const imgTire = new Image();
imgTire.src = '/images/tire.png';

// Hole Image
const imgHole = new Image();
imgHole.src = '/images/hole.png';

// Log Image
const imgLog = new Image();
imgLog.src = '/images/log.png';

// Banana Image
const imgBanana = new Image();
imgBanana.src = '/images/banana.png';

let animationFrameId;

function drawRoad() {
  ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
}

function drawCar() {
  ctx.drawImage(imgCar,carX,carY,carWidth,carHeight);
  };

function drawTire() {
  ctx.drawImage(imgTire,tireX,tireY,tireWidth,tireHeight);
};

function drawHole() {
  ctx.drawImage(imgHole,holeX,holeY,holeW,holeH);
};

function drawLog() {
  ctx.drawImage(imgLog,logX,logY,logW,logH);
};

function drawBanana() {
  ctx.drawImage(imgBanana,bananaX,bananaY,bananaW,bananaH);
};

/*function drawCircleObstacle() {
  ctx.beginPath();
  ctx.arc(circleObstacleX, circleObstacleY, circleObstacleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}*/

/*function squareObstacle() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(squareObstacleX, squareObstacleY, squareObstacleW, squareObstacleH);
  ctx.closePath();
  }
  */

/* function rectObstacle() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(rectObstacleX, rectObstacleY, rectObstacleW, rectObstacleH);
  ctx.closePath();
  }
*/

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isCarGoingLeft) {
    if (carX > 0) {
      carX -= carSpeedValue;
    }
  } else if (isCarGoingRight) {
    if (carX < canvas.width - carWidth) {
      carX += carSpeedValue;
    }
  }
  drawRoad()
  drawCar()
  // drawCircleObstacle()
  // squareObstacle()
  // rectObstacle()
  drawTire()
  drawLog()
  drawHole()
  drawBanana()
  animationFrameId = requestAnimationFrame(animate);
}

document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
    isCarGoingLeft = true;
  }
  if (event.code === "ArrowRight") {
    isCarGoingRight = true;
  }
});

document.addEventListener("keyup", event => {
  isCarGoingLeft = false;
  isCarGoingRight = false;
});

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    restartGame()
  };


  function startGame() {
    animate()
    document.getElementById('start-button').innerHTML = 'Restart Race!' // replaces text
    console.log('startgame button clicked');

  }
  function restartGame() {
    // window.location.reload().onclick
    // document.getElementById('start-button').innerHTML = 'Start Race!'
    console.log('restart button clicked');
  
  }
};
