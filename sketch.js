var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound('music.mp3')
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(280,580,240,30);
    block2.shapeColor = "red";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "purple";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3
    ball.velocityY = 4
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }


    
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
        music.play();
        ball.velocityX = 0
        ball.velocityY = 0   
    }
 
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "purple";
        music.play();
    }
    drawSprites();
}
