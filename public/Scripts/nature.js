var Globals = {
    canvas: undefined,
    groundLevel: 35,
    frame: 0
};

var env = new Env();

setTimeout(function () {
    env = new Env();

    env.frame++;
    env.canvas = document.getElementById("canvas-nature");
    env.canvas.width = window.innerWidth;
    env.canvas.height = window.innerHeight * 0.7;

    env.rightBound = env.canvas.width;
    env.bottomBound = env.canvas.height - env.groundLevel;

    addBug();

    draw();
}, 500);

function draw() {
    if (!window.PAUSE) {
        var ctx = get2dCanvasContext(document, "canvas-nature");
        ctx.clearRect(0, 0, env.canvas.width, env.canvas.height);
        env.objects.forEach(function (entity) { entity.render(); });
    }

    window.requestAnimationFrame(draw);
}
