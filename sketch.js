var movingRect
var fixedRect
var rect1,rect2
var rect3,rect4
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
  rect1=createSprite(100,100,50,80);
  rect1.shapeColor="yellow";
  rect1.velocityX=2;
  rect2=createSprite(700,100,80,50);
  rect2.shapeColor="yellow";
  rect2.velocityX=-2
  rect3=createSprite(700,200,80,50);
  rect3.shapeColor="yellow";
  rect4=createSprite(500,200,80,50);
  rect4.shapeColor="yellow";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  
  if (isTouching(movingRect,rect3)){
    rect3.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    rect3.shapeColor="red"
    movingRect.shapeColor="red"
  }
bounceoff(rect1,rect2);
  drawSprites();
} 

