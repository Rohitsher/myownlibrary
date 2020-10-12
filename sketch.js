var fixedRect, movingRect;
var  gobject1,gobject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gobject1 = createSprite(800,200,80,30)
  gobject2 = createSprite(800,300,080,30)
}

function draw() {
  background(0,0,0);  
  fixedRect.x = World.mouseX;
  fixedRect.y = World.mouseY;
if(isTouching(movingRect,gobject1)){
  movingRect.shapeColor="red"
  gobject1.shapeColor="red"
}
else{
  movingRect.shapeColor="green"
  gobject1.shapeColor="blue"  
}
if(isTouching(fixedRect,gobject2)){
  fixedRect.shapeColor="red"
  gobject2.shapeColor="red"
}
else{
  fixedRect.shapeColor="green"
  gobject2.shapeColor="blue"  
}
drawSprites();
}
