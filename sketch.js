var ground;
var dustbinImage;
var paper,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
		
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
		
	side1 = new Dustbin(850,583,150,10);
	side2 = new Dustbin(770,550,10,250);
	side3 = new Dustbin(930,550,10,250);
	paper = new Paper(250,500,30);
	ground = new Ground(600,height,1400,20)


	Engine.run(engine);
   
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  paper.display();
    
  image(dustbinImage,758,423,190,180); 
  

  drawSprites();
 
}
 function keyPressed() {
	 if(keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:40});
	 }
 }


