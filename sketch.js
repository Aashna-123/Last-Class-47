const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var RedPc, board, redSpace, redMoved, die;
var bluePc, blueSpace, blueMoved;

function preload() {
  board = loadImage("images/background.png");
}

function dice(x,y,side){
  fill ("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(x,y,100,100,20);
  fill("black");
  strokeWeight(3);
  
  if(side === 1){
    circle(x,y,20);
  }
  else if(side === 2){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
  }
  else if(side === 3){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x,y,20);
  }
  else if(side === 4){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20);
  }
  else if(side === 5){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20); 
    circle(x,y,20);
  }
  else if(side === 6){
    circle(x-25, y-25, 20);
    circle(x+25, y+25, 20);
    circle(x-25, y+25, 20);
    circle(x+25, y-25, 20); 
    circle(x-25, y,20);
    circle(x+25, y,20);
  }
  }

  function checkForUpsAndDowns(){
    if(blueSpace === 2){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-13});
      blueSpace = 23;
    }

    if(blueSpace === 6){
      Matter.Body.setVelocity(bluePc.body, {x:-6, y:-26});
      blueSpace = 45;
    }

    if(blueSpace === 20){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-26});
      blueSpace = 59;
    }

    if(blueSpace === 28){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-13});
      blueSpace = 49;
    }
    
    if(blueSpace === 52){
      Matter.Body.setVelocity(bluePc.body, {x:0, y:-13});
      blueSpace = 72;
    }

    if(blueSpace === 57){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:-26});
      blueSpace = 96;
    }

    if(blueSpace === 71){
      Matter.Body.setVelocity(bluePc.body, {x:-7, y:-13});
      blueSpace = 92;
    }

    if(blueSpace === 43){
      Matter.Body.setVelocity(bluePc.body, {x:7, y:20});
      blueSpace = 17;
    }

    if(blueSpace === 50){
      Matter.Body.setVelocity(bluePc.body, {x:-32, y:26});
      blueSpace = 5;
    }

    if(blueSpace === 56){
      Matter.Body.setVelocity(bluePc.body, {x:20, y:33});
      blueSpace = 8;
    }

    if(blueSpace === 73){
      Matter.Body.setVelocity(bluePc.body, {x:-13, y:38});
      blueSpace = 15;
    }

    if(blueSpace === 87){
      Matter.Body.setVelocity(bluePc.body, {x:12, y:26});
      blueSpace = 49;
    }

    if(blueSpace === 84){
      Matter.Body.setVelocity(bluePc.body, {x:-7, y:20});
      blueSpace = 58;
    }

    if(blueSpace === 98){
      Matter.Body.setVelocity(bluePc.body, {x:-14, y:39});
      blueSpace = 40;
    }
  }
  
function setup() {
  createCanvas(600, 725);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0

bluePc = new BluePiece(20,570,40,40);

die = [false,1,0,false,0];
blueSpace = 1
blueMoved = false
redSpace = 1
redMoved = true 

}
function draw() {
  background("pink");
Engine.update(engine);
image(board, 0, 0, 600, 600);

stroke("White");
strokeWeight(5);
fill(random(0,255),random(0,255),random(0,255));
textSize(25);
text("PRESS SPACE TO ROLL THE DICE", 25,650);



bluePc.display();
stroke("black");
strokeWeight(8);
line(0,602,600,602);

if(die[3] === false){
  dice(525,665,die[1]);
}
else {
  if(die[4] % 2 === 0){
    dice(525,665,die[1]);
  
  if(blueMoved === false && blueSpace !== 100){
    if(blueSpace % 10 === 0){
      bluePc.moveUp();
    }
    else {
      var num = Math.floor(blueSpace/10)
    if(num === 0 || num === 2 || num === 4 || num === 6 || num === 8){
      bluePc.moveRight();
    }
    else{
      bluePc.moveLeft();
    }
    }
    blueMoved = true;
    blueSpace ++ 
    console.log(blueSpace);

  }
}

if(frameCount % 15 === 0){
  die[4]--
  blueMoved = false

  if(die[4] === 0){
die[3] = false
die[0] = false
checkForUpsAndDowns();
  }
}
}

if(die[0] === true && die[2]>0 && frameCount % 5 === 0){    
die[2]--
die[1]++
if(die[1]>6){
die[1] = 1
}
if(die[2] === 0){
  die[3] = true
  die[4] = die[1]*2
}
}
/*if(blueSpace === 99){
  if(dice(525,665,random(1,6))){
    if(dice(525,665,1)){
    bluePc.velocityX = -3;
  }

  
  else{
    bluePc.velocityX = 0;
  }
}
}*/

}

function keyPressed(){
if(keyCode === 32 && die[0] === false){
die[0] = true
die[2] = round(random(12,18))
}
}
