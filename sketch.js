const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1;
var base1,base2;
var box1,box2,box3,box4,box5,box6;
var ground1,slingshot1;

function preload()
{
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(800,750,1600,100);
	World.add(world,ground1);

	
	stone1=new Stone(210,500);
	World.add(world,stone1);

	slingshot1=new SlingShot(stone1.body,{x:210, y:500});
	World.add(world,slingshot1);

	base1=new Ground(900,400,200,20);
	World.add(world,base1);

	box1=new Box(850,350,100,50);
	World.add(world,box1);

	box2=new Box(950,350,100,50);
	World.add(world,box2);

	box3=new Box(865,380,100,50);
	World.add(world,box3);

	base2=new Ground(1400,550,200,20);
	World.add(world,base2);

	box4=new Box(1340,520,100,50);
	World.add(world,box4);

	box5=new Box(1440,520,100,50);
	World.add(world,box5);

	box6=new Box(1375,490,100,50);
	World.add(world,box5);





	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");

  ground1.display();

  stone1.display();

  slingshot1.display();

  base1.display();
  box1.display();
  box2.display();
  box3.display();

  base2.display();
  box4.display();
  box5.display();
  box6.display();

  drawSprites();
  
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(stone1.body);
	}
}
