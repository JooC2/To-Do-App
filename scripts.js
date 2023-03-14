const addButton = document.getElementById('add_btn');
const inputText = document.getElementById('input_text');
const table = document.getElementById('main_table');

function addrow() {
    const text = inputText.value;
    const new_row = table.insertRow();
    const cell1 = new_row.insertCell(0);
    const cell2 = new_row.insertCell(1);
    cell1.innerHTML = text;
    cell2.innerHTML = '<input type="checkbox" onclick="remove_row(this)"></input>';
    cell2.id = 'checkbox';
    inputText.value = '';
}

function remove_row(row) {
    row.parentNode.parentNode.parentNode.removeChild(row.parentNode.parentNode);
}

addButton.addEventListener('click', addrow);

inputText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addrow();
    }
});