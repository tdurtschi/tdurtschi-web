function Grass(canvas, x, y, traits) {
    this.id = getId();
    this.type = "GRASS";
    this.canvas = canvas;
    this.animationSpeed = 60;                //1-full speed, 2-30fps, 3-20fps, etc...
    this.animationCursor = 0;
    this.traits = Object.assign(
        {
            initialSize: 1.0,
            sizeFactor: 1.0,
            speed: 3,
            maxHeight: 250
        }, traits);
    this.sizeY = 60;
    this.sizeX = (1 + (this.sizeY * 0.05));
    this.position = { x: x || 100,
                      y: y || 100 };   //absolute position in window.
    this.shouldUpdate = function () {
        return this.animationCursor == 0;
    }

    this.render = function () {
        this.animationCursor = (this.animationCursor + 1) % this.animationSpeed;
        this.next();

        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
        }
        else { throw ("Canvas not supported!"); }

        ctx.strokeStyle = 'green';
        ctx.strokeWidth = 2;
        ctx.fillStyle = '#33FF33';

        var points = [[this.position.x, this.position.y],
                      [this.position.x + 0.5 * this.sizeX, this.position.y - this.sizeY],
                      [this.position.x + this.sizeX, this.position.y]];

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for(var i = 1; i < points.length; i++){
            ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.fill();

        points[0][0] = points[0][0] - 1;
        points[1][1] = points[1][1] + 1;
        points[2][0] = points[2][0] + 1;

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (var i = 1; i < points.length; i++) {
            ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.stroke();
    }

    this.next = function () {
        if (this.shouldUpdate() && getProb(1,3)) {
            this.sizeY = this.sizeY + 1 >= this.traits.maxHeight
                ? this.sizeY
                : this.sizeY + 1;
            //this.pause(1, 70) || this.go(99, 100) || this.turn(1, 4);
        }
    }


}

function addGrass() {
    if (!env) { throw "Environment not found." }
    var sizeFactor = Math.floor(Math.random() * 4 + 6) / 10;
    var grass = new Grass(
        env.canvas,
        Math.random() * (env.rightBound - 100),
        env.bottomBound,
        { sizeFactor: sizeFactor });
    env.objects[grass.id] = grass;
}