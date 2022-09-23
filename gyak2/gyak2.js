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

function isUnderage(person) {
    return person.age < 18;
}

/**
 * Returns people whose age is less than 18.
 * @param people An array that contains persons with the following fields: name, age, sex
 * filter: person -> boolean
 */
function underagePeople(people) {
    // return people.filter(function(person) {
    //     return person.age < 18;
    // });

    // return people.filter(isUnderage);

    // return people.filter((person) => {
    //     return person.age < 18;
    // });

    return people.filter((person) => person.age < 18);
}

/**
 * Get the name of each person in an array
 * @param people An array that contains persons with the following fields: name, age, sex
 * map: person -> any
 */
function getFullNames(people) {
    return people
        .map((person) => person.name);
}

/**
 * An array that contains every firstname and lastname(s).
 * @param people An array that contains persons with the following fields: name, age, sex
 * flatMap: person -> any[]
 */
function getSplitNames(people) {
    return people.flatMap((person) => person.name.split(' '));
}

/**
 * A unique array that contains every firstname and lastname(s).
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function getUniqueSplitNames(people) {
    return [...new Set(getSplitNames(people))]
}

/**
 * Counts the number of males
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function countMales(people) {
    return people
        .filter((person) => person.sex === 'M')
        .length;
}

/**
 * Find the first person whose name contains the specified "name" string.
 * @param people An array that contains persons with the following fields: name, age, sex
 * @param name The string we're looking for in the person's name
 * find: person -> person | undefined
 */
function findFirstWithName(people, name) {
    return people.find((person) => person.name.includes(name))
}

/**
 * Find the index of the first person whose name contains the specified "name" string.
 * @param people An array that contains persons with the following fields: name, age, sex
 * @param name The string we're looking for in the person's name
 * findIndex: person -> number | undefined
 */
function findIndexOfFirstWithName(people, name) {
    return people.findIndex((person) => person.name.includes(name))
}

/**
 * The cumulative age of every person
 * @param people An array that contains persons with the following fields: name, age, sex
 * reduce: (partialResult, person) -> any
 */
function cumulativeAge(people) {
    return people.reduce((partialSum, person) => partialSum + person.age, 0)
}

/**
 * The cumulative age of underage people
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function cumulativeAgeOfUnderagePeople(people) {
    return people
        .filter(isUnderage)
        .reduce((partialSum, person) => partialSum + person.age, 0);
}


console.log(
    'People: ', persons,
    '\nUnderage people: ', underagePeople(persons),
    '\nFull names: ', getFullNames(persons),
    '\nSplit name: ', getSplitNames(persons),
    '\nUnique split names: ', getUniqueSplitNames(persons),
    '\nMales: ', countMales(persons),
    '\nFirst Hanna: ', findFirstWithName(persons, 'Hanna'),
    '\nIndex of first Hanna: ', findIndexOfFirstWithName(persons, 'Hanna'),
    '\nCumulative age: ', cumulativeAge(persons),
    '\nCumulative age of underage people: ', cumulativeAgeOfUnderagePeople(persons)
);

// DOM
function sqrt(number) {
    return Math.sqrt(number);
}

const sqrtButton = document.querySelector('#sqrtButton')
const sqrtInput = document.querySelector('#sqrtInput')
const sqrtResult = document.querySelector('#sqrtResult')

console.log(sqrtButton, sqrtInput)

sqrtButton.addEventListener('click', function() {
    console.log('clicky', sqrtInput.value, sqrt(sqrtInput.value));
    sqrtResult.innerHTML = sqrt(sqrtInput.value);
});

// Multiplification table
const multiInput = document.querySelector('#multiInput')
const table = document.querySelector('table')

multiInput.addEventListener('input', function(event) {
    table.innerHTML = '';
    console.log('input', event, event.target.valueAsNumber);
    const multiInputValue = event.target.valueAsNumber;

    if (multiInputValue <= 100) {
        multiInput.classList.remove('error');

        for(let i = 1; i <= multiInputValue; i++) {
            const row = document.createElement('tr');
            for (let j = 1; j <= multiInputValue; j++) {
                const cell = document.createElement('td');
                cell.innerHTML = i * j;
                row.append(cell);
            }
            table.append(row);
        }
    } else {
        multiInput.classList.add('error');
    }
})
