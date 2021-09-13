var ground, block, trampoline, flo_block;
var b_grp, t_grp, f_grp

function preload(){
  ball = loadImage("ball.png")
}

function setup() {
  dw = displayWidth-10;
  dh = displayHeight-150;  
  createCanvas(dw, dh);
  ground = createSprite(dw/2-50, dh-130, dw, 20);  
  // wall = createSprite(-386, 30, 670, 650)
  player = createSprite(0,0,10,10);
  player.visible = false;
  // player.debug = true;
  // player.scale = 0.1;
  // player.addImage(ball);
  // player.debug = true;
  // player.velocityY = 9.8;
  // player.draw = function(){ellipse(50,dh/2,25,25)};
  block = createSprite(dw/2, dh-150, 40, 10);
  trampoline = createSprite(dw/2+30, dh-150, 40, 10);
  trampoline.shapeColor = "red";
  mov_block = createSprite(dw/2+60, dh-150, 40, 10);
  mov_block.velocityX = 3;
  inv_ground = createSprite(dw/2,dh-300,dw,20);
  inv_ground.visible = false;

  b_grp = new Group();
  t_grp = new Group();
  f_grp = new Group();
}

function draw() {
  // player.velocityX = 0;
  background("black");
  // block.collide(player);
  player.collide(mov_block)
  ellipse(player.x+5, player.y-5, 20, 20);
  player.velocityY += 0.8;  
  console.log(player.y)
  // player.velocityY += 1.8
  // player.restitution = 1
  camera.x = player.x;
  camera.y = player.y;

  if(player.isTouching(trampoline)){
    player.velocityY = -19.9
  }

  console.log(player.x, player.y);

  if(keyDown("d")){
    player.x+=10;
  }
  if(keyDown("a")){
    player.x-=10;
  }
  if(keyDown("w")){
    // player.velocityY = -10
    player.y-=10;
  }
  if(keyDown("s")){
    player.y+=10;
  }

  if(player.collide(mov_block)){
    player.velocityX = 3;
    console.log("mov");
  }
  else if(player.isTouching(ground)){
    player.velocityX = 0;
    console.log("n_mov");
  }
  player.collide(ground);
  // player.collide(wall);
  // player.bounceOff(inv_ground);
  drawSprites();    
}
function Block(x,y){
  block = createSprite(dw/2, dh-150, 40, 10);
  b_grp.add(block);
}
function Trampoline(x,y){
  trampoline = createSprite(dw/2, dh-150, 40, 10);
  t_grp.add(trampoline);
}