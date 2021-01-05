
var fixedRectangle,movingRectangle;


function setup() {
  createCanvas(1200,800);
  fixedRectangle= createSprite(600, 400, 50, 80);
  fixedRectangle.shapeColor="green";
  movingRectangle= createSprite(400, 200, 80, 30);
  movingRectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  console.log('distancex',movingRectangle.x-fixedRectangle.x);
 // console.log('distancey',movingRect.y-fixedRect.y);


 if(isTouching(movingRectangle,fixedRectangle))
 {
  fixedRectangle.shapeColor="blue";
  movingRectangle.shapeColor="blue";

 }


 else
 {

  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";


 }

  
  drawSprites();
}
