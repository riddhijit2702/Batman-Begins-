const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=[];
var batmanOriginals,BatmanImg;
function preload(){
  lightning1=loadImage("1.png")
  lightning2=loadImage("2.png")
  lightning3=loadImage("3.png")
  lightning4=loadImage("4.png") 
  //batmanOriginals=loadSound("1966 Batman - Theme Song..mp3")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,600);
  umbrella = new Umbrella(400,470)
  if(frameCount%100==0){
    for(var i=0;i<100;i++){
      maxDrops.push(new Drop(random(0,400),(random(0,400))))
  }
  }
}

function draw() {
 //   batmanOriginals.loop()
  background(0); 
  Engine.update(engine);
  rand = Math.round(random(1,4));
  if(frameCount%80===0){
      thunder = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
          case 1: thunder.addImage(lightning1);
          break;
          case 2: thunder.addImage(lightning2);
          break; 
          case 3: thunder.addImage(lightning3);
          break;
          case 4: thunder.addImage(lightning4);
          break;
          default: break;
      }
      thunder.scale = 0.3;
  }

  if(frameCount%90===0){
      thunder.destroy();
  }

umbrella.display()

for(var i = 0; i<100; i++){
  maxDrops[i].showDrop();
  maxDrops[i].updateY()
  
}
  drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)
}

