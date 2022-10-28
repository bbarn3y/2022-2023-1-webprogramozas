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
let gameOver = false;
let trapImageWidth;
let trapImageHeight;

class Exit {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x + this.width, this.y);
        this.context.lineTo(this.x + this.width, this.y - this.height);
        this.context.quadraticCurveTo(this.x + this.width / 2,
            this.y - this.height * 1.5,
            this.x,
            this.y - this.height);
        this.context.lineTo(this.x, this.y);
        this.context.closePath();
        this.context.stroke();
    }

    rect() {
        return {
            x: this.x,
            y: this.y - this.height * 1.25,
            width: this.width,
            height: this.height * 1.25
        }
    }
}

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

class Trap {
    constructor(context) {
        this.context = context;
        this.reset();
    }

    draw() {
        this.context.drawImage(trapImgEl, this.x, this.y);
    }

    move() {
        this.y += 2;
        if (this.y > canvasHeight) {
            this.reset();
        }
    }

    rect() {
        return {
            x: this.x,
            y: this.y,
            width: trapImageWidth,
            height: trapImageHeight
        }
    }

    reset() {
        console.log('trapImageHeight', trapImageHeight)
        this.x = randomNumber(250, 500);
        this.y = 0 - trapImageHeight;
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

const exits = [
    new Exit(ctxG, 960, 325, 30, 50)
];

const player = new Player(ctxG, 20, 20, 20);

const traps = [];

let previousTime = performance.now();
function cycle(now = performance.now()) {
    if (gameOver) return;
    const dt = (now - previousTime) / 1000
    previousTime = now

    update(dt);
    draw();
    detectCollision();

    requestAnimationFrame(cycle);
}

function draw() {
    ctxG.clearRect(0, 0, 1000, 500);
    map.forEach(t => t.draw());
    exits.forEach(e => e.draw());
    player.draw();
    traps.forEach(t => t.draw());
}

function update() {
    traps.forEach(t => t.move());
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
    if (traps.some((trap) => rectanglesCollide(player.rect(), trap.rect()))) {
        alert("You lost!");
        gameOver = true;
    }
    if (exits.some((exit) => rectanglesCollide(player.rect(), exit.rect()))) {
        alert("You won!");
        gameOver = true;
    }
    return false;
}


const trapImgEl = document.getElementById('trapImg');
const imageTrap = new Image();
imageTrap.onload = function(event) {
    console.log('event', event);
    trapImageWidth = event.path[0].width;
    trapImageHeight = event.path[0].height;
    console.log('trapImageHeight', trapImageHeight);
    traps.push(new Trap(ctxG));
    cycle();
}
imageTrap.src = 'trap_transparent.png'

document.addEventListener('keydown', (event) => {
    if (gameOver) return;
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
