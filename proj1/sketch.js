//sound files
let frogSound;
let birdSound;
let cricketSound;

//image files
let frogImg;

function preload() {
  //sound
    frogSound = createAudio("frog.mp3");
    birdSound = createAudio("bird.mp3");
    cricketSound = createAudio("cricket.mp3");

  //image
    frogImg = loadImage ("frog.jpg");
}


function setup() {
  createCanvas(800, 600);
  background(220);
  text ('press F on your keyboard for frog sound', 50, 40);
  text ('press B on your keyboard for bird sound', 50, 60);
  text ('press C on your keyboard for cricket sound', 50, 80);

}

function draw() {

  if (keyIsPressed ) {
    if (key === 'f') {
      image (frogImg, 100, 200);
    }
  }

  
}

function keyPressed () {
  
  if (key === 'f') {
    //play frog sound
   frogSound.play();
  }

  if (key === 'b') {
    
    //play bird sound
    birdSound.play();

  }

  //play cricket sound
  if (key === 'c') {

    //play cricket sound
    cricketSound.play();
  }
}