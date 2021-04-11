var fade;
var fadeAmount = 1
var play,playImg;

function preload(){
    bgImage = loadAnimation("menu/bggifs/frame_0_delay-0.2s.png","menu/bggifs/frame_1_delay-0.2s.png","menu/bggifs/frame_2_delay-0.2s.png","menu/bggifs/frame_3_delay-0.2s.png","menu/bggifs/frame_4_delay-0.2s.png","menu/bggifs/frame_5_delay-0.2s.png","menu/bggifs/frame_6_delay-0.2s.png","menu/bggifs/frame_7_delay-0.2s.png")

       bgImage2 = loadImage("menu/bggifs/frame_0_delay-0.2s.png")  
    bgImage3 = loadImage("menu/bggifs/frame_1_delay-0.2s.png")
    monstrAnim = loadAnimation("menu/1.png","menu/2.png","menu/3.png","menu/4.png")
    deadimg = loadImage("deadthMessage.png")
    fadeimg=  loadImage("menu/FADE.png")
    playImg = loadImage("restart.png");
    fade = 0
}

function setup(){
    createCanvas(windowWidth,windowHeight);

  
    bg  =  createSprite(width/2,height/2,width,height);
    bg.scale = 3.5
    bg.addAnimation("GG",bgImage );
 
 dead  =  createSprite(width/2,height/3);
 dead.addImage(deadimg)
 dead.scale = 0.5

 play = createSprite(width/2,height/1.3,20,20)
 play.addImage(playImg)
 play.scale = 0.1;
}


function draw(){

    background(bgImage2);



  if(mousePressedOver(play)){
    tint(255, 126);
    play.visible = false;
   play.destroy()
fade.visible = true;

window.location.href = "index.html";
 
}




 
drawSprites();



}

