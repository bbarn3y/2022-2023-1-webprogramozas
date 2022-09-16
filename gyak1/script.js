// Szöveg kiíratása console-ra
console.log("\"Helló világ!\"");

// Sztringek használata
const name = 'Barna';
console.log("Helló " + name + 4 + "!");

console.log(`Helló ${name}!`)

// Adattípusok
console.log('helló', +'612', 510, 6.1, true, false, [1, 2, 3], {
    name: 'Rick',
    age: 65,
    attributes: ["DRUNK", "INTELLIGENT"]
})

// Faktoriális számítás, for ciklus, elágazás, tenary operátor
function fakt(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i // result = result * i
    }
    return result
}

function fakt2(n) {
    if (n > 0) {
        return fakt2(n - 1) * n
    } else {
        return 1
    }
}

function fakt3(n) {
    return (n > 0)
        ? (fakt3(n - 1) * n)
        : 1
}

// Tesztelés
console.assert(fakt(5) === 120, 'fakt() is broken!')
console.log('Faktoriális', fakt(5), fakt2(5), fakt3(5))

// Tömbök, negatív számok kiválogatása
let array = [-4, 12, 5.3, 120, -2, 30]

function negativeNumbers(numbers) {
    const results = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            results.push(numbers[i])
        }
    }
    return results
}

function negativeNumbers2(numbers) {
    return numbers.filter((n) => {
        return n < 0
    })
}

console.log(negativeNumbers(array), negativeNumbers2(array))

