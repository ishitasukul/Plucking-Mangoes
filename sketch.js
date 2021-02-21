
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,stone,slingShot,slingshot2,bkgImage, distance, lmango,lstone;





function preload(){
	boy=loadImage("images/boy.png");
	bkgImage=loadImage("mangoforest.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  stone= new Stone (240,415,30);

  mango7=new mango(1030,35,30);
	mango11=new mango(1090,35,30);
	mango1=new mango(1150,100,30);
	mango8=new mango(1090,100,30);
	mango9=new mango(1030,100,30);
	mango10=new mango(970,100,30);
	mango2=new mango(1200,200,30);
	mango3=new mango(910,200,30);
	mango4=new mango(980,200,30);
	mango5=new mango(1060,200,30);
	mango6=new mango(1140,200,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	

	//slingShot = new Slingshot (stone.body,{x:240, y:405});
	slingShot2 = new Slingshot (stone.body,{x:240, y:405});
	Engine.run(engine);
	

}

function draw() {

  background(bkgImage);
  //Add code for displaying text here!
  textSize(25);
  fill("white");
  stroke("black");
  text("Press Space to get multiple chances to play!", 400, 100);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();
  //slingShot.display();    
  slingShot2.display();    

  
  detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
  detectCollison(stone,mango6);
  detectCollison(stone,mango7);
  detectCollison(stone,mango8);
  detectCollison(stone,mango9);
  detectCollison(stone,mango10);
  detectCollison(stone,mango11);


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    //slingShot.fly();
	  slingShot2.fly();
}
function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone.body, {x:240, y:415})
		//slingShot2 = new Slingshot (stone.body,{x:240, y:405});
		//slingShot.attach(stone.body);
		slingShot2.attach(stone.body);

		// mouseDragged();
	

	}
}

function detectCollison(lstone,lmango){
	mangoBodyPosition= lmango.body.position;
	stoneBodyPosition= lstone.body.position;

   var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   console.log("dist"+distance);
   console.log("mangoR" + lmango.r);
   console.log("stoneR" + lstone.r);
   console.log("mango" + lmango.r + lstone.r)
	 if (distance<=lmango.r + lstone.r){
     console.log("mango should fall")
		 Matter.Body.setStatic(lmango.body, false);
	 }
		
}

