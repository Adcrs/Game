

var menubg,menubgImage;

var plrImage;
var play,playImg;
var goto1,goto2;
var sound;
var logo,logoImage;
var fade,fadeimg;
var lmao,lmaoimg;

function preload(){
menubgImage = loadAnimation("menu/bggifs/frame_0_delay-0.2s.png","menu/bggifs/frame_1_delay-0.2s.png","menu/bggifs/frame_2_delay-0.2s.png","menu/bggifs/frame_3_delay-0.2s.png","menu/bggifs/frame_4_delay-0.2s.png","menu/bggifs/frame_5_delay-0.2s.png","menu/bggifs/frame_6_delay-0.2s.png","menu/bggifs/frame_7_delay-0.2s.png")
plrImage  = loadAnimation("menu/narutorun.gif")
logoImage = loadImage("menu/BG.png")
sound = loadSound("naruto_shippuden_op_opening_16_60fps_-902932410260115118 (1).mp3")
playImg = loadImage("menu/PlayBtt.png");
currTintAlpha = 126; 
fadeimg=  loadImage("menu/FADE.png")
lmaoimg=  loadImage("xd.png")
}



function setup(){
    
    sound.loop()
    sound.setVolume(0.1);
    createCanvas(windowWidth,windowHeight);

    menubg  =  createSprite(width/2,height/2,width,height);
    menubg.scale = 3.5
    menubg.addAnimation("bgGIF",menubgImage);
  
    goto1 =  createSprite(50,height-150,20,20);
    goto1.visible = false;
    goto2 = createSprite(width-100,height-150,20,20)
    goto2.visible = false;

    logo =  createSprite(width/2,height/4,width,height);
    logo.addImage(logoImage);
  
    play = createSprite(width/2,height/2-1,20,20)
  play.addImage(playImg)
  

  lmao= createSprite(width/2,height/1.3,20,20)
  lmao.addImage(lmaoimg)


  fade = createSprite(width/2,height/2,width,height)
  fade.visible = false;
  fade.addImage(fadeimg)
  play.scale = 0.1;
fill("black")
  text("Hey dont judge me with da music lmao",width/2,height/1.3)

}




function draw(){
background(	0, 88, 248)
if(mousePressedOver(play)){
    tint(255, 126);
    play.visible = false;
   play.destroy()
fade.visible = true;

window.location.href = "game.html";
 
}
push()

currTintAlpha = currTintAlpha-5;
tint(255,currTintAlpha);
image(fadeimg,width,height)
pop()


drawSprites();

}



