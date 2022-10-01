// Practicing array functions
let persons = [
    {
        name: 'Nagy Dániel',
        age: 44,
        sex: 'M'
    },
    {
        name: 'Közepes Károly',
        age: 32,
        sex: 'M'
    },
    {
        name: 'Kis Karolina',
        age: 18,
        sex: 'F'
    },
    {
        name: 'Temesvári Hanna',
        age: 10,
        sex: 'F'
    },
    {
        name: 'Nagy Béla',
        age: 66,
        sex: 'M'
    },
    {
        name: 'Kovács Máté',
        age: 14,
        sex: 'M'
    },
    {
        name: 'Nagy Hanna Márta',
        age: 31,
        sex: 'F'
    }
]

// Find the youngest female...

// ... by calculating the minimum age first, then finding the female how's of that age.
const ages = persons
    .filter(person => person.sex === 'F')
    .map(person => person.age)
const minAge = Math.min(...ages)
console.log(minAge)
console.log(persons.filter(person => person.sex === 'F').find(person => person.age === minAge).name)

// ... by sorting the whole array by age, then getting the first person.
console.log(persons
    .filter(person => person.sex === 'F')
    .sort((person1, person2) => person1.age - person2.age)[0].name)

// ... using reduce.
console.log(persons
    .filter(person => person.sex === 'F')
    .reduce((previousPerson, person) => previousPerson.age < person.age ? previousPerson : person).name)

// Color element based on click
const colors = ['blue', 'green', 'red', 'gray'];
const colorMeElement = document.querySelector('#colorMe');
colorMeElement.addEventListener('click', (event) => {
    console.log(colorMeElement, colorMeElement.style);
    const currentColor = colorMeElement.style.color;
    const currentColorIndex = colors.findIndex((c) => c === currentColor);
    console.log(currentColorIndex);
    const newColorIndex = (currentColorIndex === colors.length - 1) ? 0 : currentColorIndex + 1
    colorMeElement.style.color = colors[newColorIndex];
});

// Conditionally block the default action of the checkbox
const checkboxElement = document.querySelector('#checkMeBox');
const checkboxSelectorElement = document.querySelector('#checkboxSelector');
checkboxElement.addEventListener('click', (event) => {
    console.log(checkboxSelectorElement, checkboxSelectorElement.value);
    if (checkboxSelectorElement.value === 'DISALLOW') {
        console.log('Ha-ha, you can\'t!');
        event.preventDefault();
    }
});

// Print the color of the clicked rectangle... and only that!
const outerRectangleElement = document.querySelector('#outerRectangle');
const innerRectangleElement = document.querySelector('#innerRectangle');
outerRectangleElement.addEventListener('click', (event) => {
    console.log('blue');
    event.stopPropagation();
});
innerRectangleElement.addEventListener('click', (event) => {
    console.log('red');
    event.stopPropagation();
});

// Global click listener
document.addEventListener('click', (event) => {
    console.log('Document clicked', event);
});

// Hyperlink disabler
function preventDefaultEvent(event) {
    event.preventDefault();
}
const disablerButton = document.querySelector('#hyperlinkDisabled');

disablerButton.addEventListener('click', (event) => {
    document.querySelectorAll('.possibly-disabled').forEach((element) => {
        if (Math.random() < 0.5) {
            element.classList.add('disabled');
        } else {
            element.classList.remove('disabled');
        }
    })
});

// Add and remove event listeners on demand.
// :(
// This solution is messy and inefficient.
function messyEventHandling() {
    disablerButton.addEventListener('click', (event) => {
        // Using our usual array functions (map, filter, find, etc.) on the result of "querySelectorAll"
        const elements = [...document.querySelectorAll('.possibly-disabled')].map((element, index) => {
            console.log(index, element);
            return element;
        })
        console.log('elements', elements);
        document.querySelectorAll('.possibly-disabled').forEach((element) => {
            console.log(element);
            if (element.matches('.disabled')) {
                element.addEventListener('click', preventDefaultEvent)
            } else {
                element.removeEventListener('click', preventDefaultEvent)
            }
        })
    });
}

// Add hyperlink click listener to the container and block opening the URL if the target is disabled.
// :|
// This solution is better than the previous one, but it could be simplified still.
function mediocreEventHandling() {
    document.querySelector('#hyperlinkContainer').addEventListener('click', (event) => {
        console.log('Container clicked', event);
        if (event.target.matches('.possibly-disabled')) {
            if (event.target.classList.contains('disabled')) {
                event.preventDefault();
            }
        }
    });
}

// The same solution using Győző's delegate function.
// :)
// This solution is awesome... and reusable!
function smartEventHandling() {
    function delegate(parent, type, selector, handler) {
        parent.addEventListener(type, function (event) {
            const targetElement = event.target.closest(selector);

            if (this.contains(targetElement)) {
                handler.call(targetElement, event);
            }
        });
    }

    delegate(document.querySelector('#hyperlinkContainer'), 'click', 'A.possibly-disabled.disabled', (event) => {
        event.preventDefault()
    })
}

//messyEventHandling();
//mediocreEventHandling();
smartEventHandling();
