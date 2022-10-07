/**
 * Task 1: Games
 */
let games = [
    {
        name: 'Elden Ring',
        genre: 'RPG',
        score: 95
    },
    {
        name: 'Dying Light 2',
        genre: 'FPS',
        score: 76
    },
    {
        name: 'Nightmare Reaper',
        genre: 'FPS',
        score: 81
    },
    {
        name: 'Horizon: Forbidden West',
        genre: 'RPG',
        score: 88
    },
    {
        name: 'Metal: Hellsinger',
        genre: 'FPS',
        score: 78
    },
    {
        name: 'Circus Electrique',
        genre: 'Strategy',
        score: 74
    },
    {
        name: 'Babylon\'s Fall',
        genre: 'RPG',
        score: 43
    },
    {
        name: 'The Last of Us Part I',
        genre: 'Action',
        score: 88
    },
    {
        name: 'The Quarry',
        genre: 'Adventure',
        score: 79
    },
    {
        name: 'Ghostwire: Tokyo',
        genre: 'Action',
        score: 77
    },
    {
        name: 'Syberia: The World Before',
        genre: 'Adventure',
        score: 81
    },
    {
        name: 'Cuphead: The Delicious Last Course',
        genre: 'Platformer',
        score: 88
    },
    {
        name: 'Rogue Legacy 2',
        genre: 'Metroidvania',
        score: 90
    },
    {
        name: 'Escape Academy',
        genre: 'Puzzle',
        score: 81
    },
    {
        name: 'NORCO',
        genre: 'Adventure',
        score: 90
    },
    {
        name: 'Pokémon Legends: Arceus',
        genre: 'RPG',
        score: 84
    },
    {
        name: 'Stray',
        genre: 'Platformer',
        score: 84
    }
]

/**
 * Task 1: Array
 */
// 1.1
console.log(games.filter(game => game.genre === 'Action'));

// 1.2
console.log(games.find(game => game.genre === 'RPG' && game.score < 50));

// 1.3
console.log(games.filter(game => game.score >= 90).map(game => game.name));

// 1.4
console.log(games.sort((game1, game2) => game1.name.localeCompare(game2.name)));

// 1.5
const sum = games.reduce((partialSum, game) => partialSum + game.score, 0);
console.log(sum / games.length);


/**
 * Task 2: Light switch
 */
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

const casingElement = document.querySelector('.casing');
const containerElement = document.querySelector('#container');
const switchElement = document.querySelector('.casing .switch');

// 2.1, 2.2
casingElement.addEventListener('click', (event) => {
    if (event.target.matches('.casing')) {
        alert('Hoppá, majdnem eltaláltad a kapcsolót, de pont nem!');
    }
});

// 2.2, 2.3
switchElement.addEventListener('click', (event) => {
    // event.stopPropagation(); // @note Alternative solution for 1.2
    if (switchElement.classList.contains('on')) {
        switchElement.classList.remove('on');
        containerElement.style.backgroundColor = 'black';
    } else {
        switchElement.classList.add('on');
        containerElement.style.backgroundColor = 'yellow';
    }
});

// 2.4
delegate(casingElement, 'click', 'A', (event) => {
    event.preventDefault();
});

