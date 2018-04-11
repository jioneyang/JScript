var snake;
var food;
var scl = 20;
function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  food = new Food();
  frameRate(10);
  
}

function draw() {
  background(51);

  if (dist(snake.x, snake.y, food.x, food.y) < 2 ){
    food.update();
  }
  snake.update();
  snake.show();
  food.show();
  
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode == RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode == LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  
  this.update = function() {
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
    if (this.x > width - 20) {
      this.x = width - 20;
    } else if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > height - 20) {
      this.y = height - 20;
    } else if (this.y < 0) {
      this.y = 0;
    }
    
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, 20, 20);
  }
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}

function Food() {
  
  var food_numbers = [];
  for (var i = 1; i < (height - scl)/scl; i++) {
    food_numbers[i] = i*scl;

  }
  
  this.x = round(random(food_numbers));
  this.y = round(random(food_numbers));
  
  this.update = function() {
    this.x = round(random(food_numbers));
    this.y = round(random(food_numbers));
  }
  
  this.show = function() {
    fill(255, 0, 10);
    rect(this.x, this.y, 20, 20);
  }
}

