var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(45,200,100,20);
  bullet.velocityX=speed;
  wall=createSprite(750,200,thickness,height/2);
}

function draw() {
  background("black");
  if(hascollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10){
      wall.shapeColor="red";
    }
  }
  bullet.collide(wall);
  drawSprites();
}
function hascollided(object1,object2){
  if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
  }
}