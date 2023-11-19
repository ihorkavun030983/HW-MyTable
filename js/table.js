let myTable = document.createElement('table');
for (let i = 1; i <= 10; i++) {
    let rows = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        let columns = document.createElement('td');
        let columnText = document.createTextNode((i - 1) * 10 + j);
        columns.appendChild(columnText);
        rows.appendChild(columns);
    }
    myTable.appendChild(rows);
}
document.body.appendChild(myTable);