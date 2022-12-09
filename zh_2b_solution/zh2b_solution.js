// 1.2, 1.3, 1.9
document.querySelector('#queryForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(document.querySelector('#queryForm'));
    fetch('http://localhost:8000/zh2b_solution.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(text => {
            console.log(text);
            document.querySelector('#queryResult').innerHTML = text;
        });
});
