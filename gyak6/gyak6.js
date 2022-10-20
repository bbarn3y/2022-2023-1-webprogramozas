function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

const canvG = document.querySelector('canvas#game');
const ctxG = canvG.getContext('2d');

class Tile {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
    }

    draw() {
        this.context.fillStyle = "gray"
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
}

const map = [
    new Tile(ctxG,0, 50, 150, 10),
    new Tile(ctxG,150, 50, 10, 200),
    new Tile(ctxG,200, 0, 10, 260),
    new Tile(ctxG,200, 250, 310, 10),
    new Tile(ctxG,500, 0, 10, 250),
    new Tile(ctxG,600, 100, 10, 100),
    new Tile(ctxG,600, 250, 10, 210),
    new Tile(ctxG,600, 100, 300, 10),
    new Tile(ctxG,900, 100, 10, 110),
    new Tile(ctxG,900, 250, 10, 210),
    new Tile(ctxG,600, 200, 300, 10),
    new Tile(ctxG,600, 250, 300, 10),
    new Tile(ctxG,600, 450, 300, 10),
    new Tile(ctxG,0, 250, 160, 10),
    new Tile(ctxG,0, 300, 160, 10),
    new Tile(ctxG,0, 450, 150, 10),
    new Tile(ctxG, 200, 300, 300, 10),
    new Tile(ctxG,150, 300, 10, 160),
    new Tile(ctxG,200, 300, 10, 150),
    new Tile(ctxG,200, 450, 300, 10),
    new Tile(ctxG,500, 300, 10, 160),
    new Tile(ctxG,900, 350, 50, 10),
    new Tile(ctxG,950, 400, 50, 10),
]

let previousTime = performance.now();
function cycle(now = performance.now()) {
    const dt = (now - previousTime) / 1000
    previousTime = now

    update(dt);
    draw();

    requestAnimationFrame(cycle);
}

function draw() {
    map.forEach(t => t.draw());
}

function update() {
}

cycle();
