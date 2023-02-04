interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentA: Student = {
    firstName: "Karen",
    lastName: "Johnson",
    age: 25,
    location: "Texas"
}

const studentB: Student = {
    firstName: "Jide",
    lastName: "Adesola",
    age: 32,
    location: "Nigeria"
}

const studentsList: Student[] = [studentA, studentB];

const Body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const Table: HTMLTableElement = document.createElement("table");
const tHead: HTMLTableSectionElement = document.createElement("thead");
const tBody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = tHead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
Table.append(tHead);

studentsList.forEach((student) => {
    
    const row: HTMLTableRowElement = tBody.insertRow(0);
    const firstCell: HTMLTableCellElement = row.insertCell(0);
    const secondCell: HTMLTableCellElement = row.insertCell(1);

    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});

Table.append(tBody);
Body.append(Table);