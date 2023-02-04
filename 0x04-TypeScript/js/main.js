var studentA = {
    firstName: "Karen",
    lastName: "Johnson",
    age: 25,
    location: "Texas"
};
var studentB = {
    firstName: "Jide",
    lastName: "Adesola",
    age: 32,
    location: "Nigeria"
};
var studentsList = [studentA, studentB];
var Body = document.getElementsByTagName("body")[0];
var Table = document.createElement("table");
var tHead = document.createElement("thead");
var tBody = document.createElement("tbody");
var rowHead = tHead.insertRow(0);
var firstCellHead = rowHead.insertCell(0);
var secondCellHead = rowHead.insertCell(1);
firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
Table.append(tHead);
studentsList.forEach(function (student) {
    var row = tBody.insertRow(0);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});
Table.append(tBody);
Body.append(Table);
