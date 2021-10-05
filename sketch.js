const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() 
{
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  //Create stone object using stone class
	

  //create mango objects using mango class
	
  //create tree object using tree class
	
  //create ground object using ground class
	

	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  
	Engine.run(engine); 
}

function draw() 
{
  background(230);
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  //Add boy image
  
 
  //write code to display all objects tree,stone,mangoes,stone, ground,launcher
  


  //Code to detect the collision between stone & mangoes
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

//Declare function mouseDragged 



//Declare function mouseReleased



//Declare function keypressed



function detectollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
  	  Matter.Body.setStatic(lmango.body,false);
  }
}