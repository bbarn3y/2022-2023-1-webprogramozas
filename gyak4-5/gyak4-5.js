// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

let adversaryInterval;
let adversarysTurn = false;
let gameOver = false;
const solution = randomNumber(1, 100);
console.log('solution', solution);
let tomb = [10, 20, 30];
let tomb2 = new Array(10);

const containerEl = document.getElementById('container');

function adversaryGuess() {
    // const guess = randomNumber(1, 100);
    const availableOptions = [...document.querySelectorAll('.cell')]
        .filter((cellEl) => cellAvailable(cellEl))
        .map((cellEl) => +cellEl.innerHTML)
    console.log('availableOptions', availableOptions);
    const guess = availableOptions[randomNumber(0, availableOptions.length - 1)];
    console.log('adversary\'s guess', guess);

    const guessEl = [...document.querySelectorAll('.cell')]
        .find((el) => +el.innerHTML === guess)

    if (guessEl) {
        if (guess === solution) {
            guessEl.classList.add('adversarys-won');
            gameOver = true;
            clearInterval(adversaryInterval);
            alert('You lose!');
        } else {
            guessEl.classList.add('adversarys-wrong-guess');
        }
    } else {
        console.log('Matching cell not found, tragedy!');
    }
    adversarysTurn = false;
}

function cellAvailable(target) {
    return !gameOver &&
        !target.classList.contains('player-wins') &&
        !target.classList.contains('player-wrong-guess') &&
        !target.classList.contains('adversarys-won') &&
        !target.classList.contains('adversarys-wrong-guess')
}

function createGrid() {
    function createRow(rowIndex) {
        return `<div>${[...new Array(10).keys()].map(i => i + 1).map(i => '<span class="cell">' + (i + rowIndex * 10) + '</span>').join('')}</div>`
    }

    const gridHTML = [...new Array(10).keys()]
        .map(i => createRow(i))
        .join('')

    containerEl.innerHTML = gridHTML;
}

createGrid();

delegate(containerEl, 'click', '.cell', (event) => {
    if (adversarysTurn || !cellAvailable(event.target)) {
        return;
    }
    console.log('click', event, event.target);

    const guess = +event.target.innerHTML;
    console.log(guess, typeof guess);

    if (guess === solution) {
        event.target.classList.add('player-wins');
        gameOver = true;
        clearInterval(adversaryInterval);
        alert("You win!")
    } else {
        event.target.classList.add('player-wrong-guess');
        adversarysTurn = true;
        setTimeout(() => {
            adversaryGuess();
        }, randomNumber(1000, 2500));
    }
});

// adversaryInterval = setInterval(() => {
//     adversaryGuess();
// }, 5000);


/**
 * Form, regexp, localStorage
 */
const formEl = document.querySelector('#form');
const availableEl = formEl.elements['availableInCinemas'];
const nextEl = formEl.elements['next'];
const protagonistEl = formEl.elements['protagonist'];
const titleEl = formEl.elements['title'];

function init () {
    try {
        const formState = JSON.parse(localStorage.getItem('formState'));
        availableEl.value = formState.available;
        nextEl.value = formState.next;
        protagonistEl.value = formState.protagonist;
        titleEl.value = formState.title;
    } catch (e) {
        console.log('e', e);
    }

}

function validateNext() {
    console.log('nextEl', nextEl.value);
    if (availableEl.value === 'yes' && !nextEl.value) {
        console.log('nextEl is invalid!');
        nextEl.setCustomValidity('If the movie is available in cinemas, then the next date must be provided.');
    } else {
        nextEl.setCustomValidity('');
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log('submitForm', event);
    console.log(availableEl, nextEl);
    validateNext();

    if ([...formEl.elements].every((element) => element.validity.valid)) {
        const state = {
            'available': availableEl.value,
            'next': nextEl.value,
            'protagonist': protagonistEl.value,
            'title': titleEl.value
        };
        localStorage.setItem('formState', JSON.stringify(state))
    }
}

init();
