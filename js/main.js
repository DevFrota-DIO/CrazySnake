// setup canvas
let contColision = 0;
let contBalls = 20;
let contEats = 0;
let contTimer;

const canvas2 = document.getElementById("canvas1");
const ctx2 = canvas2.getContext("2d");
const width2 = (canvas2.width = window.innerWidth);
const height2 = (canvas2.height = window.innerHeight);




// Função gera valor randômico

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx2.beginPath();
  ctx2.fillStyle = this.color;
  
  ctx2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx2.fill();
};

let balls = [];

//Loop de animação
function loop() {
  ctx2.fillStyle = "rgb(0, 0, 0)";
  ctx2.fillRect(0, 0, width2, height2);

  while (balls.length < contBalls) {
    let size = 20;
    let ball = new Ball(

      random(0 + size, width2 - size),
      random(0 + size, height2 - size),
      random(-7, 7),
      random(-7, 7),
      "rgb(" +
        random(0, 255) +
        "," +
        random(0, 255) +
        "," +
        random(0, 255) +
        ")",
      size
    );
    balls.push(ball);
  }

  for (let i = 0; i < balls.length; i++) {

    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
    if (balls[i].size == 0) {
      balls.splice(i, 1);
      contBalls -=1;
     } 
  }

  const requestOne = requestAnimationFrame(loop);
  const requestTwo  = requestAnimationFrame(loopSnake);
  if (balls.length < 1 && setState > 0) {
    cancelAnimationFrame(requestOne);
    cancelAnimationFrame(requestTwo);
      countRegres(2, contEats);
  } 
  
}

function contStrike(val) {
  
  contColision += val;
  if (contColision == 3 && contBalls < 200) {
    contBalls += val;
    contColision = 0;
  }
}

Ball.prototype.update = function () {
  if (this.x + this.size >= width2) {
    this.velX = -this.velX;
    contStrike(1);
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
    contStrike(1);
  }

  if (this.y + this.size >= height2) {
    this.velY = -this.velY;
    contStrike(1);
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
    contStrike(1);
  }

  this.x += this.velX;
  this.y += this.velY;
};
function ballRemove(val) {
  varRemove = this.size;
  for (let i = 0; i < varRemove; i++) {
    ctx2.arc(this.x, this.y, this.size - i, 0, 2 * Math.PI);
  }
}

Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distanceBall = Math.sqrt(dx * dx + dy * dy);

      if (distanceBall < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
          
      }
    }
    if (!(this === snakeBody[0]) && setState > 0) {
      const dx = snakeBody[0].x - balls[j].x;
      const dy = snakeBody[0].y - balls[j].y;
      const distanceColision = Math.sqrt(dx * dx + dy * dy);
      if (distanceColision < snakeBody[0].size + balls[j].size) {
        playSounds(2);
        contEats +=1;
        setRecords(1, contEats); 
        balls[j].size = 0;
        
      }
    }
  }
};

loop();

