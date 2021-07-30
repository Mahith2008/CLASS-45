var balloon,balloonImg;
var ball,ballImg;
var obstacle,obstacleImg;
var backGroundImg,bg;

function preload(){

    balloonImg = loadImage("Images/Balloon.png");
    ballImg = loadImage("Images/Ball.png");
    obstacleImg = loadImage("Images/Block.png");
    backGroundImg = loadImage("Images/Skybg.jpg");
    
}

function setup(){

    createCanvas(displayWidth,displayHeight);

     bg = createSprite(displayWidth/2,displayHeight/2,50,50);
    bg.addImage(backGroundImg);

    balloon = createSprite(displayWidth/2,displayHeight-220,20,20);
    balloon.addImage(balloonImg);
    balloon.scale = 1;

    ball = createSprite(displayWidth/2,displayHeight/3,10,10);
    ball.addImage(ballImg);
    ball.scale = 0.3;

}

function draw(){

    background(0);


    bg.velocityY = 3;
  //  bg.scale = 4

    if(bg.y>displayHeight/2){

        bg.y = 300;
        

    }
    

    ball.x = mouseX;
    ball.y = mouseY;

    spawnBlocks();


    drawSprites();
}

function spawnBlocks(){

    if(frameCount%30 === 0){

        obstacle = createSprite(0,0,10,10);
        obstacle.x = Math.round(random(displayWidth-900,displayWidth-500));
        obstacle.y = Math.round(random(10,40));
        obstacle.addImage(obstacleImg);
        obstacle.velocityY = 8;
        obstacle.scale = 0.1;
        
    }
}

