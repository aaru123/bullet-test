var wall,bullet
var speed, weight
function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(750, 200, 20, height/2);
    speed = random(55,90)
    bullet.velocityX = speed
  weight = random(400,1500)
  
  }

function draw() {
  background(0); 
    if(wall.x - bullet.x < (bullet.width/2+wall.width/2)){
    bullet.velocityX = 0
    var de =0.5 * weight * speed * speed/22509
    if (de > 180){
      wall.shapeColor = "red"
    }
    if (de < 180 && de > 100){
      wall.shapeColor = "yellow"
    }
    if (de < 100){
      wall.shapeColor = "green"
    }
  }
  drawSprites();
}