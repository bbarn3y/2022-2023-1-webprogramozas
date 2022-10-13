// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

let tomb = [10, 20, 30];
let tomb2 = new Array(10);

const containerEl = document.getElementById('container');

function createGrid() {
    function createRow(rowIndex) {
        return `<div>${[...new Array(10).keys()].map(i => i + 1).map(i => '<span class="cell">' + i + rowIndex * 10 + '</span>').join('')}</div>`
    }

    const gridHTML = [...new Array(10).keys()]
        .map(i => createRow(i))
        .join('')

    containerEl.innerHTML = gridHTML;
}

createGrid();

delegate(containerEl, 'click', '.cell', (event) => {
    console.log('click', event, event.target);
});
