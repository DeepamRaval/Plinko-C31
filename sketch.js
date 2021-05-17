const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
	world = engine.world;

  for (var k = 0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight ))
  }
 
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }

  
  

  ground = new Ground(600, height, 1200, 20);
   
  
}

function draw() {
  Engine.update(engine);
  background(255); 

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));

  }

  for (var l = 0; l<particles.length; l++){
    particles[l].display();
  }

  for (var l = 0; l<plinkos.length; l++){
    plinkos[l].display();
  }

  for (var m = 0; m<divisions.length; m++){
     divisions[m].display();
  }
  
  ground.show();
  //particles.show();
  //display_array();
  //particles.show();
  //divisions.show();
  //canvas.display();
  drawSprites();

  
}
