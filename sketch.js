
var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 800, 80, 50);
  movingRect.shapeColor="green"
  
  //movingRect.debug = true

  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green"

 // fixedRect.debug = true

 movingRect.velocityY = -10
 fixedRect.velocityY = 10
}


function draw() {
 
  background("black");  

  
Bouncing(movingRect,fixedRect)
 
  
  drawSprites();

}

