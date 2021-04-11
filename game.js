var fade;
var fadeAmount = 1
var sound;
var dead,deadimg
var fade2,fadeimg;
var bg,bgImage;
var player,playerImage;
var bgImage2,bgImage3;
var monstr1,monstr2,monstr1Image,monstr2Image;
var speedKills= -20;
var monsterGrp 
function preload(){
    bgImage = loadAnimation("menu/bggifs/frame_0_delay-0.2s.png","menu/bggifs/frame_1_delay-0.2s.png","menu/bggifs/frame_2_delay-0.2s.png","menu/bggifs/frame_3_delay-0.2s.png","menu/bggifs/frame_4_delay-0.2s.png","menu/bggifs/frame_5_delay-0.2s.png","menu/bggifs/frame_6_delay-0.2s.png","menu/bggifs/frame_7_delay-0.2s.png")
    bgImage2 = loadImage("menu/bggifs/frame_0_delay-0.2s.png")  
    bgImage3 = loadImage("menu/bggifs/frame_1_delay-0.2s.png")
    idlAnim= loadAnimation("menu/frame_0_delay-0.13s.png","menu/frame_1_delay-0.13s.png","menu/frame_2_delay-0.13s.png","menu/frame_3_delay-0.13s.png")
    monstrAnim = loadAnimation("menu/1.png","menu/2.png","menu/3.png","menu/4.png")
    deadimg = loadImage("dead.png")
    fadeimg=  loadImage("menu/FADE.png")
    sound = loadSound("Electro_Music_Nomero_2.mp3")
    fade = 0
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    sound.loop()
    sound.setVolume(0.1);
  
    bg  =  createSprite(width/2,height/2,width,height);
    bg.scale = 3.5
    bg.addAnimation("GG",bgImage );
 player = createSprite(510,680-1,20,20)
 player.addAnimation("idle",idlAnim)

 monsterGrp = new Group();

 invisibleGround = createSprite(500,780,222222,22);
 invisibleGround.visible  = false;

 dead  =  createSprite(width/2,height/2);
 dead.addImage(deadimg)
 dead.scale = 0.5
 fade2 = createSprite(width/2,height/2,width,height)
 fade2.visible = false;
 fade2.addImage(fadeimg)
}


function draw(){

    background(bgImage2);
    
    monsterGrp.setLifetimeEach(-1);

drawSprites();
if(monsterGrp.isTouching(player)){
 player.destroy();
 monsterGrp.destroyEach();
 tint(255, 126);

 player.velocityY = -12;

setTimeout(() => {
    died() 
}, 2); 

}
spwanwhowilldie();
player.velocityY = player.velocityY + 0.8
player.collide(invisibleGround);
if(keyDown("space")&& player.y >= 400) {
    player.velocityY = -12;
  
}

}
function died() {

  window.location.href = "death.html";
}


function spwanwhowilldie(){

    if(frameCount%30===0){
  
     
  
            speedKills = speedKills-5
            console.log(speedKills)
           
            monstr1 = createSprite(random(width/2,width),random(height/2,height))
            monstr1.addAnimation("normal",monstrAnim)
          
            monstr1.scale = .5
            monstr1.velocityX = speedKills;
            monsterGrp.add(monstr1)
    }
}
