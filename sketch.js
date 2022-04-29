var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyDown("w")){
    ball.y-=10
  }
  if(keyDown("s")){
    ball.y+=10
  }
  if(keyDown("d")){
    ball.x+=10
  }
  if(keyDown("a")){
    ball.x-=10
  }
}