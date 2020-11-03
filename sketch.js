
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var ball1;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,640,800,15);

ball1 = new Ball(200,630);
box1 = new Box(650,625,150,20);
box2 = new Box(580,585,20,100)
box3 = new Box(720,585,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 ball1.display();
  box1.display();
  box2.display();
  box3.display();
  ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
   KeyPressed();
  drawSprites();
 
}
function KeyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:650,y:625});
  }
}



