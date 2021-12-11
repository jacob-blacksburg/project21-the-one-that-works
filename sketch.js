var ball; var ground; var ground2; var ground3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;
	
	
	ground = new Ground(width/2,670,width,20);
	ground2 = new Ground(1100,600,20,120);
	ground3 = new Ground(1350,600,20,120);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(260, 100, 20, ball_options);
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  ground2.display();
  ground3.display(); 
  rectMode(CENTER);
  fill ("purple")
	ellipseMode(CENTER);
	ellipse (ball.position.x, ball.position.y, 40, 40)
  
 
}

function keyPressed () {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position, { x:85, y:-85})
}
}

