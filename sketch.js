var fixed;
var moving;


function setup() {
  createCanvas(1200,800);
  fixed = createSprite(200, 200, 50, 80);
  moving = createSprite(400,200,80,30);

}

function draw() {
  background(198);
  moving.x = mouseX;
  moving.y = mouseY;
//  fixed.width/2 + moving.width/2 = moving.x - fixed.x;
if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
  moving.y -  fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2) {
   moving.shapeColor = ("yellow");
   fixed.shapeColor = ("green");
} else {
  fixed.shapeColor = ("red");
  moving.shapeColor = ("blue");
}


drawSprites();

}