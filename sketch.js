var gameState = 0;
var ground;
var texts = [], text;
var textsNumber = [];
var form;
var player;
var out = "false";
var mario;
var name;
var hurdle1, hurdle2, hurdle3, hurdle4, hurdle5;

function preload() {
  mario = loadAnimation("mario/mario1.png", "mario/mario2.png", "mario/mario3.png");
  Hurdlespng = loadImage("Hurdle.png")

}



function setup() {
  ground = createSprite(5000, 240, 10000, 1);


  texts[0] = "13 + 4"

  texts[1] = "1 + 18"


  texts[2] = "3 + 14"

  texts[3] = "11 + 6"


  texts[4] = "13 + 25"


  textsNumber[0] = 13 + 4

  textsNumber[1] = 1 + 18


  textsNumber[2] = 3 + 14

  textsNumber[3] = 11 + 6


  textsNumber[4] = 13 + 25

  


  createCanvas(displayWidth, displayHeight - 100);
  form = new Form();
  player = new Player();
  fill(152,5,5)

  //createSprite(400, 200, 50, 50);
}

function draw() {

  background(100);



  player.player.collide(ground);
  player.player.velocityY = player.player.velocityY + 0.5
  if (gameState === 0) {


    textSize(23);
    text("Hurdles Math Game!!", 100, 100);
    textSize(13);
    text("Enter Your Name", 100, 200);

    form.display();

  }

  if (gameState === 1) {

    camera.position.x = player.player.x + 500;
    hurdle1 = new Hurdles(500);
    hurdle1.createHurdles();
    text(name, player.player.position.x, player.player.position.y - 50)
    //hurdle1.createHurdles();
    //hurdle2 = new Hurdles(500);
    //hurdle3 = new Hurdles(500);
    //hurdle4 = new Hurdles(500);
    //hurdle5 = new Hurdles(500);

    for (var a = 0; a < hurdle1.hurdles.length; a++) {
      if (player.player.isTouching(hurdle1.hurdles[a])) {

        out = "true"

      }
    }

  }
  drawSprites();
}

function keyPressed() {
  if (out === "false") {
    if (keyCode === RIGHT_ARROW) {
      player.distance = player.distance + 40;
      player.player.x = player.distance;

    }

    if (keyCode === UP_ARROW) {
      player.player.velocityY = -12

    }
  }


}