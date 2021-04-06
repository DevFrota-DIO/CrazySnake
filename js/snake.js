
let vel1=0;
let vel2=0;
let varSnakeColor;
let snakeBody = [];
let conti = -1;
let contz = -1;
let setState = 0;
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
let dataSnake= [200,165,130,95,60,25];

function randomSnake(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  function snakeColor(val) {
    if (val == 0) {
     return varSnakeColor = 'rgb(' + randomSnake(0,255) + ',' + randomSnake(0,255) + ',' + randomSnake(0,255) +')';
    } else if (val == 1) {
      return varSnakeColor = 'rgb(' + randomSnake(0,255) + ',' + randomSnake(0,255) + ',' + randomSnake(0,255) +')';
    }
    
  }

  function setRgba(val) {
    if (val == 1) {
      return '1';
    } else if(val == 2){
      return '0.15';
    }
    
  }   

//----------------------------------------------------------------------
function criaSnake() {
    
    document.addEventListener("keydown", keyDownEvent);
  }


  let contStop = 1;

  function setCurv(val) {
    function align(velX, velY) {
      if (velX == 0 && velY < 0) {
              for (let i = 1; i < 35; i++) {
        snakeBody[val].x = snakeBody[val].x-i;
      }
      return snakeBody[val].x = snakeBody[0].x;
      }else if(velX == 0 && velY > 0) {
        for (let i = 1; i < 35; i++) {
          snakeBody[val].x = snakeBody[val].x+i;
      }
      return snakeBody[val].x = snakeBody[0].x;
      }
      if (velY == 0 && velX < 0) {
          for (let i = 1; i < 35; i++) {
            snakeBody[val].y = snakeBody[val].y-i; 
          }
          return snakeBody[val].y = snakeBody[0].y;
        }else if(velY == 0 && velX > 0) {
          for (let i = 1; i < 35; i++) {
            snakeBody[val].y = snakeBody[val].y+i;
          }
          return snakeBody[val].y = snakeBody[0].y;
        }
      
    }
  
          if (snakeBody[0].velX == 0 && snakeBody[0].velY < 0) {
            align(0, -1);
          snakeBody[val].y = snakeBody[val - 1].y + 40;
          snakeBody[val].velX = snakeBody[0].velX;
          snakeBody[val].velY = snakeBody[0].velY;
        }else if (snakeBody[0].velX == 0 && snakeBody[0].velY > 0) {
          align(0, 1);
          snakeBody[val].y = snakeBody[val - 1].y - 40;
          snakeBody[val].velX = snakeBody[0].velX;
          snakeBody[val].velY = snakeBody[0].velY;
        } 

          if (snakeBody[0].velY == 0 && snakeBody[0].velX < 0) {
          align(-1, 0);
          snakeBody[val].x = snakeBody[val - 1].x + 40;
          snakeBody[val].velX = snakeBody[0].velX;
          snakeBody[val].velY = snakeBody[0].velY;
        } else if (snakeBody[0].velY == 0 && snakeBody[0].velX > 0) {
          align(1, 0);
          snakeBody[val].x = snakeBody[val - 1].x - 40;
          snakeBody[val].velX = snakeBody[0].velX;
          snakeBody[val].velY = snakeBody[0].velY;
          }

  }


  Snake.prototype.distanceDetect = function () {
    for (let j = 1; j < snakeBody.length; j++) {
      if (!(this === snakeBody[j])) {
        const dx = snakeBody[j-1].x - snakeBody[j].x;
        const dy = snakeBody[j-1].y - snakeBody[j].y;
        const distanceSnake = Math.sqrt(dx * dx + dy * dy);
        if (distanceSnake > snakeBody[j-1].size + snakeBody[j].size) {
          setCurv(j);
        }
      }
    }
  };

 
  function moveSnake(val1, val2, z) {
    
    if (setState == 0) {
      snakeBody[0].velX = val1;
      snakeBody[0].velY = val2;
      playSounds(5);
      playSounds(6);
      countRegres(1,0);
      document.getElementById('aviso').style.display = 'none'
      for (let i = 1; i < snakeBody.length; i++) {
        snakeBody[i].velX = 14;
        snakeBody[i].velY = 0;
        
      }
      setState = 1;
    
    }else {
      snakeBody[0].velX = val1;
      snakeBody[0].velY = val2;
    }

  }
  
  function keyDownEvent(event) {

    switch (event.keyCode) {
      
      case 37:
        moveSnake(-14, 0,snakeBody[0].x);
        break;
      case 38:
        moveSnake(0, -14,snakeBody[0].y);
        break;
      case 39:
        moveSnake(14, 0, snakeBody[0].x);
        break;
      case 40:
        moveSnake(0, 14, snakeBody[0].y);
        break;
    }
    playSounds(5);
  }
//----------------------------------------------------------------------

function Snake(x, y, velX, velY, color, size) {
    
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;                                                                                                                                   
    this.color = color;
    this.size = size;
  }
  Snake.prototype.drawSnake = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  Snake.prototype.updateSnake = function() {
    if (this.x  > width || this.x  < 0) {
      nextX = this.x;

        if (nextX > width ) {
            this.x = 1;
        }else{
            this.x = width;
        }
    }
    
    if (this.y  > height) {
      this.y = 0;
    }
  
    if (this.y < 0) {
      this.y = height;
    }
    this.x += this.velX;
    this.y += this.velY;
  }

  function criaCorpo(val) {
    
    let val2;
      if (val == 1) {
        conti+=1;
        val2 = dataSnake[conti];
          return val2;
      }
      if (val == 2){
        contz+=1;
        val2 = dataSnake[contz];
        return val2;
      }
      
      
}

//Animação Loop Snake
  function loopSnake() {
    ctx.fillStyle = "rgb(0, 0, 0,"+setRgba(2)+")";
    ctx.fillRect(0, 0, width, height);

    while (snakeBody.length < 6) {
      let sizeSnake = 20;
      let snak = new Snake(

        criaCorpo(1),
        20,
        vel1,
        vel2,
        snakeColor(snakeBody.length),
        sizeSnake
      );
      snakeBody.push(snak);
    }

    for (let i = 0; i < snakeBody.length; i++) {

      snakeBody[i].drawSnake();
      snakeBody[i].updateSnake();
      snakeBody[i].distanceDetect();
    }
    
    criaSnake();

  }

  loopSnake();