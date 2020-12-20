
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof(width/2,height/4,width/7,20);
 
  bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
  bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  
  startBobPositionX = width/2;
  startBobPositionY = height/4+500;
  bob2=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

  startBobPositionX = width/2;
  startBobPoistionY = height/4+500;
  bob3 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

  startBobPositionX = width/2;
  startBobPoistionY = height/4+500;
  bob4 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

  startBobPositionX = width/2;
  startBobPoistionY = height/4+500;
  bob5 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);


  rope1 = new Rope(bob3.body,roof.body,20,10);
  rope2 = new Rope(bob1.body,roof.body,60,10);
  rope3 = new Rope(bob2.body,roof.body,100,10);
  rope4 = new Rope(bob4.body,roof.body,-60,10);
  rope5 = new Rope(bob5.body,roof.body,-20,10);
}


function draw() {
  rectMode(CENTER);
  background("YELLOW"); 
  Engine.update(engine);
  roof.display();
  rope1.display();
  bob3.display();
  rope2.display();
  bob1.display();
  rope3.display();
  bob2.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX, y:mouseY});
}
