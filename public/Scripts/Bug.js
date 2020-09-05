
function Bug(canvas, initX, initY, traits) {
    this.id = getId();
    this.type = "BUG";
    this.canvas = canvas;
    this.animationSpeed = 15; //1-full speed, 2-30fps, 3-20fps, etc...
    this.animationCursor = 0;
    this.traits = Object.assign(
        {
            initialSize: 1.0,
            sizeFactor: 1.0,
            speed: 3
        }, traits);
    this.position = { x: initX || 100, y: initY || 100 }; //absolute position in window.
    this.sizeX = Math.floor(48 * this.traits.sizeFactor);
    this.sizeY = Math.floor(28 * this.traits.sizeFactor);
    this.queue = [];
    this.direction = getProb(1, 2) ? 0 : Math.PI;
    this.imgcursor = 0;
    this.isClimbing = false;
    this.counters = { pause: 0 };
    this.init = function () {
        this.traits.initialSize = this.traits.sizeFactor;
    }

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

        ctx.save();
        var image = this.images[this.imgcursor];
        ctx.translate(this.position.x, this.position.y);
        if (this.direction == 0) { //RIGHT
            ctx.translate(this.sizeX, 0);
            ctx.scale(-1, 1);
        }
        else if (this.direction > 0 && this.direction < Math.PI) { //DOWN
            ctx.rotate(this.direction + Math.PI);
            //ctx.translate(-1 * this.sizeY, this.sizeY);
            ctx.translate(-1 * this.sizeY, this.sizeY);
            ctx.scale(1, -1);
        }
        //this.direction == Math.PI is the default case where no further transforms needed
        else if (this.direction > Math.PI) { //UP
            ctx.translate(this.sizeY, -1 * (this.sizeX - this.sizeY));
            ctx.rotate(this.direction + Math.PI);
        }

        ctx.drawImage(image, 0, 0, this.sizeX, this.sizeY);
        ctx.restore();
    }

    this.hasCollision = function () {
        var collisions = [];
        var collisionFlag = false;
        var objectsToCheck = env.objects;
        var me = this;
        objectsToCheck.forEach(function (obj) {
            var newX = me.position.x + (Math.cos(me.direction) * me.traits.speed);
            var newY = me.position.y + (Math.sin(me.direction) * me.traits.speed);

            if (obj.id != me.id) {
                if (obj.position.x < newX + me.sizeX &&
                    obj.position.x + obj.sizeX > newX &&
                    obj.position.y < newY + me.sizeY &&
                    obj.sizeY + obj.position.y > newY) {
                    //Objects overlap, so check direction. Only collide in front of bug.
                    if (Math.cos(me.direction) * (obj.position.x - me.position.x) > 0) {
                        collisions.push(obj);
                    }
                }
            }
        })

        return collisions.length > 0 ? collisions : undefined;
    }

    this.next = function () {
        if (this.shouldUpdate()) {
            this.pause(1, 70) || this.go(99, 100) || this.turn(1, 4);
        }
    }

    this.move = function (xOffset, yOffset) {
        this.position.x += xOffset;
        this.position.y += yOffset;
    }

    this.go = function (i, d) {
        if (getProb(d - i, d)) return false;

        var collisions;
        var newX = this.position.x + (Math.cos(this.direction) * this.traits.speed);
        var newY = this.position.y + (Math.sin(this.direction) * this.traits.speed);

        if (newX + this.sizeX > canvas.width ||
            newY + this.sizeX > canvas.height ||
            newX < 0 || newY < 0) {
            //Collided with screen boundary.
            return false;
        }
        else if (this.isClimbing && newY - (this.sizeX - this.sizeY) < this.isClimbing.position.y - this.isClimbing.sizeY) {
            //Top of grass
            return false;
        }
        else if (this.isClimbing && this.direction < Math.PI && newY > env.bottomBound - this.sizeY + 4) {
            return this.stopClimbing(1, 2);
        }
        else if (collisions = this.hasCollision()) {
            var grasses = collisions.filter(function (f) { return f.type && f.type == "GRASS" });
            if (grasses.length > 0) {
                //Grass collision
                var bugs = !collisions.filter(function (f) { return f.type && f.type == "BUG" });
                if (this.isClimbing && !bugs) {
                    this.imgcursor = (this.imgcursor + 1) % 2;
                    this.position.x = newX;
                    this.position.y = newY;
                    return true;
                }
                else if (!this.isClimbing) {
                    if (this.climb(grasses[0], 1, 4)) {
                        return true;
                    }
                    else if (!this.turn(1, 2)) {
                        this.imgcursor = (this.imgcursor + 1) % 2;
                        this.position.x = newX;
                        this.position.y = newY;
                        return true;
                    }
                }
            }
            //Collided with something unhandled (fail);
            return false;
        }
        else {
            this.imgcursor = (this.imgcursor + 1) % 2;
            this.position.x = newX;
            this.position.y = newY;
            return true;
        }
    }

    this.climb = function (grass, i, d) {
        if (getProb(i || 1, d || 1)) {
            this.position.x = grass.position.x + (grass.sizeX / 2.0) - 2;

            this.direction = 3 * Math.PI / 2.0;
            this.isClimbing = grass;
            return true;
        }
        return false;
    }

    this.stopClimbing = function (i, d) {
        if (getProb(i || 1, d || 1)) {
            this.position.x = this.isClimbing.position.x + (this.isClimbing.sizeX / 2.0) - 2;
            this.position.y = env.bottomBound - 22 + (28 * (1 - this.traits.sizeFactor));
            this.direction = 0;
            this.isClimbing = false;
            return true;
        }
        return false;
    }

    this.pause = function (i, d) {
        //Case to start timer:
        if (this.counters.pause == 0 && getProb(i || 1, d || 1)) {
            var pauseLength = Math.random() * 5;
            this.counters.pause = Math.floor(pauseLength * pauseLength);
            return true;
        }
        //Case to handle timer countdown:
        else if (this.counters.pause > 0) {
            if (this.counters.pause == 9 && getProb(4, 5)) {
                this.turn();
                this.counters.turnBack = getProb(1, 2);
            }
            if (this.counters.turnBack && this.counters.pause == 6) {
                this.turn();
            }
            this.counters.pause--;
            return true;
        }
        else return false;
    };

    this.turn = function (i, d) {
        if (getProb(i || 1, d || 1)) {
            this.direction += Math.PI;
            if (this.direction >= Math.PI * 2) {
                this.direction -= Math.PI * 2;
            }
        }
    }

    this.eat = function () {

    }

    this.grow = function () {
        if (this.traits.sizeFactor <= 1.0) {
            this.traits.sizeFactor += 0.1;
            this.sizeX = Math.floor(48 * this.traits.sizeFactor);
            this.sizeY = Math.floor(28 * this.traits.sizeFactor);
            return true;
        }
        return false;
    }

    this.init();
}

Bug.prototype.images = [
    new Image(),
    new Image(),
    new Image(),
    new Image()
];
Bug.prototype.images[0].src = "/images/weevil1.png";
Bug.prototype.images[1].src = "/images/weevil2.png";
Bug.prototype.images[2].src = "/images/weevil3.png";
Bug.prototype.images[3].src = "/images/weevil4.png";

function addBug() {
    if (!env) { throw "Environment not found." }
    var sizeFactor = Math.floor(Math.random() * 4 + 6) / 10;
    var bug = new Bug(
        env.canvas,
        Math.random() * (env.rightBound - 100),
        env.bottomBound - 22 + (28 * (1 - sizeFactor)),
        { sizeFactor: sizeFactor });
    env.objects[bug.id] = bug;
}
