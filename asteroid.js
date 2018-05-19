

class Asteroid {

    constructor( radius) {
        this.radius = radius * (random() + 0.5);
        this.setRandomPos();
        this.vel = createVector( 0, random() * 2  + 1);
    }

    setRandomPos() {
        this.pos = createVector( floor(random() * width), floor(random() * height) -height);
    }

    outOfBounds() {
        return this.pos.y > height;
    }

    update() {
        this.pos.add(this.vel);
    }

    checkColl(playerpos, playerrad) {
        return playerpos.dist(this.pos) < (playerrad/2 + this.radius /2)
    }

    draw() {
        stroke(255);
        strokeWeight(2);
        noFill();

        ellipse( this.pos.x, this.pos.y, this.radius);
    }
}