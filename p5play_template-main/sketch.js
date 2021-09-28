var sprite;
function setup() {
  createCanvas(400,400);
   sprite = createSprite(200,200,50,50);
}

function draw() 
{
  
  drawSprites();
  
if (keyIsDown(RIGHT_ARROW)){
  background("yellow");
}
if (keyIsDown(LEFT_ARROW)){
  background("Red");
}
if (keyIsDown(UP_ARROW)){
  background("Green");
}
if (keyIsDown (DOWN_ARROW)){
  background("Purple");
}
}




