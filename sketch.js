

let player;
let score = 0;
let asteroids = []

const asteroidsize = 10;

let addAsteroids = false;

function setup() {

  let cnv = createCanvas(600, 600);
  cnv.parent('canvasContainer');
  frameRate(60);



  player = new Player(15);


  for (let i = 0; i < 100; i++) {
    asteroids.push(new Asteroid(asteroidsize))
  }
  updateScore();
}

function draw() {
  background(0);
  
  // Get Keyboad Input
  if (keyIsPressed === true) {
    const dist = 5;
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
  document.getElementById('score').innerText = 'Score: ' +  score;
  document.getElementById('asteroidcnt').innerText = 'Asteroidcount: ' +  asteroids.length;
}

// Called when gameover
function gameOver() {
  noLoop();
  background(255,0,0,150);

}