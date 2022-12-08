var bg,bgimg, ryo, ryoImage; 

gameState =  1;
end = 0


function preload (){
bgimg = loadImage("assets/bg.jpg")
ryoImage = loadAnimation("assets/RYO1.png", "assets/sara2.png")
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(200,0);
 bg.addImage("bg",bgimg);
bg.velocityX = 5;
bg.scale = 3

ryo = createSprite(50,690)
ryo.addAnimation("ryo",ryoImage);
ryo.scale =  0.5


    
}
function draw(){
background(0)
// image(bgimg,0,0,2000,900)

if (gameState === 1){

    if(bg.x > 900 ){
        bg.x = 700
    }

  



}


drawSprites();

}