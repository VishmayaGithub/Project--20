var car,wall
var speed,weight

function setup() {

  createCanvas(1500,400);

 car =  createSprite(50, 200, 50, 50);
 
 car.shapeColor = "80,80,80"
 wall = createSprite(1200,200,30,300)
 
 speed = random(55,90)
 weight = random(400,1500)
}

function draw() {
  background("black"); 
  car.velocityX = speed;
  if(wall.x-car.x < car.width/2 + wall.width/2){
   car.velocityX = 0
   var deformation = 0.5* width * speed * speed /22500
   if(deformation < 100){
     car.shapeColor = color(255,0,0)
   }
   if(deformation > 100 && deformation < 180){
     car.shapeColor = color (230,230,0)
    }
  if(deformation > 180){
    car.shapeColor =color(250,0,0)
  }
  }
  drawSprites();
}