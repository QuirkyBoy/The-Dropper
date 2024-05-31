let sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, sprite10, ball
function setup() {
  new Canvas();
  world.gravity.y = 11
  sprite1 = new Sprite(150, 100, 70, "static");
  sprite2 = new Sprite(350, 100, 70, "static");
  sprite3 = new Sprite(550, 100, 70, "static");
  sprite4 = new Sprite(50, 250, 70, "static");
  sprite5 = new Sprite(250, 250, 70, "static");
  sprite6 = new Sprite(450, 250, 70, "static");
  sprite7 = new Sprite(650, 250, 70, "static");
  sprite8 = new Sprite(150, 400, 70, "static");
  sprite9 = new Sprite(350, 400, 70, "static");
  sprite10 = new Sprite(550, 400, 70, "static");
  sprite11 = new Sprite(50, 550, 70, "static");
  sprite12 = new Sprite(250, 550, 70, "static");
  sprite13 = new Sprite(450, 550, 70, "static");
  sprite14 = new Sprite(650, 550, 70, "static");
  wallLeft = new Sprite(0, 400, 10, 1000, "static")
  

}//end setup function


function draw() {
  background(255);
  
   
}//end draw function

function mouseClicked() {
  ball = new Sprite(mouse.x, 0, 20);
}