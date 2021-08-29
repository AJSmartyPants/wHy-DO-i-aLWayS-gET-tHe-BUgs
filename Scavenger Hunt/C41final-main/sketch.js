var canvas, backgroundImage;
var sprite1;
var colgroup;
var colheight;

function preload(){
bgimage = loadImage("images/mazebackgroundlevel1.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  /*backgroundImage = createSprite();
  backgroundImage.addImage("bg", bgimage);
  
  //sprite.x = mouseX;
  //sprite.y = mouseY;*/
  colheight = Math.round(random(0, displayHeight));
  colgroup = createGroup();
  sprite1 = createSprite(400, 400, 20, 20);
  
  

}


function draw(){
  background("purple");

  /*if(sprite1.isTouching(backgroundImage)){
    sprite1.shapeColor = "green";
  }*/
  if(keyIsDown(LEFT_ARROW)){
    sprite1.x -= 10
  }
  if(keyIsDown(UP_ARROW)){
    sprite1.y -= 10
  }
   //start the game
/*   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 */
Lev1ColSpawn();
Lev1RowSpawn();
drawSprites();
  }

function Lev1ColSpawn(){
  for(var xpos = 0; xpos<displayWidth; xpos += displayWidth/23){
    //var randy = Math.round(random(0, displayHeight/3))
    for(var ypos = 0; ypos<displayHeight; ypos+= 400){
      var column = createSprite(xpos, ypos, 3, 50);
    }
  }
}
function Lev1RowSpawn(){
  for(var ypos = 0; ypos<displayHeight; ypos += displayHeight/19){
    //var randx = Math.round(random(0, displayWidth))
    for(var xpos = 0; xpos<displayWidth; xpos+= 400){
      //var rowwidth = Math.round(random(0, displayWidth/3));
      var row = createSprite(xpos, ypos, 100, 3);
    }
  }
}