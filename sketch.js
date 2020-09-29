var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400,200,50,80);
  fixedrect.shapeColor = "green";
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";

movingrect.velocityY=-5;
fixedrect.velocityY=5;
}

function draw() {
  background(0);  
  //movingrect.y=World.mouseY;
  //movingrect.x=World.mouseX;

  /*if(movingrect.x-fixedrect.x<=(fixedrect.width+movingrect.width)/2
  && fixedrect.x-movingrect.x<=(fixedrect.width+movingrect.width)/2
  && movingrect.y-fixedrect.y<=(fixedrect.height+movingrect.height)/2
  && fixedrect.y-movingrect.y<=(fixedrect.height+movingrect.height)/2){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
   }*/



   if(movingrect.x-fixedrect.x<=(fixedrect.width+movingrect.width)/2
   && fixedrect.x-movingrect.x<=(fixedrect.width+movingrect.width)/2){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
   }
   
   if(movingrect.y-fixedrect.y<=(fixedrect.height+movingrect.height)/2
  && fixedrect.y-movingrect.y<=(fixedrect.height+movingrect.height)/2){
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);
  }
  drawSprites();
}

/*

 if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
*/