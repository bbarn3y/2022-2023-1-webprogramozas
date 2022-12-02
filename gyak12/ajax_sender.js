document.querySelector('#simpleGetButton').addEventListener('click', simpleGetHandler);

function simpleGetHandler() {
    fetch('http://localhost:8000/ajax_receiver.php?test=asd&query=asdasd')
        .then((response) => response.text())
        .then((text) => document.querySelector('#simpleGetResult').innerHTML = text);
}


document.querySelector('#simplePostButton').addEventListener('click', simplePostHandler);

function simplePostHandler() {
    const formData = new FormData();
    formData.append('city', 'Budapest');
    formData.append('zip', 1156);
    fetch('http://localhost:8000/ajax_receiver.php', {
        method: 'POST',
        body: formData
    }).then((response) => response.json())
        .then((json) => document.querySelector('#simplePostResult').innerHTML = JSON.stringify(json));
}

document.querySelector('#simpleJSONPostButton').addEventListener('click', simplePostJSONHandler);

function simplePostJSONHandler() {
    fetch('http://localhost:8000/ajax_receiver.php', {
        method: 'POST',
        body: JSON.stringify({
            city: 'Budapest',
            zip: '1156'
        })
    }).then((response) => response.json())
        .then((json) => document.querySelector('#simpleJSONPostResult').innerHTML = JSON.stringify(json));
}

document.querySelector('#wordForm').addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
    event.preventDefault();
    const form = document.querySelector('#wordForm');
    const formData = new FormData(form);
    const promise = fetch('http://localhost:8000/ajax_form_receiver.php', {
        method: 'POST',
        body: formData
    });

    // JSON
    // handleJSONFormResponse(promise);

    // HTML
    handleHTMLFormResponse(promise);
}

function handleHTMLFormResponse(promise) {
    promise.then((response) => response.text())
        .then((text) => {
            document.querySelector('#wordFormHTMLResult').innerHTML = text;
        });
}

function handleJSONFormResponse(promise) {
    promise.then((response) => response.json())
        .then((results) => {
            document.querySelector('#wordFormResult tbody').innerHTML = '';
            Object.keys(results).forEach((key) => {
                document.querySelector('#wordFormResult tbody').innerHTML += `
                    <tr>
                        <td>${key}</td>
                        <td>${results[key]}</td>
                    </tr>
                `;
            });
        });
}

