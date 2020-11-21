
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

function Bouncing(object1,object2) 
{

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 

}
