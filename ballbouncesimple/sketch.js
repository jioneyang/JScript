var x;
var y;
var speed;

function setup() {
  createCanvas(400, 400);
  x = 0;
  y = height/2;
  speed = 3;
}

function draw() {
  background(51);
  stroke(255);
  ellipse(x, y, 8, 8)
  if (x > width) {
    speed = -3; 
  } else if (x < 0) {
    speed = 3;
  }
   x += speed;
  
  
}