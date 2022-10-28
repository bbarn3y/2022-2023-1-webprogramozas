// https://mocki.io/fake-json-api
// https://jsonplaceholder.typicode.com/

// JSON example:
const jsonExample =
[
    {
        "name": "Nagy Dániel",
        "age": 44,
        "sex": "M"
    },
    {
        "name": "Közepes Károly",
        "age": 32,
        "sex": "M"
    },
    {
        "name": "Kis Karolina",
        "age": 18,
        "sex": "F"
    },
    {
        "name": "Temesvári Hanna",
        "age": 10,
        "sex": "F"
    },
    {
        "name": "Nagy Béla",
        "age": 66,
        "sex": "M"
    },
    {
        "name": "Kovács Máté",
        "age": 14,
        "sex": "M"
    },
    {
        "name": "Nagy Hanna Márta",
        "age": 31,
        "sex": "F"
    }
]

function errorHandler(event) {
    console.log('Error!', event);
}
function loadHandler(event) {
    console.log('Loaded')
}

document.getElementById('xmlRequest').addEventListener('click', (event) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', loadHandler);
    xhr.addEventListener('error', errorHandler);
    xhr.open("GET", `https://mocki.io/v1/b3f995b9-a4bc-44cb-8649-9936b0afba3b`);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log('xhr.response', xhr.response);
            const jsResponse = JSON.parse(xhr.response);
            console.log(jsResponse.filter(p => p.age < 40));
        }
    }
});

document.getElementById('fetchRequest').addEventListener('click', (event) => {
    fetch(`https://mocki.io/v1/b3f995b9-a4bc-44cb-8649-9936b0afba3b`)
        .then((response) => response.json())
        .then((response) => {
            console.log('response', response);
            console.log(response.filter(p => p.age < 30));
        })
        .catch((error) => console.log('error', error));

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
            "name": "Új Ubul",
            "age": 54,
            "sex": "M"
        })
    })
        .then((response) => response.json())
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => console.log('error', error));
});


