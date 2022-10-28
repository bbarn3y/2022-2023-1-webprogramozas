function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

const canvP = document.querySelector('canvas#practice');
const ctxP = canvP.getContext('2d');

ctxP.font = "bold italic 20px Arial";
ctxP.fillText('Text', 20, 20);
ctxP.strokeText('Text', 20, 50);

ctxP.fillRect(100, 20, 40, 20);
ctxP.strokeRect(100, 60, 40, 20);

const wikiImgEl = document.getElementById('wikiImg');
const image = new Image();
image.onload = function() {
    ctxP.drawImage(wikiImgEl, 150, 0);
}
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

ctxP.clearRect(120, 20, 10, 10);

ctxP.moveTo(20, 150);
ctxP.beginPath();
ctxP.lineTo(60, 150);
ctxP.lineTo(60, 100);
ctxP.bezierCurveTo(120, 80, 150, 80, 20, 150);
ctxP.closePath();
ctxP.stroke();

const canvG = document.querySelector('canvas#game');
const ctxG = canvG.getContext('2d');
const canvasWidth = canvG.width;
const canvasHeight = canvG.height;

class Player {
    constructor(context, x, y, radius) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, this.radius, this.radius, 0, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    rect() {
        return {
            x: this.x - this.radius,
            y: this.y - this.radius,
            width: 2 * this.radius,
            height: 2 * this.radius
        };
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
}

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

const player = new Player(ctxG, 20, 20, 20);

let previousTime = performance.now();
function cycle(now = performance.now()) {
    const dt = (now - previousTime) / 1000
    previousTime = now

    update(dt);
    draw();

    requestAnimationFrame(cycle);
}

function draw() {
    ctxG.clearRect(0, 0, 1000, 500);
    map.forEach(t => t.draw());
    player.draw();
}

function update() {
}

function rectanglesCollide(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
}

function detectCollision() {
    if (map.some((tile) => rectanglesCollide(player.rect(), tile))) {
        return true;
    }
    return false;
}

cycle();

document.addEventListener('keydown', (event) => {
    const previousPosition = { x: player.x, y: player.y }
    switch (event.key) {
        case 'ArrowLeft':
            player.move(-5, 0);
            break;
        case 'ArrowRight':
            player.move(5, 0);
            break;
        case 'ArrowUp':
            player.move(0, -5);
            break;
        case 'ArrowDown':
            player.move(0, 5);
            break;
        default:
            break;
    }
    if (detectCollision()) {
        player.setPos(previousPosition.x, previousPosition.y);
    }
    draw();
});
