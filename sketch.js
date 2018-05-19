

let player;
let score = 0;
let asteroids = []
const dist = 5;

const asteroidsize = 10;

let addAsteroids = false;

function setup() {

  let cnv = createCanvas(600, 600);
  cnv.parent('canvasContainer');
  frameRate(60);



  player = new Player(15);


  restartGame();
}

function draw() {
  background(0);
  
  // Get Keyboad Input
  if (keyIsPressed === true) {

    switch(keyCode) {
      case LEFT_ARROW:
      case 97:        // A key
        player.move(dist * -1);
        break;
      case RIGHT_ARROW:
      case 100:     // D key
        player.move(dist);
        break;
    }
  }

  if(touches.length > 0) {
    console.log(touches)
    if(touches[0].x > width/2) {  //Touched on the Right side of the canvas
      console.log('right')
      player.move(dist);
    }
    else {  // Touched on the left side
      player.move(dist * -1);
      console.log('left')
    }
  }
  // Update Asteroids
  asteroids.forEach( a => {

    if(a.checkColl(player.pos, player.radius)) {
      gameOver();
    }

    a.update();
    a.draw();
    if (a.outOfBounds()) {
      a.setRandomPos();
      score++;
      updateScore();
    }
  })

  if((score % 25 === 0) && score > 0) {
    asteroids.push(new Asteroid( updateScore()));
  }

  player.draw();
}

function updateScore() {
  document.getElementById('score').innerText =  score;
  document.getElementById('asteroidcnt').innerText = asteroids.length;
}

// Called when gameover
function gameOver() {
  noLoop();
  background(255,0,0,150);

}

function restartGame() {
  player.reset();

  score = 0;
  asteroids = []
  for (let i = 0; i < 100; i++) {
    asteroids.push(new Asteroid(asteroidsize))
  }
  updateScore();
  loop();
}

function keyPressed() {
  if(keyCode === 13) { //EnterKey
    restartGame();
  }
}