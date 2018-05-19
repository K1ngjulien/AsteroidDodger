

class Player {
    constructor (radius) {
        this.radius = radius;
        this.pos = createVector( width/2, floor(height * 0.95));
    }

    draw() {
        fill(255);
        ellipse( this.pos.x, this.pos.y, this.radius);
    }

    move(dx) {
        if((this.pos.x + dx > this.radius/2) && (this.pos.x + dx < width - this.radius/2)) {
            this.pos.x += dx;
        }
        
    }
}