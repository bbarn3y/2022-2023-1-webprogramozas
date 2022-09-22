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

/**
 * Returns people whose age is less than 18.
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function underagePeople(people) {

}

/**
 * Get the name of each person in an array
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function getFullNames(people) {

}

/**
 * An array that contains every firstname and lastname(s).
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function getSplitNames(people) {

}

/**
 * A unique array that contains every firstname and lastname(s).
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function getUniqueSplitNames(people) {

}

/**
 * Counts the number of males
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function countMales(people) {

}

/**
 * Find the first person whose name contains the specified "name" string.
 * @param people An array that contains persons with the following fields: name, age, sex
 * @param name The string we're looking for in the person's name
 */
function findFirstWithName(people, name) {

}

/**
 * Find the index of the first person whose name contains the specified "name" string.
 * @param people An array that contains persons with the following fields: name, age, sex
 * @param name The string we're looking for in the person's name
 */
function findIndexOfFirstWithName(people, name) {

}

/**
 * The cumulative age of every person
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function cumulativeAge(people) {

}

/**
 * The cumulative age of underage people
 * @param people An array that contains persons with the following fields: name, age, sex
 */
function cumulativeAgeOfUnderagePeople(people) {

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

